import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get thread_id from URL parameters
    const thread_id = request.nextUrl.searchParams.get("thread_id");
    console.log(thread_id)


    // Retrieve token from cookies
    const token = request.cookies.get("token")?.value;

    // Check if both token and thread_id are available
    if (!token || !thread_id) {
      return NextResponse.json(
        {
          message: "Token or thread ID not found",
          success: false,
        },
        { status: 400 }
      );
    }

    // Make the API request to the third-party service
    const api = `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_id}`;
    console.log("API: ",api)
    const response = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response: ",response.data)

    // Return a successful response with the data
    return NextResponse.json({
      message: "Onebox thread fetched successfully",
      data: response.data,
      success: true,
    });
  } catch (error: any) {
    // Log the actual error
    console.error("Error fetching emails:", error);
    return NextResponse.json(
      {
        message: "Error fetching emails",
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
