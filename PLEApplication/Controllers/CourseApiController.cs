using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PLEApplication.Models;

namespace PLEApplication.Controllers
{
    public class CourseApiController : ApiController
    {
        [System.Web.Http.Route("api/Grades/{CourseID}")]
        public List<GradeViewModel> GetCourseGrades(int CourseID)
        {

            PleDBEntities db = new PleDBEntities();

            var Grades = from grade in db.Grades
                         where grade.Assignment.CourseID == CourseID
                         orderby grade.AssignmentID
                         select new GradeViewModel
                         {
                             AssignmentID = grade.AssignmentID,
                             GradeID = grade.GradeID,
                             Points = grade.Points,
                             UserID = grade.UserID
                         };

            return Grades.ToList();
        }

        [System.Web.Http.Route("api/Users/{CourseID}")]
        public List<UserViewModel> GetUsers(int CourseID)
        {
            PleDBEntities db = new PleDBEntities();
            var Users = db.CourseParticipations.Where(cp => cp.CourseID == CourseID).Select(cp => new UserViewModel
            {
                UserID = cp.User.UserID,
                FullName = cp.User.FullName,
                Email = cp.User.Email
            }).ToList();
            return Users;
        }

        [System.Web.Http.Route("api/Courses/{UserID}")]
        public List<CourseViewModel> GetCourses(string UserID)
        {
            PleDBEntities db = new PleDBEntities();
            var Courses = from cp in db.CourseParticipations
                          join course in db.Courses on cp.CourseID equals course.CourseID
                          where cp.UserID == UserID
                          select new CourseViewModel
                          {
                              CourseID = course.CourseID,
                              CourseCode = course.CourseCode,
                              CourseDescription = course.CourseDescription,
                              CourseName = course.CourseName,
                              DateCreated = course.DateCreated,
                              IsCurrentlyAvailable = course.IsCurrentlyAvailable,
                              NeedApproval = course.NeedApproval
                          };
            return Courses.ToList();
        }

        [System.Web.Http.Route("api/Assignments/{CourseID}")]
        public List<AssignmentViewModel> GetAssignments(int CourseID)
        {
            PleDBEntities db = new PleDBEntities();
            var Assignments = db.Assignments.Where(assignment => assignment.CourseID == CourseID).Select(assignment => new AssignmentViewModel
            {
                AssignmentID = assignment.AssignmentID,
                CourseID = assignment.CourseID,
                CreatedDate = assignment.CreatedDate,
                MustDeliveryDate = assignment.MustDeliveryDate,
                Description = assignment.Description,
                Title = assignment.Title
            }).ToList();

            return Assignments;
        }

        [System.Web.Http.Route("api/CourseDetail/{CourseID}")]
        public CourseViewModel GetCurrentCourse(int CourseID)
        {
            PleDBEntities db = new PleDBEntities();
            var CurrentCourse = db.Courses.Where(course => course.CourseID == CourseID).Select(course => new CourseViewModel
            {
                CourseID = course.CourseID,
                CourseCode = course.CourseCode,
                CourseDescription = course.CourseDescription,
                CourseName = course.CourseName,
                DateCreated = course.DateCreated,
                IsCurrentlyAvailable = course.IsCurrentlyAvailable,
                NeedApproval = course.NeedApproval
            }).SingleOrDefault();
            return CurrentCourse;
        }
    }
}
