"use server";

import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
const requestEmailTo =
  process.env.REQUEST_TEMPLATE_EMAIL_TO || "manishpatel953249@gmail.com";

export type RequestFormResult = {
  success: boolean;
  message: string;
};

export async function submitRequest(
  formData: FormData
): Promise<RequestFormResult> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const reference = formData.get("reference") as string | null;

    if (!name || !email || !title || !description) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please provide a valid email address.",
      };
    }

    if (title.length < 3 || title.length > 100) {
      return {
        success: false,
        message: "Template title must be between 3 and 100 characters.",
      };
    }

    if (description.length < 20 || description.length > 2000) {
      return {
        success: false,
        message: "Description must be between 20 and 2000 characters.",
      };
    }

    if (reference) {
      try {
        new URL(reference);
      } catch {
        return {
          success: false,
          message: "Please provide a valid reference URL.",
        };
      }
    }

    // If Resend is not configured, return success but log locally
    if (!resend) {
      console.warn(
        "Resend email not configured. Skipping email notification in local development."
      );
      console.log("Would have sent request email:", {
        name,
        email,
        title,
        category,
        description,
        reference,
      });

      return {
        success: true,
        message:
          "Thank you for your submission! We've received your request and will review it soon. If we build it, you'll be the first to know!",
      };
    }

    const categoryLabels: Record<string, string> = {
      theme: "Themed",
      interactive: "Interactive",
      creative: "Creative",
      minimal: "Minimal",
    };

    const { error } = await resend.emails.send({
      from: "Error404 <onboarding@resend.dev>",
      to: requestEmailTo,
      replyTo: email,
      subject: `New 404 Template Request: ${title}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="border-bottom: 1px solid #e5e5e5; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="font-size: 24px; font-weight: 600; color: #0a0a0a; margin: 0;">New Template Request</h1>
            <p style="color: #737373; margin: 8px 0 0 0; font-size: 14px;">Someone has submitted a new 404 template idea</p>
          </div>
          
          <div style="background: #f5f5f5; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h2 style="font-size: 20px; font-weight: 600; color: #0a0a0a; margin: 0 0 8px 0;">${title}</h2>
            <span style="display: inline-block; background: #0a0a0a; color: #fafafa; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500;">${categoryLabels[category] || category || "Uncategorized"}</span>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 14px; font-weight: 600; color: #0a0a0a; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Description</h3>
            <p style="color: #404040; line-height: 1.6; margin: 0; white-space: pre-wrap;">${description}</p>
          </div>

          ${reference ? `
          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 14px; font-weight: 600; color: #0a0a0a; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Reference</h3>
            <a href="${reference}" style="color: #0a0a0a; word-break: break-all;">${reference}</a>
          </div>
          ` : ""}

          <div style="border-top: 1px solid #e5e5e5; padding-top: 24px; margin-top: 24px;">
            <h3 style="font-size: 14px; font-weight: 600; color: #0a0a0a; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Submitted By</h3>
            <p style="margin: 0 0 4px 0; color: #0a0a0a; font-weight: 500;">${name}</p>
            <a href="mailto:${email}" style="color: #737373; text-decoration: none;">${email}</a>
          </div>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; text-align: center;">
            <p style="color: #a3a3a3; font-size: 12px; margin: 0;">This email was sent from Error404</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "Failed to send request. Please try again.",
      };
    }

    return {
      success: true,
      message:
        "Thank you for your submission! We've received your request and will review it soon. If we build it, you'll be the first to know!",
    };
  } catch (error) {
    console.error("Error processing request:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
