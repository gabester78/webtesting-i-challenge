const enhancer = require("./enhancer.js");

const { repair, succeed, fail, get } = require("./enhancer.js");

let item = {
  name: "Gabe",
  durability: 78,
  enhancement: 17,
};

describe("enhancer", () => {
  describe("repair", () => {
    it("durability should = 100", () => {
      expect(repair(item).durability).toBe(100);
    });
  });
});

describe("enhancer", () => {
  describe("succeed", () => {
    it("enhancement +1 if < 20", () => {
      expect(succeed(item).enhancement).toBe(18);
    });
    it("if enhancement = 20, no change", () => {
      let item = {
        name: "Gabe",
        durability: 78,
        enhancement: 20,
      };
      expect(succeed(item).enhancement).toBe(20);
    });
  });
});

describe("enhancer", () => {
  describe("fail", () => {
    it("if enhancement < 15, durability - 5.", () => {
      let item = {
        name: "Gabe",
        durability: 78,
        enhancement: 14,
      };
      expect(fail(item).durability).toBe(73);
    });
    it("if enhancement = 15, durability - 10", () => {
      let item = {
        name: "Gabe",
        durability: 78,
        enhancement: 15,
      };
      expect(fail(item).durability).toBe(68);
    });
    it("if enhancement > 16, durability - 10, enhancement - 1", () => {
      expect(fail(item).durability).toBe(68);
      expect(fail(item).enhancement).toBe(16);
    });
  });
});

describe("enhancer", () => {
  describe("get", () => {
    it("if enhancement = zero, no change", () => {
      expect(get(item).name).toBe("Gabe");
    });
    it("if enhancement > zero, + enhancement to name", () => {
      let item = {
        name: "[+17]Gabe",
        durability: 78,
        enhancement: 17,
      };
      expect(get(item).name).toBe("[+17]Gabe");
    });
  });
});
