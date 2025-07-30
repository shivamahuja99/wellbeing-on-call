import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BookingEmailRequest {
  name: string;
  contactNumber: string;
  ageOrDob: string;
  city: string;
  service: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, contactNumber, ageOrDob, city, service }: BookingEmailRequest = await req.json();

    console.log('Processing booking email for:', { name, service, city });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0d9488, #f97316); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; text-align: center;">New Booking Request</h1>
          <p style="color: white; margin: 10px 0 0; text-align: center;">IllandPill - Heal at Home</p>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
          <h2 style="color: #0d9488; margin-bottom: 20px;">Booking Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Service:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0d9488; font-weight: bold;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Patient Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Contact Number:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${contactNumber}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Age/DOB:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${ageOrDob}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">City:</td>
              <td style="padding: 10px 0; color: #6b7280;">${city}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 5px;">
            <p style="margin: 0; color: #92400e; font-weight: bold;">⚡ Action Required:</p>
            <p style="margin: 5px 0 0; color: #92400e;">Please contact the patient within 2 hours to confirm the appointment and provide further details.</p>
          </div>
          
          <div style="margin-top: 20px; text-align: center;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Booking submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "IllandPill Bookings <bookings@resend.dev>",
      to: ["connect@illandpill.com"],
      subject: `New Booking: ${service} - ${name}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);