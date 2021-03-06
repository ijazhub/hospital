const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const profileRouter=require('./routes/profile.route');
const patientRouter=require('./routes/patient.route');
const rmRouter=require('./routes/rm.route');
const gdRouter=require('./routes/generaldoctor.route');
const nurseRouter=require('./routes/nurse.route');
const nutritionistRouter=require('./routes/pharmacist.route');
const pharmacistRouter=require('./routes/pharmacist.route');
const diagnosticRouter=require('./routes/diagnostic.route');
const adminRouter=require('./routes/admin.route');
const configuration = require('./util/makeConfig');
const cors = require('cors');
const db = require('./db/db');
app.use(cors());
app.use(bodyParser.json());
app.use("/profile",profileRouter);
app.use("/patient",patientRouter);
app.use("/rm",rmRouter);
app.use("/gd",gdRouter);
app.use("/nurse",nurseRouter);
app.use("/nutritionist",nutritionistRouter);
app.use("/pharmacist",pharmacistRouter);
app.use("/diagnostic",diagnosticRouter);
app.use("/admin",adminRouter)
app.listen(3001, () => {
	db();
	console.log('=================================================');
	console.log('HOSPITAL MANAGEMENT SYSTEM CREATED................');
	console.log('==================================================');
});
