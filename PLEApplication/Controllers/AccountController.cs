using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PLEApplication.Models;

namespace PLEApplication.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Login()
        {
            if (Session["CurrentUser"] == null)
                return View();
            else
                return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public ActionResult Login(UserViewModel Current)
        {
            PleDBEntities db = new PleDBEntities();

            User user = db.Users.SingleOrDefault(x => x.UserID == Current.UserID && x.UserPassword == Current.UserPassword);

            if (user != null)
            {
                Current.UserID = user.UserID;
                Current.FullName = user.FullName;
                Current.UserTypeID = user.UserTypeID;
                Current.ParticipatedCourses = (from cp in db.CourseParticipations
                                               join course in db.Courses on cp.CourseID equals course.CourseID                                               
                                               where cp.UserID == Current.UserID
                                               select new CourseViewModel
                                               {
                                                   CourseID = course.CourseID,
                                                   CourseCode = course.CourseCode,
                                                   CourseDescription = course.CourseDescription,
                                                   CourseName = course.CourseName,
                                                   DateCreated = course.DateCreated,
                                                   IsCurrentlyAvailable = course.IsCurrentlyAvailable,
                                                   NeedApproval = course.NeedApproval
                                               }).ToList();

                Current.ParticipatedCourses.AddRange((from course in db.Courses
                                                      where course.OwnerID == Current.UserID
                                                      select new CourseViewModel
                                                      {
                                                          CourseID = course.CourseID,
                                                          CourseCode = course.CourseCode,
                                                          CourseDescription = course.CourseDescription,
                                                          CourseName = course.CourseName,
                                                          DateCreated = course.DateCreated,
                                                          IsCurrentlyAvailable = course.IsCurrentlyAvailable,
                                                          NeedApproval = course.NeedApproval
                                                      }));
                Session["CurrentUser"] = Current;
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ViewBag.Message = "Failed to login.";
                return View();
            }
        }

        public ActionResult SignUp(UserViewModel signupUser)
        {
            if (ModelState.IsValid)
            {
                PleDBEntities db = new PleDBEntities();
                User signupUserDb = new User();
                signupUserDb.UserID = signupUser.UserID;
                signupUserDb.UserPassword = signupUser.UserPassword;
                signupUserDb.FullName = signupUser.FullName;
                signupUserDb.Email = signupUser.Email;
                signupUserDb.UserTypeID = 3;
                db.Users.Add(signupUserDb);
                db.SaveChanges();
            }
            return RedirectToAction("Login");
        }

        public ActionResult Logout()
        {
            Session["CurrentUser"] = null;
            return RedirectToAction("Login");
        }
    }
}