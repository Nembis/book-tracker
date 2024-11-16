using System;
using DBAccess.DatabaseAccess;
using DBAccess.Dtos.Book;
using DBAccess.Models;

namespace DBAccess.Datas.Book;

public class BookData : IBookData
{
    private readonly ISqlDataAccess _db;

    public BookData(ISqlDataAccess db) 
    {
        _db = db;
    }

    public Task CreateBook(CreateBookDto newBook) =>
        _db.SaveDataAsync<dynamic>("""
            INSERT INTO book(title, description, isbn_number, author_id)
            VALUES (@Title, @Description, @IsbnNumber, @AuthorId);
        """, newBook);

    public Task DeleteBook(int bookId) =>
        _db.SaveDataAsync<dynamic>("""
            DELETE FROM book
            WHERE book_id = @bookId;
        """, new {bookId});

    public async Task<BookModel?> GetBook(int bookId)
    {
        var book = await _db.LoadDataAsync<BookModel, dynamic>("""
            SELECT *
            FROM book
            WHERE book_id = @bookId;
        """, new {bookId});

        return book.FirstOrDefault();
    }

    public Task<IEnumerable<BookModel>> GetBooks() =>
        _db.LoadDataAsync<BookModel, dynamic>("""
            SELECT *
            FROM book;
        """, new {});

    public Task UpdateBook(UpdateBookDto updateBook) =>
        _db.SaveDataAsync<dynamic>("""
            UPDATE book
            SET
                title = @Title,
                description = @Description,
                isbn_number = @IsbnNumber,
                author_id = @AuthorId
            WHERE book_id = @BookId;
        """, updateBook);
}
