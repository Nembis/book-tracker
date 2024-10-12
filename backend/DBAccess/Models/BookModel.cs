using System;

namespace DBAccess.Models;

public class BookModel
{
	public required int BookId { get; set; }
	public required string Title { get; set; }
	public string? Description { get; set; }
	public string? IsbnNumber { get; set; }
	public required int AuthorId { get; set; }
    public AuthorModel? Author { get; set; }
	public DateTime CreateDate { get; set; }
}
