using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace bloodDonation.ViewModel
{
    public class Donor
    {
        public string FullName { get; set; }
        public string BloodGrop { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }
        public DateTime? LastDateOfDonation { get; set; }
        public string PresentAddress { get; set; }
    }
}