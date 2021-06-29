const sector = require("../../util/sector");

describe("sector", () => {
  it("converts number octet to sector", () => {
    const result = sector.octet_to_sector(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string octet to sector", () => {
    const result = sector.octet_to_sector("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number octet to sector string", () => {
    const result = sector.octet_to_sector_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string octet to sector string", () => {
    const result = sector.octet_to_sector_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number sector to octet", () => {
    const result = sector.sector_to_octet(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string sector to octet", () => {
    const result = sector.sector_to_octet("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number octet to colouredcoin", () => {
    const result = sector.octet_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string octet to colouredcoin", () => {
    const result = sector.octet_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number octet to colouredcoin string", () => {
    const result = sector.octet_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string octet to colouredcoin string", () => {
    const result = sector.octet_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to octet", () => {
    const result = sector.colouredcoin_to_octet(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to octet", () => {
    const result = sector.colouredcoin_to_octet("1000");

    expect(result).toBe(1000000);
  });
});
