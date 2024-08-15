import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; // Mark this API route as dynamic

export async function GET(request: NextRequest) {
  try {
    const thread_id = request.nextUrl.searchParams.get("thread_id");

    const token = request.cookies.get("token")?.value;

    if (!token || !thread_id) {
      return NextResponse.json(
        {
          message: "Token or thread ID not found",
          success: false,
        },
        { status: 400 }
      );
    }

    const api = `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_id}`;
    const response = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json({
      message: "Onebox thread fetched successfully",
      data: response.data,
      success: true,
    });
  } catch (error: any) {
    console.error("Error fetching onebox thread:", error.message);
    return NextResponse.json(
      {
        message: "Error fetching onebox thread",
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
