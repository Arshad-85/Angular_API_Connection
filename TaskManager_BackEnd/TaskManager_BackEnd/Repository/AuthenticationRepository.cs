using Microsoft.EntityFrameworkCore;
using TaskManager_BackEnd.Data;
using TaskManager_BackEnd.DTOs.RequestDTO;
using TaskManager_BackEnd.Entity;
using TaskManager_BackEnd.IRepository;

namespace TaskManager_BackEnd.Repository
{
    public class AuthenticationRepository: IAuthenticationRepository
    {
        private readonly TaskContext _dBContext;

        public AuthenticationRepository(TaskContext dBContext)
        {
            _dBContext = dBContext;
        }

        public async Task<Admin> AddUser(Admin user)
        {
            var userDetails = await _dBContext.AddAsync(user);
            await _dBContext.SaveChangesAsync();
            return userDetails.Entity;
        }

        public async Task<Admin> GetUserByEmail(string email)
        {
            var user = await _dBContext.Admin.SingleOrDefaultAsync(u => u.Email == email);
            return user!;
        }

        public async Task<Admin> Login(UserLoginRequestDTO request)
        {
            var user = await GetUserByEmail(request.Email);
            if (user == null)
            {
                throw new Exception("User not found");
            }

            var isLogin = BCrypt.Net.BCrypt.Verify(request.Password, user.Password);
            if (isLogin)
            {
                return user;
            }
            else
            {
                throw new Exception("Invalid password");
            }
        }
    }
}
