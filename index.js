const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Aplikasi PaaS pertama Kelompok 5 berjalan di Render!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server berjalan di port ${port}`));

