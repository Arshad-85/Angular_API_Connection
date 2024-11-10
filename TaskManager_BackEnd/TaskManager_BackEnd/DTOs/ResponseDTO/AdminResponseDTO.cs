using Microsoft.AspNetCore.Identity;
using TaskManager_BackEnd.Entity;

namespace TaskManager_BackEnd.DTOs.ResponseDTO
{
    public class AdminResponseDTO
    {
        public Guid UserId { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public UserRole Role { get; set; }
    }
}
