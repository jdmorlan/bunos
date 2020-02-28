const httpMocks = require("node-mocks-http");
const modifier = require("../src");

describe("Proxy Meta - Branch", () => {
  test("gets branch", () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/eog/activities/1234?branch=test",
      params: {
        id: 42
      }
    });

    const modification = modifier(request);

    expect(modification.branch).toBe("TEST");
  });

  test("returns null branch, if not provided", () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/eog/activities/1234",
      params: { id: 42 }
    });

    const modification = modifier(request);

    expect(modification.branch).toBe(null);
  });

  test("get branch from referer", () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/eog/activities/1234",
      headers: {
        referer: "http://localhost:4000/eog/activities?branch=test"
      }
    });

    const modification = modifier(request);

    expect(modification.branch).toBe("TEST");
  });
});
