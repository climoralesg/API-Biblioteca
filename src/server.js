const indexRoutes = require("./routes/index.routes");
const authorsRoutes = require("./routes/authors.routes");
const categoriasRoutes = require("./routes/categorias.routes");
const editorialesRoutes = require("./routes/editoriales.routes");
const librosRoutes = require("./routes/libros.routes");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.set("port", process.env.API_PORT || 4000);

//Middlewares
app.use(express.json());

app.use(indexRoutes);
app.use(authorsRoutes);
app.use(categoriasRoutes);
app.use(editorialesRoutes);
app.use(librosRoutes);

module.exports = app;
