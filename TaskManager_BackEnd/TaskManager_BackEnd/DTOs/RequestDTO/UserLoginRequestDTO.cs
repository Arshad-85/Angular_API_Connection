using System.ComponentModel.DataAnnotations;

namespace TaskManager_BackEnd.DTOs.RequestDTO
{
    public class UserLoginRequestDTO
    {
        [Required]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty.ToString();
    }
}
