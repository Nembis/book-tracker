using System;

namespace DBAccess.Models;

public class UserBookModel
{
	public required int BookId { get; set; }
	public required int UserId { get; set; }
	public required bool IsOwned { get; set; }
	public DateOnly? LastRead { get; set; }
	public DateOnly? FinishedReading { get; set; }
	public DateOnly? BoughtBook { get; set; }
	public DateTime CreateDate { get; set; }
}
