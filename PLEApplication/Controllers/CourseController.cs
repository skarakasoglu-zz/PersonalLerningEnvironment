using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PLEApplication.Models;

namespace PLEApplication.Controllers
{
    public class CourseController : Controller
    {
        // GET: Course
        public ActionResult Index()
        {
            if (Session["CurrentUser"] != null)
            {
                UserViewModel Current = (UserViewModel)Session["CurrentUser"];
                PleDBEntities db = new PleDBEntities();
                var CourseList = db.Courses.Select(course => new CourseViewModel
                {
                    CourseID = course.CourseID,
                    CourseCode = course.CourseCode,
                    CourseDescription = course.CourseDescription,
                    CourseName = course.CourseName,
                    DateCreated = course.DateCreated,
                    IsCurrentlyAvailable = course.IsCurrentlyAvailable,
                    NeedApproval = course.NeedApproval,
                }).ToList();

                ViewBag.Courses = CourseList;
                return View(Current);
            }
            else
                return RedirectToAction("Login", "Account");
        }

        [Route("Course/Detail/{CourseID}")]
        public ActionResult Detail(int CourseID)
        {
            return CourseDetail(CourseID);
        }

        [Route("Course/Detail/{CourseID}/{RouteLink}")]
        public ActionResult Grades(int CourseID, string RouteLink)
        {
            ViewBag.RouteLink = RouteLink;
            return CourseDetail(CourseID);
        }

        private ActionResult CourseDetail(int CourseID)
        {
            if (Session["CurrentUser"] != null)
            {
                UserViewModel Current = (UserViewModel)Session["CurrentUser"];
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
                ViewBag.CurrentCourse = CurrentCourse;
                return View("Detail", Current);
            }
            else
                return RedirectToAction("Login", "Account");
        }
    }
}