import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const response = await fetch(
      `https://api.kickbox.com/v2/verify?email=${email}&apikey=${process.env.KICKBOX_API_KEY}`,
    );
    const data = await response.json();

    if (data.error && data.error.includes("Insufficient balance")) {
      return NextResponse.json({
        status: "unknown",
        message: "Email verification temporarily unavailable",
      });
    }

    if (data.result === "deliverable") {
      return NextResponse.json({ status: "valid" });
    } else {
      return NextResponse.json({ status: "invalid" });
    }
  } catch (error) {
    return NextResponse.json({
      status: "unknown",
      message: "Verification service failed, please continue.",
    });
  }
}
