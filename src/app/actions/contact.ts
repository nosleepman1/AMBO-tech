"use server";

import nodemailer from "nodemailer";

export type ActionState = {
  success: boolean;
  message?: string;
  error?: string;
} | null;

export async function sendEmailAction(prevState: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    // Input validation
    if (!name || !email || !message) {
      return { success: false, error: "Tous les champs sont requis." };
    }
    if (name.length > 100) return { success: false, error: "Nom trop long." };
    if (message.length > 2000) return { success: false, error: "Message trop long." };
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Email invalide." };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || "user",
        pass: process.env.SMTP_PASS || "pass",
      },
    });

    const safeMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    await transporter.sendMail({
      from: process.env.SMTP_USER || "contact@ambo-tech.com",
      replyTo: email,
      to: process.env.CONTACT_EMAIL || "contact@ambo-tech.com",
      subject: `Nouveau message de ${name.replace(/"/g, "")} - AMBO TECH`,
      text: message,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${safeMessage}</p>`,
    });

    return { success: true, message: "Votre message a été envoyé avec succès !" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Une erreur est survenue lors de l'envoi." };
  }
}
