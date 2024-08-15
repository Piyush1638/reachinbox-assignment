import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; // Mark this API route as dynamic

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token");

    if (token) {
      const response = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      );

      return NextResponse.json({
        message: "All mails fetched successfully",
        data: response.data,
      });
    } else {
      return NextResponse.json(
        {
          message: "Token not found",
        },
        { status: 401 }
      );
    }
  } catch (err: any) {
    console.error("Error fetching emails:", err.message);
    return NextResponse.json(
      {
        message: "Error fetching emails",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
