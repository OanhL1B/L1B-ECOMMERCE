const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const port = 5000;
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const categoryRouter = require("./routes/productcategoryRoute");
const brandRouter = require("./routes/brandRoute");
const colorRouter = require("./routes/colorRoute");
const enqRouter = require("./routes/enqRoute");
const couponRouter = require("./routes/couponRoute");
const uploadRouter = require("./routes/uploadRoute");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
// const morgan = require("morgan");
var cors = require("cors");
dbConnect();

// const corsOptions = {
//   origin: "http://localhost:3000",
//   // origin: "*",

//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
//   credentials: true,
//   maxAge: 86400,
//   optionsSuccessStatus: 200,
// };

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.use("/api/user", authRouter);

app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/color", colorRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// const bodyParser = require("body-parser");
// const express = require("express");
// const dbConnect = require("./config/dbConnect");
// const port = 5000;
// const dotenv = require("dotenv");
// dotenv.config();
// const app = express();
// const authRouter = require("./routes/authRoute");
// const productRouter = require("./routes/productRoute");
// const categoryRouter = require("./routes/productcategoryRoute");
// const brandRouter = require("./routes/brandRoute");
// const colorRouter = require("./routes/colorRoute");
// const enqRouter = require("./routes/enqRoute");
// const couponRouter = require("./routes/couponRoute");
// const uploadRouter = require("./routes/uploadRoute");
// const cookieParser = require("cookie-parser");
// const { notFound, errorHandler } = require("./middlewares/errorHandler");
// var cors = require("cors");
// dbConnect();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.json());

// app.use("/api/user", authRouter);

// app.use("/api/product", productRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/brand", brandRouter);
// app.use("/api/color", colorRouter);
// app.use("/api/coupon", couponRouter);
// app.use("/api/enquiry", enqRouter);
// app.use("/api/upload", uploadRouter);

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
