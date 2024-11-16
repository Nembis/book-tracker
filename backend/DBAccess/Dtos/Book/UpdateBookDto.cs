using System;

namespace DBAccess.Dtos.Book;

public class UpdateBookDto
{
	public required int BookId { get; set; }
	public required string Title { get; set; }
	public string? Description { get; set; }
	public string? IsbnNumber { get; set; }
	public required int AuthorId { get; set; }
}
