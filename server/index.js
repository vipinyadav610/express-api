import http from "http";
import app from "./server";
const port = 3000;
const server = http.createServer(app);
let currentApp = app;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
if (module.hot) {
  module.hot.accept("./server", () => {
    server.removeListener("request", currentApp);
    server.on("request", app);
    currentApp = app;
  });
}
