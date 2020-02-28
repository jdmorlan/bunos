const httpMocks = require("node-mocks-http");
const { Modifier } = require("../src");

const delay = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

describe("Modifier", () => {
  test("can build meta", async () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/ihaul/42",
      params: {
        id: 42
      }
    });

    const modifier = new Modifier();

    modifier.use(request => ({ name: "jay" }));
    modifier.use(request => ({ street: "first" }));
    modifier.use(async () => {
      await delay(1500);
      return { job: "dev" };
    });

    const result = await modifier.run(request);

    expect(result.name).toBe("jay");
    expect(result.street).toBe("first");
  });
});
