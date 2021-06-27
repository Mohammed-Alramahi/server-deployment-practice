("use strict");
const supertest = require("supertest");
const server = require("../server");
const request = supertest(server.app);

describe("API working?", () => {
  it("handle bad requests", async () => {
    const response = await request.get("/anything");
    expect(response.status).toEqual(404);
  });
  it("handle internal server Errors", async () => {
    const response = await request.get("/old");
    expect(response.status).toEqual(500);
  });
  it("handles correct routes", async () => {
    const response = await request.get("/");
    expect(response.status).toEqual(200);
  });
});
