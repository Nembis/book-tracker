using System;
using DBAccess.DatabaseAccess;
using DBAccess.Dtos.User;
using DBAccess.Models;

namespace DBAccess.Datas.User;

public class UserData : IUserData
{
    private readonly ISqlDataAccess _db;

    public UserData(ISqlDataAccess db)
    {
        _db = db;
    }

    public Task CreateUserAsync(CreateUserDto createUserDto) =>
        _db.SaveDataAsync("""
            INSERT INTO "user" (email, password)
            VALUES (@Email, @Password);
        """, createUserDto);

    public Task DeleteUserAsync(int userId) =>
        _db.SaveDataAsync("""
            DELETE FROM "user"
            WHERE user_id = @userId;
        """, new { userId });

    public Task<IEnumerable<UserModel>> GetAllUsersAsync() =>
        _db.LoadDataAsync<UserModel, dynamic>("""
            SELECT *
            FROM "user";
        """, new {});

    public async Task<UserModel?> GetUserAsync(int userId)
    {
        var user = await _db.LoadDataAsync<UserModel, dynamic>("""
            SELECT *
            FROM "user"
            WHERE user_id = @userId;
        """, new {userId});

        return user.FirstOrDefault();
    }

    public Task UpdateUserAsync(UpdateUserDto updateUserDto) =>
        _db.SaveDataAsync("""
            UPDATE "user"
            SET email = @Email,
                password = @Password
            WHERE user_id = @UserId;
        """, updateUserDto);
}
