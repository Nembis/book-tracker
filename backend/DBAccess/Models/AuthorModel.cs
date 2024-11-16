using System;

namespace DBAccess.Models;

public class AuthorModel
{
    public required int AuthorId { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; } 
    public DateTime CreateDate { get; set; }
}
