CREATE TABLE "author" (
	author_id SERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT unique_author_first_last_name UNIQUE (first_name, last_name)
);

CREATE TABLE "book" (
	book_id SERIAL NOT NULL PRIMARY KEY,
	title varchar(100) NOT NULL,
	description VARCHAR(500),
	isbn_number VARCHAR(13),
	author_id INT NOT NULL REFERENCES "author"(author_id),
	create_date TIMEsTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT unique_book_title_author UNIQUE (title, author_id)
);

CREATE TABLE "user" (
	user_id SERIAL NOT NULL PRIMARY KEY,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(100) NOT NULL,
	create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE "user_book" (
	book_id INT NOT NULL REFERENCES "book"(book_id),
	user_id INT NOT NULL REFERENCES "user"(user_id),
	is_owned BOOL DEFAULT true NOT NULL, 
	last_read DATE,
	finished_reading DATE,
	bought_book DATE,
	create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);



