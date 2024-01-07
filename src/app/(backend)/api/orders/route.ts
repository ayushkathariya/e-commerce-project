import { getAuthSession } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const session = await getAuthSession();
    if (!session) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Unauthorized",
            statusCode: 401,
          },
        },
        {
          status: 401,
        }
      );
    }

    const payload = await request.json();
    if (!payload) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Invalid Credentials",
            statusCode: 400,
          },
        },
        {
          status: 400,
        }
      );
    }

    const data = await axios.post(process.env.KHALTI_URL!, payload, {
      headers: {
        Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
        "Content-Type": "Application/json",
      },
    });

    return NextResponse.json({ data: data.data });
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
