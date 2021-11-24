import express from "express";
import config from "config";
import connect from "./utils/connect";
import routes from "./routes/routes";
const app = express();

const PORT = config.get<number>("port");

app.listen(PORT, async () => {
  console.log(`App is running on PORT ${PORT}`);
  await connect();
  routes(app);
});
