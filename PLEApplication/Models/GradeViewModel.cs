using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PLEApplication.Models
{
    public class GradeViewModel
    {
        public int GradeID { get; set; }
        public Nullable<int> AssignmentID { get; set; }
        public string UserID { get; set; }
        public Nullable<byte> Points { get; set; }
    }
}