using System.Diagnostics;
using DevUtility.Domain.Interfaces;
using DevUtility.Domain.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace DevUtility.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IAppPoolService _appPoolService;

        public HomeController(ILogger<HomeController> logger,
            IAppPoolService appPoolService)
        {
            _logger = logger;
            _appPoolService = appPoolService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}