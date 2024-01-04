import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { title: string } }
) {
  try {
    if (!params || !params.title) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Title is required",
            statusCode: 400,
          },
        },
        {
          status: 400,
        }
      );
    }

    const products = await prisma.product.findUnique({
      where: {
        title: params.title,
      },
    });

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
