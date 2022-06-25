"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// @ts-ignore
const json_graphql_server_1 = __importDefault(require("json-graphql-server"));
const cors_1 = __importDefault(require("cors"));
const data = require("./mocks/userData");
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use('/user', (0, json_graphql_server_1.default)(data));
app.listen(port);
