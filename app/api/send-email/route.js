import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch (parseError) {
    return new Response(JSON.stringify({ message: "Invalid request data" }), {
      status: 400,
    });
  }

  const { name, email, phone, message } = data;

  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [process.env.EMAIL_TO],
    },
    Message: {
      Subject: { Data: `New Contact Form Submission from ${name}` },
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: error.message }),
      {
        status: 500,
      }
    );
  }
}
