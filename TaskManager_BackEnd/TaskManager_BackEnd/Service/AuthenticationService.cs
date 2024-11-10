using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TaskManager_BackEnd.DTOs.RequestDTO;
using TaskManager_BackEnd.DTOs.ResponseDTO;
using TaskManager_BackEnd.Entity;
using TaskManager_BackEnd.IRepository;
using TaskManager_BackEnd.IService;
namespace TaskManager_BackEnd.Service
{
    public class AuthenticationService: IAuthenticationService
    {
        private readonly IAuthenticationRepository _AuthenticationRepository;
        private readonly IConfiguration _configuration;

        public AuthenticationService(IAuthenticationRepository authenticationRepository, IConfiguration configuration)
        {
            _AuthenticationRepository = authenticationRepository;
            _configuration = configuration;
        }

        public async Task<AdminResponseDTO> AddUser(UserSignupRequestDTO request)
        {
            var user = await _AuthenticationRepository.GetUserByEmail(request.Email);
            if (user == null)
            {
                var userObj = new Admin()
                {
                    FullName = request.FullName,
                    Email = request.Email,
                    Password = BCrypt.Net.BCrypt.HashPassword(request.Password),
                    Role = request.Role,
                };

                var userData = await _AuthenticationRepository.AddUser(userObj);

                var response = new AdminResponseDTO()
                {
                    UserId = userData.UserId,
                    FullName = userData.FullName,
                    Email = userData.Email,
                    Role = userData.Role,
                };

                return response;
            }
            else
            {
                throw new Exception("User already exists");
            }
        }

        public async Task<string> Login(UserLoginRequestDTO request)
        {
            var userDetails = await _AuthenticationRepository.Login(request);
            var response = new AdminResponseDTO()
            {
                UserId = userDetails.UserId,
                FullName = userDetails.FullName,
                Email = userDetails.Email,
                Role = userDetails.Role,
            };

            return GenerateToken(userDetails);
        }


        public string GenerateToken(Admin user)
        {
            var claimList = new List<Claim>();
            claimList.Add(new Claim("UserId", user.UserId.ToString()));
            claimList.Add(new Claim("Name", user.FullName));
            claimList.Add(new Claim("Email", user.Email));
            claimList.Add(new Claim("Role", user.Role.ToString()));



            var key = _configuration["Jwt:Key"];
            var secKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key));
            var credintial = new SigningCredentials(secKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claimList,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: credintial
            );

            var res = new JwtSecurityTokenHandler().WriteToken(token);
            return res;
        }
    }
}
