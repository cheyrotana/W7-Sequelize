import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Student = sequelize.define("Student", {
  name: DataTypes.STRING
});

const Class = sequelize.define("Class", {
  name: DataTypes.STRING
});

const AttendanceRecord = sequelize.define("AttendanceRecord", {
    date: DataTypes.DATEONLY,
    present: DataTypes.BOOLEAN
});


Class.hasMany(Student);
Student.belongsTo(Class);

Student.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Student);

Class.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Class);

export { Student, Class, AttendanceRecord };