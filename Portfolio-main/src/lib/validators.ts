const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function validateContactPayload(
  body: unknown
): { success: true; data: ContactPayload } | { success: false; error: string } {
  if (!body || typeof body !== "object") {
    return { success: false, error: "Invalid request body." };
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return { success: false, error: "Please provide a valid name." };
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (typeof subject !== "string" || subject.trim().length < 3) {
    return { success: false, error: "Please provide a subject." };
  }

  if (typeof message !== "string" || message.trim().length < 10) {
    return {
      success: false,
      error: "Message must be at least 10 characters.",
    };
  }

  return {
    success: true,
    data: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    },
  };
}
