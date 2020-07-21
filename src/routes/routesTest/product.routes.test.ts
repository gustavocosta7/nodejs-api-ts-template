import app from "../../app";
import request from "supertest";

describe("/products/", () => {
    it("GET / ", async () => {
        const result = await request(app).get("/products/");
        expect(result.status).toEqual(200);

    });
});