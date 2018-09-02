using Microsoft.AspNetCore.Mvc;

namespace ProjectA.Controllers
{
    [Route("api/[controller]")]
    public class ImagesController : Controller
    {
        [HttpGet("[action]")]
        public string GetImages()
        {
            return System.IO.File.ReadAllText("wwwroot/imagesdata.json");
        }
    }
}
