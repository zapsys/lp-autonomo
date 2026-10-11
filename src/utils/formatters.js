export function maskPhone(value) {
  let phone = value.replace(/\D/g, "");

  phone = phone.slice(0, 11);

  if (phone.length <= 2) {
    return phone;
  }
  // Telefone fixo (10 dígitos)
  if (phone.length <= 10) {
    return phone.replace(
      /^(\d{2})(\d{4})(\d{0,4})$/,
      (_, ddd, first, second) =>
        second ? `(${ddd}) ${first}-${second}` : `(${ddd}) ${first}`,
    );
  }
  // Celular (11 dígitos)
  return phone.replace(/^(\d{2})(\d{5})(\d{0,4})$/, (_, ddd, first, second) =>
    second ? `(${ddd}) ${first}-${second}` : `(${ddd}) ${first}`,
  );
}

export function digitsOnly(value) {
  return value.replace(/\D/g, "");
}

export function sanitizeInstagram(username) {
  return username.replace("@", "").trim();
}

export function formatCurrency(value) {
  const number = Number(String(value).replace(/\./g, "").replace(",", "."));

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number || 0);
}

export function maskCurrency(value) {
  let digits = value.replace(/\D/g, "");

  digits = Number(digits) / 100;

  return digits.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
