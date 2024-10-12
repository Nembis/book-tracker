using System;
using DBAccess.Dtos.User;
using DBAccess.Models;

namespace DBAccess.Datas.User;

public interface IUserData
{
    Task<IEnumerable<UserModel>> GetAllUsersAsync();
    Task<UserModel?> GetUserAsync(int userId);
    Task CreateUserAsync(CreateUserDto createUserDto);
    Task UpdateUserAsync(UpdateUserDto createuserDto);
    Task DeleteUserAsync(int userId);
}
