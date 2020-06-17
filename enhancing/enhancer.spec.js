const enhancer = require("./enhancer.js");

const { repair } = require("./enhancer.js");
const { succeed } = require("./enhancer.js");
const { fail } = require("./enhancer.js");
const { get } = require("./enhancer.js");

let item = {
  name: "Gabe",
  durability: 78,
  enhancement: 20,
};

describe("enhancer", () => {
  describe("repair", () => {
    it("durability should be 100", () => {
      expect(repair(item).durability).toBe(100);
    });
  });
});

describe("enhancer", () => {
  describe("succeed", () => {
    it("enhancement +1 if > 20", () => {
      expect(succeed(item).enhancement).toBe(17);
    });
    it("if enhancement 20 no change", () => {
      expect(succeed(item).enhancement).toBe(20);
    });
  });
});
