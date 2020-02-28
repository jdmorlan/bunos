const httpMocks = require("node-mocks-http");
const get = require("../src");

describe("Proxy Meta - Path", () => {
  test("gets application name", () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/eog/activities/1234",
      params: {
        id: 42
      }
    });

    const proxyMeta = get(request);

    expect(proxyMeta.application).toBe("eog");
    expect(proxyMeta.path).toBe("activities/1234");
  });
});
