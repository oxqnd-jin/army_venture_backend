const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { loginRequired } = require('../utils/auth');

router.get('/all', loginRequired, courseController.getAllCourses);
router.get('/:courseId', loginRequired, courseController.getCourseDetails);
// router.post('/:courseId/likes', loginRequired, courseController.addCourseLike);
router.post('/', loginRequired, courseController.createCourse);
router.post('/:courseId/place', loginRequired, courseController.addPlaceInCourse);
router.patch('/:courseId', loginRequired, courseController.updateCourseDetail);
router.delete('/:courseId', loginRequired, courseController.deleteCourse);
// router.delete('/:courseId/place/:placeId', loginRequired, courseController.deletePlaceInCourse);

module.exports = { router };