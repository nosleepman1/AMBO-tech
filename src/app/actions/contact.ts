"use server";

import nodemailer from "nodemailer";

export async function sendEmailAction(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { success: false, error: "Tous les champs sont requis." };
    }

    // Configure this with your real SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || "user",
        pass: process.env.SMTP_PASS || "pass",
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL || "contact@ambo-tech.com",
      subject: `Nouveau message de ${name} - AMBO TECH`,
      text: message,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return { success: true, message: "Votre message a été envoyé avec succès !" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Une erreur est survenue lors de l'envoi." };
  }
}
