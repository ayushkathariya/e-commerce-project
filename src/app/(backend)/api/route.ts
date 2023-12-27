import { getAuthSession } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
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

    const users = await prisma?.user.findMany();
    return NextResponse.json({
      data: {
        users,
        session,
      },
    });
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
