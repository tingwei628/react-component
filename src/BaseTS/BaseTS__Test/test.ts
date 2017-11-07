import { Base_TS } from "../src/index";
it("test string equal KOKO", () => {
  let ts = new Base_TS.S("KOKO");
  expect(ts.print()).toBe("KOKO");
});