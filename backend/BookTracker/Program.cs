using Microsoft.AspNetCore.Http.HttpResults;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("api/hello-world", () => 
{
    return Results.Ok(new {
        message = "Hello Quan"
    });
});

app.MapGet("api/greetings/{name}/{age:int}", (string name, int age) => 
{
    return Results.Ok(new {
        Name = name,
        age = age,
        Messsage = "Hello: " + name + " you are" + age.ToString() + " years old."
    });
});

// Temp book information storage
List<Book> listOfBooks = new List<Book>();

app.MapGet("api/get-all-books", () =>
{
    return Results.Ok(new {
        AllBooks = listOfBooks
    });
});

app.MapPost("api/add-book", (Book newBook) => 
{
    for (int i = 0; i < listOfBooks.Count(); i++) 
    {
        if (newBook.Id == listOfBooks[i].Id) {
            return Results.BadRequest(new {
                message = "Book with id: " + newBook.Id + " already exists in the database.",
            });
        }
    }
    listOfBooks.Add(newBook);
    return Results.Created();
});

// Function to delete a book object
app.MapDelete("api/remove-book/{bookRemoveId:int}", (int bookRemoveId) => 
{
    Console.WriteLine("Remove ID: " + bookRemoveId.ToString());
    for (int i = 0; i < listOfBooks.Count(); i++)
    {
        if (bookRemoveId == listOfBooks[i].Id)
        {
            listOfBooks.RemoveAt(i);
            return Results.Ok(new {
                message = "Book with ID: " + bookRemoveId + " was removed from the database."
            });
        }
    }

    return Results.NotFound();
});

// Function to edit an existing book object by passing desired changes through another book object
app.MapPut("api/update-book", (Book updateBook) =>
{
    // Traverse through the list, size is known
    for (int i = 0; i < listOfBooks.Count(); i++)
    {
        // Checks if id matches with any of the books in the list
        if (updateBook.Id == listOfBooks[i].Id)
        {
            listOfBooks[i].Title = updateBook.Title;
            listOfBooks[i].Description = updateBook.Description;
            return Results.Ok(new {
                message = "Updated book with new information."
            });
        }
    }

    return Results.NotFound();
});

app.Run();

public class Book
{
    public required int Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
}
