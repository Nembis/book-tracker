using System;

namespace DBAccess.Dtos.User;

public class CreateUserDto
{
	public required string Email { get; set; }
	public required string Password { get; set; }
}