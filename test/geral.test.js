const app = require("../src/app");
const supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 3131", async () => {
    const res = await request.get("/");
    expect(res.statusCode).toEqual(200);
});

test("Deve retornar verde como cor favorita do Matheus", async () => {
    const res = await request.get("/cor/matheus");
    expect(res.statusCode).toEqual(200);
    expect(res.body.cor).toEqual("verde");
    expect(res.body.color).toEqual("green");
});