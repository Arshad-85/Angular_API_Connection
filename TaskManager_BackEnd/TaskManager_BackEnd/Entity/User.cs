using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace TaskManager_BackEnd.Entity
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? PhoneNumber { get; set; }
        public ICollection<TaskItem> Tasks { get; set; } = new List<TaskItem>();
        public Address Address { get; set; }
    }
}
