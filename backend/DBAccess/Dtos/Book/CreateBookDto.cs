using System;

namespace DBAccess.Dtos.Book;

public class CreateBookDto
{
	public required string Title { get; set; }
	public string? Description { get; set; }
	public string? IsbnNumber { get; set; }
	public required int AuthorId { get; set; }
}
