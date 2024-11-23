using System;
using DBAccess.Datas.Book;
using DBAccess.Dtos.Book;
using DBAccess.Models;

namespace BookTracker.Routes;

public static class BookRoute
{
    public static void ConfigureBookRoute(this WebApplication app)
    {
        app.MapPost("api/book", CreateBook);
        app.MapGet("api/book", GetBooks);
        app.MapGet("api/book/{authorId:int}", BookMatch);
        app.MapDelete("api/book", DeleteBook);
    }

    private static async Task<IResult> CreateBook(CreateBookDto newBook, IBookData book, ILogger<Program> logger)
    {
        try
        {
            await book.CreateBook(newBook);
            return Results.Ok();
        }
        catch(Exception ex)
        {
            logger.LogError(ex, "Failed to create book.");
            return Results.Problem(ex.Message);
        }
    }
    private static async Task<IResult> GetBooks(IBookData bookData, ILogger<Program> logger) 
    {
        try 
        {
            return Results.Ok(await bookData.GetBooks());
        }
        catch(Exception ex)
        {
            logger.LogError(ex, "Failed to get books.");
            return Results.Problem(ex.Message);
        }
    }
    
    private static async Task<IResult> BookMatch(IBookData bookdata, int authorId, ILogger<Program> logger)
    {
        try
        {
            var books = await bookdata.GetBooks();
            var matchedBooks = new List<BookModel>();
            
            for(int i = 0; i < books.Count(); ++i)
            {
                if(books.ElementAt(i).AuthorId == authorId)
                {
                    matchedBooks.Add(books.ElementAt(i));
                }
            }
            return Results.Ok(matchedBooks);
        }
        catch(Exception ex)
        {
            logger.LogError(ex, "Failed to get books from the author.");
            return Results.Problem(ex.Message);
        }
    }
    private static async Task<IResult> DeleteBook(IBookData book, int bookId, ILogger<Program> logger)
    {
        try
        {
            await book.DeleteBook(bookId);
            return Results.Ok();
        }
        catch(Exception ex)
        {
            logger.LogError(ex, "Failed to delete book.");
            return Results.Problem(ex.Message);
        }
    }
}
