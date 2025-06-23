import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");

// назначение порта для сервера (нельзя использовать 3000 порт, так как он используется для frontend)
const PORT = process.env.PORT || 3001;

// запуск приложения локального сервера
const app = express();

// слушатель app-приложения сервера
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);

    app.get("/api", (req, res) => {
        res.json({
            id: 1,
            name: "test",
            age: 22,
        });
    });

});