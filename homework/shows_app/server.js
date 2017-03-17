app.listen()
app.get('/shows', function(req, res) {
  var faveShows = ["ice cream", 'Tacos from Superica', 'ae', 'Crles']

res.send('favorite-foods', {
        data: favoriteFoods
    });
});

app.use(express.static(__dirname + '/public')); 
