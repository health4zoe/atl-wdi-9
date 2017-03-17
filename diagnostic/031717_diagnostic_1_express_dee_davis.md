Question 1: What is the Request/Response Cycle? How does it work? It helps to see how all the files work together.

Question 2: What are the differences between a GET request and a POST request?  They are both requests in HTTP.  Post sends the data and get retrieves the data.

Question 3: What does npm init do?  It creates a package.json file.

Question 4: What does CRUD stand for? What are the HTTP verbs that are associated with each function?
Create(post) Read (get) Update (put) Delete (delete)

Question 5: If we have a form where we want to create new data, what type of method do we use in our form? Create

Question 6: If the following form was submitted, what would action="myScript.js" do? Create "myScript.js"

<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>

Question 7: Write an express route that handles a POST request to the url /menus and redirects to the /homepage
router.get('/:')
res.render()

Question 8: In the following express route, write how you would grab the values of :id and :song_id in javascript.
  router.get('/:id/edit', function(req, res) {}

app.get("/artist/:id/song/:song_id"), function(req, res){
  //hmm...
}
Question 9: What is MVC? How have we been using it so far?
Model View Controller...It helps us to update, retrieve information, and scale large projects.

Bonus Question

Question 10: Write an express route that handles a GET request to the url /products and sends back the JSON object {error: "Bad Request"}
