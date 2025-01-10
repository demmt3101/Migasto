const express = require("express");
const cors = require("cors");
const db = require("./firebase/config");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// Ruta para registrar un gasto
app.post("/expenses", async (req, res) => {
    try {
        const { userId, category, amount, date } = req.body;
        await db.collection("users").doc(userId).collection("expenses").add({
            category,
            amount,
            date,
        });
        res.status(200).send({ message: "Gasto registrado exitosamente" });
    } catch (error) {
        res.status(500).send({ message: "Error al registrar gasto", error });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
