using bloodDonation.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace bloodDonation.DAL
{
    public class DonatorDb : DbContext
    {
       public DbSet<BloodDonor> BloodDonors { get; set; }
    }
}