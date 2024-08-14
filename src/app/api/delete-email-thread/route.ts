import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    // Get thread_id from URL parameters
    console.log("I have enterd in api")
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
    console.log("Response: ",response.data.data)

    // Return a successful response with the data
    return NextResponse.json({
      message: "Email message deleted successfully",
      data: response.data,
      success: true,
    });
  } catch (error: any) {
    // Log the actual error
    console.error("Error deleting emails:", error);
    return NextResponse.json(
      {
        message: "Error deleting emails",
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
