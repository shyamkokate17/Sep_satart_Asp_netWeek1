using Microsoft.AspNetCore.Mvc;
using Task3.Areas.Employee.ViewModels;

namespace Task3.Areas.Employee.Contollers
{
    public class HomeController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}
        public IActionResult Index()
        {
            return Ok("Hello world");               // HTTP Response 200 "Ok"
        }



        // HTTP GET https://localhost:xxxx/Demo/Home/Index2
        public IActionResult Index2()
        {
            return View();
        }




        // HTTP GET
        public IActionResult DisplayEmp()
        {
            EmpViewModel emp = new EmpViewModel()
            {
                EmpID = 155000,
                JoiningDate = System.DateTime.Now
            };
            return View(emp);
        }



        // To address over-posting ensure that the [Bind] attribute lists all the needed properties.
        // NOTE: the names of the properties is CASE-SENSITIVE.
        // HTTP POST
        [HttpPost]
        [ValidateAntiForgeryToken]                      // to address JavaScript Injection Attacks
        public IActionResult DisplayEmp(
            [Bind("EmpID,EmpName,Post,Salary")] EmpViewModel emp)
        {
            return View(emp);
        }
    }
}