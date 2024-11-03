namespace TaskManager_BackEnd.Entity
{
    public class UserLogin
    {
        public Guid UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; }
    }
    public enum Role{
        Admin,
        Editor,
        Viewer
    }
}
