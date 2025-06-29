import express from 'express';
import { markAttendance, getAttendanceByDate, listClassAttendance, getStudentSummary } from '../controller/controller.js';

const router = express.Router();

router.post('/attendance', markAttendance);
router.get('/attendance', getAttendanceByDate);
router.get('/classes/:id/attendance', listClassAttendance);
router.get('/students/:id/attendance', getStudentSummary);

export default router;