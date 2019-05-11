using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PLEApplication.Models
{
    public class UserViewModel
    {
        [Required(ErrorMessage = "Username is required.")]
        public string UserID { get; set; }
        [Required(ErrorMessage = "Password is required.")]
        public string UserPassword { get; set; }
        [Required(ErrorMessage = "Name is required.")]
        public string FullName { get; set; }
        [Required(ErrorMessage = "Email is required.")]
        public string Email { get; set; }
        public Nullable<int> UserTypeID { get; set; }
        public List<CourseViewModel> ParticipatedCourses { get; set; }
    }
}