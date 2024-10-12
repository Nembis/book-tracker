using System;
using System.Data.Common;
using DBAccess.DatabaseAccess;
using DBAccess.Dtos.Author;
using DBAccess.Models;

namespace DBAccess.Datas.Author;

public class AuthorData : IauthorData
{
    private readonly ISqlDataAccess _db;

    public AuthorData(ISqlDataAccess db)
    {
        _db = db;
    }

    public Task CreateAuthor(CreateAuthorDto newAuthor) =>
        _db.SaveDataAsync("""
            INSERT INTO "author" (first_name, last_name)
            VALUES (@FirstName, @LastName);
        """, newAuthor);

    public Task DeleteAuthor(int authorId) =>
        _db.SaveDataAsync("""
            DELETE FROM "author"
            WHERE author_id = @authorId;
        """, new {authorId});

    public Task<IEnumerable<AuthorModel>> GetAllAuthors() =>
        _db.LoadDataAsync<AuthorModel, dynamic>("""
            SELECT *
            FROM "author";
        """, new {});

    public async Task<AuthorModel?> GetAuthor(int authorId)
    {
        var author = await _db.LoadDataAsync<AuthorModel, dynamic>("""
            SELECT *
            FROM "author"
            WHERE author_id = @authorId;
        """, new {authorId});

        return author.FirstOrDefault();
    }

    public Task UpdateAuthor(UpdateAuthorDto updateAuthor) =>
        _db.SaveDataAsync("""
            UDPATE "author"
            SET first_name = @FirstName
                last_name = @LastName
            WHERE author_id = @AuthorId;
        """, updateAuthor);
}
