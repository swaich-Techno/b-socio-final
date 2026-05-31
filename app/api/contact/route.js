import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import ContactLead from "@/models/ContactLead";

export async function GET() {
  return NextResponse.redirect(new URL("/contact", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"));
}

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await request.json()
      : Object.fromEntries(await request.formData());

    const lead = {
      name: String(body.name || "").trim(),
      businessName: String(body.businessName || "").trim(),
      phone: String(body.phone || "").trim(),
      email: String(body.email || "").trim(),
      serviceRequired: String(body.serviceRequired || "").trim(),
      message: String(body.message || "").trim()
    };

    if (!lead.name || !lead.phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    await connectDB();
    const saved = await ContactLead.create(lead);
    return NextResponse.json({ success: true, leadId: saved._id.toString() }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Lead could not be saved. The public contact links still work.",
        reason: error.message
      },
      { status: 500 }
    );
  }
}
