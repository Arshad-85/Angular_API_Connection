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

        public DbSet<UserLogin> UsersLogin { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(u => u.Address)
                .WithOne(a => a.User)
                .HasForeignKey<Address>(a => a.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<TaskItem>()
                .HasOne(t => t.Assignee)
                .WithMany(u => u.Tasks)
                .HasForeignKey(u => u.AssigneeId);

            base.OnModelCreating(modelBuilder);


        }
    }
}
