using System.ComponentModel.DataAnnotations;

namespace TaskManager_BackEnd.Entity
{
    public class TaskItem
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime DueDate { get; set; }
        [Required]
        public string Priority { get; set; } = string.Empty;
        public User? Assignee { get; set; }
        public int? AssigneeId { get; set; }

    }
}
