import { Student, Class, AttendanceRecord } from "../model/model.js";

export async function markAttendance(req, res) {
  try {
    const { studentId, classId, date } = req.query;

    const [record, created] = await AttendanceRecord.findOrCreate({
      where: { studentId, classId, date },
      defaults: { present: true }
    });

    if (!created) record.present = true;

    await record.save();
    res.json({ message: 'Attendance marked', record });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getAttendanceByDate(req, res) {
  try {
    const { studentId, date } = req.query;

    const records = await AttendanceRecord.findAll({
      where: { studentId, date },
      include: [Class]
    });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function listClassAttendance(req, res) {
  try {
    const records = await AttendanceRecord.findAll({
      where: { classId: req.params.id },
      include: [Student]
    });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getStudentSummary(req, res) {
  try {
    const records = await AttendanceRecord.findAll({
      where: { studentId: req.params.id },
      include: [Class]
    });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
