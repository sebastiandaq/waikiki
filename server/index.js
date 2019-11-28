import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router';
import db_connection from './controllers/dbConnection';
const userRouter = require('./routers/Users');

const db = db_connection();
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({ type: '*/*' }));
app.use(userRouter);

router(app);

app.set("port", process.env.PORT || 4001);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
