const indexRoutes = require("./routes/index.routes");
const authorsRoutes = require("./routes/authors.routes");
const categoriesRoutes = require("./routes/categories.routes");
const editorialsRoutes = require("./routes/editorials.routes");
const booksRoutes = require("./routes/books.routes");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

let port= process.env.API_PORT || 4000;
//app.set("port", process.env.API_PORT || 4000);

app.listen(port);

//Middlewares
app.use(express.json());

app.use(indexRoutes);
app.use(authorsRoutes);
app.use(categoriesRoutes);
app.use(editorialsRoutes);
app.use(booksRoutes);

module.exports = app;
