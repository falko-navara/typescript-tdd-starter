import { Add } from "./calculator";

describe("String calculator", () => {
  it("Should return 0 with empty input string", () => {


    expect(Add("")).toEqual(0);
  })


});
