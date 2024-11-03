using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager_BackEnd.Data;
using TaskManager_BackEnd.DTOs;
using TaskManager_BackEnd.Entity;

namespace TaskManager_BackEnd.Controller
{
    public class UserLoginController : ControllerBase
    {
        private readonly TaskContext _taskContext;

         public UserLoginController(TaskContext context)
         {
            _taskContext = context;
         }

        [HttpPost("Register")]
        public async Task<IActionResult> UserSignUp(UserSignupRequest userSignupRequest)
        {
            var userSignUp = new UserLogin();
            userSignUp.Password = BCrypt.Net.BCrypt.HashPassword(userSignupRequest.Password);
            userSignUp.FullName = userSignupRequest.FullName;
            userSignUp.Email = userSignupRequest.Email;
            userSignUp.Role = userSignupRequest.Role;

            var data = await _taskContext.UsersLogin.AddAsync(userSignUp);
            await _taskContext.SaveChangesAsync();
            return Ok(data.Entity);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> UserLogin(UserLoginRequest userLoginRequest)
        {
            var user = await _taskContext.UsersLogin.SingleOrDefaultAsync(u => u.Email == userLoginRequest.Email);
            if (user == null)
            {
                throw new Exception("User Not Found");
            }
            var IsLogin = BCrypt.Net.BCrypt.Verify(userLoginRequest.Password, user.Password);
            if (IsLogin)
            {
                return Ok(user);
            }
            else
            {
                throw new Exception("Password Invalid");
            }
        }
    }
}
