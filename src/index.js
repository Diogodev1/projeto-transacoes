import connectExpress from "./connectExpress.js";
import connectMongoose from "./connectMongoose.js";

connectExpress()
connectMongoose(`mongodb://localhost/test`)