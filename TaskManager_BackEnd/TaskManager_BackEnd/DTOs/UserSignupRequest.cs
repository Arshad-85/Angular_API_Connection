using TaskManager_BackEnd.Entity;

namespace TaskManager_BackEnd.DTOs
{
    public class UserSignupRequest
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; }
    }
}
