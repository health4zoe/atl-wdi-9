-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
-- SELECT * FROM authors;
-- Get just the name and birth year of all authors
-- SELECT * FROM (name, birth_year)
-- Get all authors born in the 20th centruy or later
-- SELECT * FROM authors
-- Get all authors born in the USA
-- SELECT * FROM authors
-- Get all books published on 1985
-- SELECT * FROM books
-- Get all books published before 1989
-- SELECT * FROM books
-- Get just the title of all books.
-- SELECT * FROM
-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been
-- SELECT  publication_date FROM books SHERE title = 'A Dance with Dragons';
-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
-- SELECT * FROM books
-- Add yourself as an author
-- INSERT INTO authors (name, nationality, birth_year); VALUES(Dee, 'United States of America', 1989);
-- Add two books that you'd like to write (you can hard-code your id as the author id)
-- INSERT INTO books (title, author_id);
-- Update one of your books to have a new title
-- UPDATE books SET title = 'something else' WHERE title = '';
-- Delete your books
-- DROP TABLE
-- Delete your author entry
-- DELETE FROM authors   WHERE name = ''; DELETE 1
