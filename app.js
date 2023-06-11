const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index.routes");

const port = config.get("port") || 3030;

const app = express();

app.use(express.json());

app.use(mainRouter);

async function start() {
    try {
        await mongoose.connect(config.get("atlasUri"));
        app.listen(port, () => {
            console.log(`Server is running on ${port}-port`);
        });
    } catch (error) {
        console.log(`Serverda xatolik`, error);
    }
}

start();
