var express = require('express')
   var app = express()
   app.get('/home', function(req, res) {
     res.end('Hello World!')
   })
  //  app.listen(3000)

app.listen(process.argv[2])




// This exercise is about serving static assets like HTML files.
// There are many ways to do it, but we want you to apply static middleware to serve the file index.html.
//
//
// Your solution must listen on the port number supplied by process.argv[2].
//
// The index.html file is provided and usable via the path supplied by
// process.argv[3]. However, you can use your own file with this content (beware of whitespace):
//
//     <html>
//       <head>
//         <title>expressworks</title>
//         <link rel="stylesheet" type="text/css" href="/main.css"/>
//       </head>
//       <body>
//         <p>I am red!</p>
//       </body>
//     </html>
//
// -------------------------------------------------------------------------------
//
// ## HINTS
//
// This is how you can call static middleware assuming your static folder is public and it's in the same folder as the main project file:
//
//     app.use(express.static('public'))
//
// For this exercise expressworks will pass you the path in the CLI argument process.argv[3]. You can create a logical OR condition to use the CLI argument value or fallback to the absolute path to the public folder. The path is constructed with path.join():
//
//     app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
