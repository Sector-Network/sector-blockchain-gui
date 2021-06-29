const units = require("../../util/units");

describe("units", () => {
  describe("#getUnit", () => {
    it("gets unit of sector", () => {
      const result = units.getUnit("sector");

      expect(result).toBe(1);
    });
    it("gets unit of octet", () => {
      const result = units.getUnit("octet");

      expect(result).toBe(1e-12);
    });
    it("gets unit of coloured coin", () => {
      const result = units.getUnit("colouredcoin");

      expect(result).toBe(1e-9);
    });
    it("supports uppercase characters", () => {
      const result = units.getUnit("SECTOR");

      expect(result).toBe(1);
    });
    it("gets unit of sector using alias", () => {
      const result = units.getUnit("se");

      expect(result).toBe(1);
    });
    it("gets unit of octet using alias", () => {
      const result = units.getUnit("oc");

      expect(result).toBe(1e-12);
    });
    it("gets unit of coloured coin using alias", () => {
      const result = units.getUnit("cc");

      expect(result).toBe(1e-9);
    });
    it("throws an error if unit is not supported", () => {
      try {
        units.getUnit("bitcoin");
      } catch (err) {
        expect(err).toEqual(new Error("Unit 'bitcoin' is not supported"));
      }
    });
  });
  describe("#getDisplay", () => {
    it("gets display of sector", () => {
      const result = units.getDisplay("sector");

      expect(result).toEqual({
        format: "{amount} SE",
        fractionDigits: 12
      });
    });
    it("gets display of octet", () => {
      const result = units.getDisplay("octet");

      expect(result).toEqual({
        format: "{amount} MJ",
        fractionDigits: 0
      });
    });
    it("gets display of coloured coin", () => {
      const result = units.getDisplay("colouredcoin");

      expect(result).toEqual({
        format: "{amount} CC",
        fractionDigits: 3
      });
    });
    it("throws an error if unit is not supported", () => {
      try {
        units.getDisplay("bitcoin");
      } catch (err) {
        expect(err).toEqual(new Error("Unit 'bitcoin' is not supported"));
      }
    });
  });
  describe("#setUnit", () => {
    it("adds a new unit", () => {
      units.setUnit("bitcoin", 1);

      const result = units.getUnit("bitcoin");

      expect(result).toEqual(1);
    });
    it("modifies an existing unit", () => {
      units.setUnit("sector", 9);

      const result = units.getUnit("sector");

      expect(result).toEqual(9);

      units.setUnit("sector", 1);
    });
  });
  describe("#setDisplay", () => {
    it("sets a new display", () => {
      units.setDisplay("bitcoin", {
        format: "{amount} BTC",
        fractionDigits: 0
      });

      const result = units.getDisplay("bitcoin");

      expect(result).toEqual({
        format: "{amount} BTC",
        fractionDigits: 0
      });
    });
    it("updates an existing display", () => {
      units.setDisplay("sector", {
        format: "{amount} TXSC",
        fractionDigits: 0
      });

      const result = units.getDisplay("sector");

      expect(result).toEqual({
        format: "{amount} TXSC",
        fractionDigits: 0
      });
    });
  });
});
