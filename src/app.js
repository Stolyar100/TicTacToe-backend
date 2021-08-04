const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const AuthRouter = require('./routers/auth-router');
const UserRouter = require('./routers/user-router');
const GameRouter = require('./routers/game-router');
const errorMiddleware = require('./middlewares/error-middleware');

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/users', UserRouter);
app.use('/game', GameRouter);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log('Server started on PORT =', PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
