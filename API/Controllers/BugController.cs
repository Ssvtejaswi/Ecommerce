using System;
using API.DTOs;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BugController : BaseApiController
{
    [HttpGet("Unauthorized")]
    public IActionResult GetUnauthorized()
    {
        return Unauthorized();
    }
    [HttpGet("BadRequest")]
    public IActionResult GetBadRequest()
    {
        return BadRequest("Bad Request");
    }
    [HttpGet("NotFound")]
    public IActionResult GetNotFound()
    {
        return NotFound();
    }
    [HttpGet("internalError")]
    public IActionResult GetInternalError()
    {
        throw new Exception("Test error");
    }
    [HttpPost("validationError")]
    public IActionResult GetValidationError(CreateProductDto product)
    {
        return Ok(); 
    }
}
