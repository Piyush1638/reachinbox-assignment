import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { thread_id, to, from, subject, body } = reqBody;
    const token = request.cookies.get("token")?.value;
    console.log("Token: ",token);

    if (token && thread_id) {
      const api = `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${thread_id}`;
      console.log("API: ", api);

      const response = await axios.post(
        api,
        {
          to,
          from,
          subject,
          body,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      return NextResponse.json(
        {
          message: "Email replied successfully",
          success: true,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Missing token or thread_id",
          success: false,
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Error replying emails:", error);
    return NextResponse.json(
      {
        message: "Error in replying emails",
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
