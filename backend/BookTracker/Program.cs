using BookTracker.Routes;
using DBAccess.DatabaseAccess;
using DBAccess.Datas.Author;
using DBAccess.Datas.Book;
using DBAccess.Datas.User;
using DBAccess.Dtos.User;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options => options.AddDefaultPolicy(builder => 
{
    builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
}));

builder.Services.AddSingleton<ISqlDataAccess, SqlDataAccess>();
builder.Services.AddSingleton<IAuthorData, AuthorData>();
builder.Services.AddSingleton<IBookData, BookData>();
builder.Services.AddSingleton<IUserData, UserData>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors();
}

app.UseHttpsRedirection();

app.MapGet("api/users", async (IUserData userData, ILogger<Program> logger) =>
{
    try 
    {
        var users = await userData.GetAllUsersAsync();
        return Results.Ok(users);
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Failed to get all users from the database.");
        return Results.Problem(ex.Message);
    }
});

app.MapGet("api/user/{userId:int}", async (int userId, IUserData userData, ILogger<Program> logger) =>
{
    try
    {
        var user = await userData.GetUserAsync(userId);

        if (user == null)
        {
            logger.LogWarning("User with userId: {ID} does not exist in the database.", userId);
            return Results.NotFound();
        }

        return Results.Ok(user);

    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Failed to get user by id.");
        return Results.Problem(ex.Message);
    }
});

app.MapPost("api/user", async (CreateUserDto newUser, IUserData userData, ILogger<Program> logger) => 
{
    try  
    {
        await  userData.CreateUserAsync(newUser);
        return Results.Created();
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Failed to create new user.");
        return Results.Problem(ex.Message);
    }
});

app.MapPut("api/user", async (UpdateUserDto updateUser, IUserData userData, ILogger<Program> logger) =>
{
    try
    {
        await userData.UpdateUserAsync(updateUser);
        return Results.Ok();
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Failed to update user.");
        return Results.Problem(ex.Message);
    }
});

app.MapDelete("api/user/{userId:int}", async (int userId, IUserData userData, ILogger<Program> logger) =>
{
    try
    {
        await userData.DeleteUserAsync(userId);
        return Results.Ok();
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Failed to delete the user.");
        return Results.Problem(ex.Message);
    }
});

app.ConfigureAuthorRoute();
app.ConfigureBookRoute();

app.Run();
