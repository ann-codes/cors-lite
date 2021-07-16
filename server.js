const corsProxy = require("cors-anywhere");

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

corsProxy
  .createServer({
    originWhitelist: [
      "http://localhost:3000",
      "https://ann-codes.github.io",
    ],
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, () => {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
