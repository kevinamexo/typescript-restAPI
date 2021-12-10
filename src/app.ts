import express from "express";
import config from "config";
import connect from "./utils/connect";
import routes from "./routes/routes";
const app = express();

const PORT = config.get<number>("port");

app.listen(PORT, async () => {
  await connect();
  console.log(`App is running on PORT ${PORT}`);
  routes(app); /// ADD ROUTES FOR THE APP INSTANCE
});
