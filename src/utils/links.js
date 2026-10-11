import { digitsOnly, sanitizeInstagram } from "./formatters";

export function getWhatsAppLink(number) {
  const cleaned = digitsOnly(number);

  if (cleaned.length < 10) {
    return "#";
  }

  return `https://wa.me/55${cleaned}`;
}

export function getInstagramLink(username) {
  const user = sanitizeInstagram(username);

  if (!user) {
    return "#";
  }

  return `https://instagram.com/${user}`;
}
