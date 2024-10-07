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
	author_id INT NOT NULL REFERENCES "author"(author_id),
	create_date TIMEsTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT unique_book_title_author UNIQUE (title, author_id)
);