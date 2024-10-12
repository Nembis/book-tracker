using System;

namespace DBAccess.Models;

public class UserModel
{
	public required int UserId { get; set; }
	public required string Email { get; set; }
	public required string Password { get; set; }
	public DateTime CreateDate { get; set; }
}
