using Microsoft.AspNetCore.Mvc;

namespace asp_netHomePagesep02.Areas.Demo.Views.ViewModels
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            
            return View();
        }
    }
}
