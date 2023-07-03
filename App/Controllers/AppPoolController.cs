using System.Diagnostics;
using DevUtility.Domain.Interfaces;
using DevUtility.Domain.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace DevUtility.Controllers
{
    public class AppPoolController : Controller
    {
        private readonly ILogger<AppPoolController> _logger;
        private readonly IAppPoolService _appPoolService;

        public AppPoolController(ILogger<AppPoolController> logger,
            IAppPoolService appPoolService)
        {
            _logger = logger;
            _appPoolService = appPoolService;
        }

        public IActionResult Index()
        {
            var viewModel = _appPoolService.GetViewModel();
            return View(viewModel);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}