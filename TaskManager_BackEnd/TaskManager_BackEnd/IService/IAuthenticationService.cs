using TaskManager_BackEnd.DTOs.RequestDTO;
using TaskManager_BackEnd.DTOs.ResponseDTO;

namespace TaskManager_BackEnd.IService
{
    public interface IAuthenticationService
    {
        Task<AdminResponseDTO> AddUser(UserSignupRequestDTO request);
        Task<string> Login(UserLoginRequestDTO request);
    }
}
