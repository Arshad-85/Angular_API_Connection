using TaskManager_BackEnd.DTOs.RequestDTO;
using TaskManager_BackEnd.Entity;

namespace TaskManager_BackEnd.IRepository
{
    public interface IAuthenticationRepository
    {
        Task<Admin> AddUser(Admin user);
        Task<Admin> GetUserByEmail(string email);
        Task<Admin> Login(UserLoginRequestDTO request);
    }
}
