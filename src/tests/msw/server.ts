import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  http.get("/api/user", async () => {
    await delay(150);
    return HttpResponse.json("John Smith");
  }),
];

const server = setupServer(...handlers);
export default server;
