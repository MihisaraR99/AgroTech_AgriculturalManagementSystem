const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const mongoose = require("mongoose");
const cors = require("cors");
const expressSession = require("express-session");

// Import routes to here
const userRoutes = require("./routes/userManageRoutes");
const storeRoutes = require("./routes/storeRoutes");
const labRoutes = require("./routes/labRoutes");
const wholesaleRoutes = require("./routes/wholesaleRoutes");
const CompanyRequest = require("./routes/Pr_companyRoutes");
const eventRoutes = require("./routes/eventRoutes");
const courseRoutes = require("./routes/courseRoutes");
const AdsRoutes = require("./routes/AdsRoutes");

const HealthCareAppointmentRoutes = require("./routes/HealthCareAppointmentRoutes");
const CandidateRoutes = require("./routes/CandidateRoutes");
const ApplyforVacancyRoutes = require("./routes/ApplyforVacancyRoutes");
const ApplyforGuidanceRoutes = require("./routes/ApplyforGuidanceRoutes");
const AddVacanciesRoutes = require("./routes/AddVacanciesRoutes");
const AddGuidanceProgramsRoutes = require("./routes/AddGuidanceProgramsRoutes");
const labRoutes = require("./routes/labRoutes.js");

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.set("trust proxy", 1);
const sessSettings = expressSession({
  path: "/",
  secret: "oursecret",
  resave: true,
  saveUninitialized: true,
  cookie: {
    sameSite: false,
    secure: false,
    maxAge: 360000,
  },
});

app.use(sessSettings);
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  logger.info(" Mongodb connected successfully");
});

app.get("/", (req, res) => {
  res.status(200).json({ messsage: "Server is running!" });
});

// Implement the routes from here
app.use("/api/users", userRoutes);
app.use("/api/store", storeRoutes);
app.use("/api/lab", labRoutes);
app.use("/api/wholesale", wholesaleRoutes);
app.use("/api/companyRequest", CompanyRequest);
app.use("/api/lab", labRoutes);
app.use("/api/app", HealthCareAppointmentRoutes);

// Health Care Appointments
app.use("/api/app", require("./routes/HealthCareAppointmentRoutes"));
app.use("/api/Addevent", require("./routes/eventRoutes"));
app.use("/api/course", require("./routes/courseRoutes"));
app.use("/api/Ads", require("./routes/AdsRoutes"));
app.use("/api/Applyvacancies", require("./routes/ApplyforVacancyRoutes"));
app.use("/api/Applyguidances", require("./routes/ApplyforGuidanceRoutes"));
app.use("/api/AddVacancies", require("./routes/AddVacanciesRoutes"));
app.use("/api/AddGuidances", require("./routes/AddGuidanceProgramsRoutes"));
app.use("/api/Candidate", require("./routes/CandidateRoutes"));

app.listen(PORT, () => {
  logger.info(`Server is running on PORT: ${PORT}`);
});