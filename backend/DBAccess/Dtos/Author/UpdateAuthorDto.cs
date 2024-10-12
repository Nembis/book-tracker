using System;

namespace DBAccess.Dtos.Author;

public class UpdateAuthorDto
{
    public required int AuthorId { get; set; }
    public required string FirstName { get; set; }
    public required string Lastname { get; set; } 
}
