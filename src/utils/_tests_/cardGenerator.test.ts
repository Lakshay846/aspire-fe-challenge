import {
    generateCardNumber,
    generateExpiry,
    generateCVV,
  } from "../cardGenerator";
  
  describe("cardGenerator utils", () => {
    test("generateCardNumber returns 4 groups of 4 digits", () => {
      const number = generateCardNumber();
  
      expect(number).toHaveLength(4);
      number.forEach(group => {
        expect(group).toMatch(/^\d{4}$/);
      });
    });
  
    test("generateExpiry returns MM/YY format", () => {
      const expiry = generateExpiry();
      expect(expiry).toMatch(/^\d{2}\/\d{2}$/);
    });
  
    test("generateCVV returns 3 digits", () => {
      const cvv = generateCVV();
      expect(cvv).toMatch(/^\d{3}$/);
    });
  });
  