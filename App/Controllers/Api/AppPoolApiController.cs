using DevUtility.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DevUtility.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppPoolApiController : ControllerBase
    {
        private readonly IAppPoolService _appPoolService;
        // GET: api/<AppPoolApiController>
        public AppPoolApiController(IAppPoolService appPoolService)
        {
            _appPoolService = appPoolService;
        }

        // POST api/<AppPoolApiController>
        [HttpPost("start")]
        public IActionResult Start([FromBody] string name)
        {
            var result = _appPoolService.StartAppPoolByName(name);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        // POST api/<AppPoolApiController>
        [HttpPost("stop")]
        public IActionResult Stop([FromBody] string name)
        {
            var result = _appPoolService.StopAppPoolByName(name);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        // POST api/<AppPoolApiController>
        [HttpPost("recycle")]
        public IActionResult Recycle([FromBody] string name)
        {
            var result = _appPoolService.RecycleAppPoolByName(name);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

    }
}
