const express = require("express");
const { send } = require("process");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//middlewares
app.use(express.json());
//creamos rutas
app.get("/user", async (req, res) => {
  try {
    const allUser = await prisma.user.findMany();
    res.send(allUser);
  } catch (error) {
    console.error(error);
  }
});

app.post("/user", async (req, res) => {
  try {
    let { id, descripcion } = req.body;
    const user = await prisma.user.create({
      data: {
        id,
        descripcion,
      },
    });

    res.send(user);
  } catch (error) {
    console.error(error);
  }
});

app.post("/product", async (req, res) => {
  try {
    let { name } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
      },
    });

    res.send(product);
  } catch (error) {
    console.error(error);
  }
});

app.get("/product", async (req, res) => {
  try {
    const allproduct = await prisma.product.findMany();
    allproduct.length
      ? res.send(allproduct)
      : res.status(500).send({ msg: "no hay product agregado" });
  } catch (error) {
    console.error(error);
  }
});

app.delete("/product", async (req, res) => {
  try {
    const { id } = req.body;
    const findId = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (findId) {
      await prisma.product.delete({
        where: {
          id,
        },
      });
      res.send({ msg: "delete produc" });
    }

    res.status(500).send({ msg: "product not found" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.error("aplicacion run");
});
