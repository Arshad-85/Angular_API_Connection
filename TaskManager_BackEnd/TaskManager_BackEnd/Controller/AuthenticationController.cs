using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager_BackEnd.Data;
using TaskManager_BackEnd.DTOs.RequestDTO;
using TaskManager_BackEnd.Entity;
using TaskManager_BackEnd.IService;

namespace TaskManager_BackEnd.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationService _AuthenticationService;

        public AuthenticationController(IAuthenticationService userService)
        {
            _AuthenticationService = userService;
        }

        [HttpPost("add-user")]

        public async Task<IActionResult> AddUser(UserSignupRequestDTO request)
        {
            try
            {
                var userData = await _AuthenticationService.AddUser(request);
                return Ok(userData);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("login")]

        public async Task<IActionResult> Login(UserLoginRequestDTO request)
        {
            try
            {
                var userDetails = await _AuthenticationService.Login(request);
                return Ok(userDetails);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

