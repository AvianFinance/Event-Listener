const express = require('express');
const app = express();
const port = 8082; // Choose a port number

app.get('/', (req, res) => {
  res.send('Server is Runing!');
});

const { Worker } = require("worker_threads");
const worker = new Worker("./workers/index", { workerData: "Main listner" });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
