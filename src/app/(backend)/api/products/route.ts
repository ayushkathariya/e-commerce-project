import { v2 as cloudinary } from "cloudinary";
import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";
import { Role } from "@/utils/constants";
import { cloudinaryConfig } from "@/utils/cloudinary";

//   Cloudinary Configuration
cloudinaryConfig();

export async function GET(request: NextRequest) {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(
      {
        data: {
          products,
          status: 200,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        error: {
          message: "Internal Server Error",
          statusCode: 500,
        },
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getAuthSession();

    if (!session || session?.user.role !== (Role.Admin as any)) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Forbidden",
            statusCode: 403,
          },
        },
        {
          status: 403,
        }
      );
    }

    const { title, description, image, price, quantity, category } =
      await request.json();

    if (!title || !description || !image || !price || !quantity || !category) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "All fields are requried",
            statusCode: 400,
          },
        },
        {
          status: 400,
        }
      );
    }

    const cloudinaryImage = await cloudinary.uploader.upload(image, {
      folder: "Products",
    });

    await prisma.product.create({
      data: {
        title,
        description,
        price,
        quantity,
        image: cloudinaryImage.url,
        image_id: cloudinaryImage.public_id,
        category: {
          connect: { id: category },
        },
      },
    });

    return NextResponse.json(
      {
        data: {
          message: "Product created successfully",
          status: 201,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        error: {
          message: "Internal Server Error",
          statusCode: 500,
        },
      },
      {
        status: 500,
      }
    );
  }
}
