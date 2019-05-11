using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PLEApplication.Models;

namespace PLEApplication.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            if(Session["CurrentUser"] == null)
                return RedirectToAction("Login", "Account");
            else
            {
                UserViewModel current = (UserViewModel)Session["CurrentUser"];
                return View(current);
            }
        }
    }
}