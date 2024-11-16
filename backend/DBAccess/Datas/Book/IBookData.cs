using System;
using DBAccess.Dtos.Book;
using DBAccess.Models;

namespace DBAccess.Datas.Book;

public interface IBookData
{
    Task<IEnumerable<BookModel>> GetBooks();
    Task<BookModel?> GetBook(int bookId);
    Task CreateBook(CreateBookDto newBook);
    Task UpdateBook(UpdateBookDto updateBook);
    Task DeleteBook(int bookId);
}
