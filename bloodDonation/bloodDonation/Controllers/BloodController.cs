using bloodDonation.DAL;
using bloodDonation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace bloodDonation.Controllers
{
    public class BloodController : Controller
    {
        private DonatorDb db = new DonatorDb();
        // GET: Blood
        public ActionResult Index()
        {
            return View();
        }

        // GET: Blood/Details/
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Blood/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Blood/Create
        [HttpPost]
        public void Create(BloodDonor bloodDonor)
        {
            db.BloodDonors.Add(bloodDonor);
            db.SaveChanges();
        }

        // GET: Blood/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Blood/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Blood/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Blood/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
