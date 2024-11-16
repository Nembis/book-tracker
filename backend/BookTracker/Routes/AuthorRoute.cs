using System;
using DBAccess.Datas.Author;
using DBAccess.Dtos.Author;

namespace BookTracker.Routes;

public static class AuthorRoute
{
    public static void ConfigureAuthorRoute(this WebApplication app) 
    {
        app.MapGet("api/author", GetAuthors);
        app.MapPost("api/author", CreateAuthor);
    }

    private static async Task<IResult> GetAuthors(IAuthorData authorData, ILogger<Program> logger) 
    {
        try
        {
            return Results.Ok(await authorData.GetAllAuthors());
        }
        catch (Exception ex) 
        {
            logger.LogError(ex, "Failed to get all authors");
            return Results.Problem(ex.Message);
        }
    }

    private static async Task<IResult> CreateAuthor(CreateAuthorDto newAuthor, IAuthorData authorData, ILogger<Program> logger)
    {
        try
        {
            await authorData.CreateAuthor(newAuthor);
            return Results.Ok();
        }
        catch (Exception ex) 
        {
            logger.LogError(ex, "Failed to create author.");
            return Results.Problem(ex.Message);
        }
    }

}
