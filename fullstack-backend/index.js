import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");

import { dataApiJournal } from "./src/api/_dataApiJournal.js";

// назначение порта для сервера (нельзя использовать 3000 порт, так как он используется для frontend)
const PORT = process.env.PORT || 3001;

// запуск приложения локального сервера
const app = express();
app.use(express.json());

dataApiJournal(app);

// слушатель app-приложения сервера
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});