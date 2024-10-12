using System;

namespace DBAccess.Dtos.Author;

public class CreateAuthorDto
{
    public required string FirstName { get; set; }
    public required string Lastname { get; set; } 
}
