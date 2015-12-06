using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace bloodDonation.Models
{
    public class BloodDonor
    {
        public int DonatorId { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Name can't be long more than 50 characters ")]
        [Display(Name = "Full Name : ")]
        public string FullName { get; set; }

        [Required]
        [Display(Name = "Blood Group : ")]
        public string BloodGrop { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Date of Birth : ")]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber)]
        public int PhoneNumber { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email{ get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "Last Donation Date : ")]
        public DateTime? LastDateOfDonation { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "Address can't be long more than 100 characters ")]
        [DataType(DataType.MultilineText)]
        public string PresentAddress { get; set; }
        
    }
}