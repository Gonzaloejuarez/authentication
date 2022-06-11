const mongoose = require("mongoose");


const MONGO_URL = "mongodb://localhost:27017/TodoApp"

const db = async () => {
    await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB_ON"))
    .catch((error) => console.log(error))
}

module.exports = db