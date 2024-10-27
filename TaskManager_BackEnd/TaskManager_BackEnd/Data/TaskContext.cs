using Microsoft.EntityFrameworkCore;
using TaskManager_BackEnd.Entity;

namespace TaskManager_BackEnd.Data
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<TaskItem> TaskItem { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
