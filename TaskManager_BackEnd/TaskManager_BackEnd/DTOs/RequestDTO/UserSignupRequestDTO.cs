using TaskManager_BackEnd.Entity;

namespace TaskManager_BackEnd.DTOs.RequestDTO
{
    public class UserSignupRequestDTO
    {
        public string FullName { get; set; } = string.Empty;    
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public UserRole Role { get; set; }
    }
}
