const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();


const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
//Middleware para parsear JSON
app.use(express.json());

//Ruta raíz
app.get("/", (req, res) => {
  res.send("Hola API en Node.js funcionando!");
});

//Iniciar servidor
app.listen(port, () => {
  console.log("API escuchando en http://localhost:" + port);
});

//get all products
app.get("/productos", getAllProducts);
async function getAllProducts(req, res) {
  try {
    const productos = await prisma.producto.findMany();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo productos" });
  }
}
