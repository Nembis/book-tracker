import { ChangeEvent, FormEvent, useState } from "react";

interface IBook {
  title: string;
  description: string;
}

function App() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [bookTitle, setBookTitle] = useState("");
  const [bookDescription, setBookDescription] = useState("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBookTitle(() => value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setBookDescription(() => value);
  };

  const handleBookFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (bookTitle === "" || bookDescription === "") {
      return;
    }

    setBooks((curr) => [
      ...curr,
      { title: bookTitle, description: bookDescription },
    ]);
    setBookTitle(() => "");
    setBookDescription(() => "");
  };

  return (
    <div className="p-2">
      <h1 className="text-center text-4xl font-bold">Book Tracker</h1>

      <form
        className="flex w-full justify-center items-center p-2"
        onSubmit={handleBookFormSubmit}
      >
        <div className="flex flex-col p-2 border border-black rounded-md w-1/4 gap-2">
          <input
            type="text"
            placeholder="Title"
            onChange={handleTitleChange}
            value={bookTitle}
            className="resize-none rounded-md p-2"
          />

          <textarea
            placeholder="Book Description"
            onChange={handleDescriptionChange}
            value={bookDescription}
            className="resize-none rounded-md p-2"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 p-2 text-white rounded-md"
          >
            Add New Book
          </button>
        </div>
      </form>

      <div className="flex justify-center p-2 max-h-80 overflow-scroll">
        <div className="m-2 p-2 border border-black rounded-md w-1/2 space-y-2">
          {books.map((book) => (
            <div className="w-full p-2 border border-gray-500 rounded-md">
              <h4 className="text-xl font-bold">{book.title}</h4>
              <hr />
              <p>{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
