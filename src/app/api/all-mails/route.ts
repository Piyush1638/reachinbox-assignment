import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token");

    if (token) {
      const data = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      );

      return NextResponse.json({
        message: "All mails fetched successfully",
        data: data.data,
      });
    } else {
      return NextResponse.json({
        message: "Token not found",
      });
    }
  } catch (err: any) {
    throw new Error("Error: ", err.message);
  }
}
