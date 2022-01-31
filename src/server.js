const indexRoutes = require("./routes/index.routes");
const autoresRoutes = require("./routes/autores.routes");
const categoriasRoutes = require("./routes/categorias.routes");
const editorialesRoutes = require("./routes/editoriales.routes");
const librosRoutes = require("./routes/libros.routes");

const express = require("express");

const app = express();

app.set("port", process.env.API_PORT || 4000);

//Middlewares
app.use(express.json());

app.use(indexRoutes);
app.use(autoresRoutes);
app.use(categoriasRoutes);
app.use(editorialesRoutes);
app.use(librosRoutes);

module.exports = app;
