using System;
using DBAccess.Dtos.Author;
using DBAccess.Models;

namespace DBAccess.Datas.Author;

public interface IAuthorData
{
    Task<IEnumerable<AuthorModel>> GetAllAuthors();
    Task<AuthorModel?> GetAuthor(int authorId);
    Task CreateAuthor(CreateAuthorDto newAuthor);
    Task UpdateAuthor(UpdateAuthorDto updateAuthor);
    Task DeleteAuthor(int authorId);
}
