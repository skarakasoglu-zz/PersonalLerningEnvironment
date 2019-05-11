using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PLEApplication.Models
{
    public class AssignmentViewModel
    {

        public int AssignmentID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public System.DateTime MustDeliveryDate { get; set; }
        public int CourseID { get; set; }

    }
}