using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PLEApplication.Models
{
    public class CourseViewModel
    {
        public int CourseID { get; set; }
        public string CourseCode { get; set; }
        public string CourseName { get; set; }
        public string CourseDescription { get; set; }
        public bool NeedApproval { get; set; }
        public System.DateTime DateCreated { get; set; }
        public bool IsCurrentlyAvailable { get; set; }
        public int ParticipatorCount {
            get
            {
                PleDBEntities db = new PleDBEntities();
                return db.CourseParticipations.Where(cp => cp.CourseID == this.CourseID).Count();
            }
        }
    }
}