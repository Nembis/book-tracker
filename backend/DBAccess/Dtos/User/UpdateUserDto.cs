using System;

namespace DBAccess.Dtos.User;

public class UpdateUserDto
{
	public required int UserId { get; set; }
	public required string Email { get; set; }
	public required string Password { get; set; }
}
