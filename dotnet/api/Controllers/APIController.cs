using System.Diagnostics.CodeAnalysis;
using System.Reflection.Metadata.Ecma335;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace api.Controllers;

[ApiController]
[Route("/")]
public class APIController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<APIController> _logger;

    public APIController(ILogger<APIController> logger)
    {
        _logger = logger;
    }

    // a POST method to receive a chat message and return a response on the route /chat
    [HttpPost("chat")]
    public dynamic Chat()
    {
        var body = new StreamReader(Request.Body).ReadToEndAsync().Result;
        var content = JsonConvert.DeserializeObject<dynamic>(body);

        if (content == null) 
            return new { message = "Invalid request" };

        ////////////////////////////
        /// Add OpenAI code here ///
        ////////////////////////////

        return new { message = "Your message: " + content.message };
        
    }

    [HttpPost("generateImage")]
    public dynamic GenerateImage()
    {
        var body = new StreamReader(Request.Body).ReadToEndAsync().Result;
        var content = JsonConvert.DeserializeObject<dynamic>(body);

        if (content == null) 
            return new { message = "Invalid request" };

        ////////////////////////////
        /// Add OpenAI code here ///
        ////////////////////////////
        
        return new { url = "https://via.placeholder.com/100" };
        
    }
    
}
