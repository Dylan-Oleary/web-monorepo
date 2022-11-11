require("dotenv").config();
import { initializeApp } from "./initializeApp";

const PORT = process?.env?.PORT || 3001;
const app = initializeApp();

app.listen(PORT, () => {
    console.info(`Server is listening on http://localhost:${PORT}`);
});
