import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, concern, message, duration, type } = body;

    // Validate Name
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    // Validate Phone (must contain at least 8 digits)
    const sanitizedPhone = String(phone || "").replace(/[^\d+]/g, "");
    const digitCount = sanitizedPhone.replace(/\D/g, "").length;
    if (!sanitizedPhone || digitCount < 8 || digitCount > 15) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid phone number (at least 8 to 15 digits)." },
        { status: 400 }
      );
    }

    // Clean inputs to avoid injection or noisy logs
    const sanitizedName = name.trim().slice(0, 100).replace(/[<>]/g, "");
    const sanitizedConcern = String(concern || "General Assessment").trim().slice(0, 100).replace(/[<>]/g, "");
    const sanitizedDuration = duration ? String(duration).trim().slice(0, 50).replace(/[<>]/g, "") : null;
    const sanitizedMessage = message ? String(message).trim().slice(0, 1000).replace(/[<>]/g, "") : "";

    const leadPayload = {
      timestamp: new Date().toISOString(),
      type: type || "contact_inquiry",
      name: sanitizedName,
      phone: sanitizedPhone,
      concern: sanitizedConcern,
      duration: sanitizedDuration,
      message: sanitizedMessage,
    };

    // Server-side audit log for lead capture
    console.log("[Mind Body Recovery Lead]", JSON.stringify(leadPayload));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your assessment inquiry has been received.",
        lead: {
          name: sanitizedName,
          phone: sanitizedPhone,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Mind Body Recovery Lead Error]", error);
    return NextResponse.json(
      { success: false, error: "Unable to process request at this time. Please reach out to us directly via WhatsApp or phone." },
      { status: 500 }
    );
  }
}
