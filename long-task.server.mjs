import http from 'http';
import fetch from 'node-fetch';
import { task } from './task.mjs';

const server = http.createServer(async (req, res) => {
  await fetch('http://localhost:5555/');

  for (let i = 0; i < 25; i++) {
    task(225);
  }

  res.end();
});

server.listen(3000, () => {
  console.log('long tasks server listening at 3000 port!');
});