import connectExpress from "./connectExpress";
import connectMongoose from "./connectMongoose";

connectExpress()
connectMongoose(`mongodb://localhost/test`)