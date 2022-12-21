import { getAncestries, getAncestryById } from "lib/ancestry/ancestry.service";
import { ancestry } from "lib/prisma";

jest.mock("lib/prisma", () => ({
  ancestry: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
  },
}));

describe("Ancestry Service", () => {
  describe("getAncestries(filter)", () => {
    test.each([
      [[]],
      [
        [
          { id: "0", size: "Small" },
          { id: "1", size: "Medium" },
          { id: "2", size: "Medium" },
        ],
      ],
    ])("Returns all Ancestries that exist in %p", async (expected) => {
      ancestry.findMany.mockImplementation(async () => expected);
      const found = await getAncestries({});
      expect(found).toEqual(expected);
    });

    it("Returns filtered Ancestries from %p when a filter is given", async () => {
      const filter = "Medium";
      const all = [
        { id: "0", size: "Small" },
        { id: "1", size: "Medium" },
        { id: "2", size: "Medium" },
      ];
      const some = (s) => all.filter(({ size }) => size === s);
      ancestry.findMany.mockImplementation(async ({ size }) => some(size));
      const found = await getAncestries({ size: filter });
      expect(found).toEqual(some({ size: filter }));
    });
  });

  describe("getAncestryById(id)", () => {
    test.each([[{ id: "0", size: "Medium" }], [null]])(
      "Returns the Ancestry %p",
      async (expected) => {
        const id = "0";
        ancestry.findUnique.mockImplementation(
          async ({ where: { id } }) => expected
        );
        const found = await getAncestryById(id);
        expect(found).toEqual(expected);
      }
    );
  });
});
