using System;
using API.DTOs;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BugController : BaseApiController
{
    [HttpGet("unauthorized")]
    public IActionResult GetUnauthorized()
    {
        return Unauthorized();
    }
    [HttpGet("badrequest")]
    public IActionResult GetBadRequest()
    {
        return BadRequest("Bad Request");
    }
    [HttpGet("notfound")]
    public IActionResult GetNotFound()
    {
        return NotFound();
    }
    [HttpGet("internalerror")]
    public IActionResult GetInternalError()
    {
        throw new Exception("Test error");
    }
    [HttpPost("validationerror")]
    public IActionResult GetValidationError(CreateProductDto product)
    {
        return Ok(); 
    }
}
