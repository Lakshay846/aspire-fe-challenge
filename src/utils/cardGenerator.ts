export const generateCardNumber = (): [string, string, string, string] => {
  const digits = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");

  return digits.match(/.{1,4}/g) as [string, string, string, string];
};

export const generateExpiry = (): string => {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");

  const year = String(
    (new Date().getFullYear() % 100) + Math.floor(Math.random() * 5) + 1
  );

  return `${month}/${year}`;
};

export const generateCVV = (): string =>
  String(Math.floor(100 + Math.random() * 900));
