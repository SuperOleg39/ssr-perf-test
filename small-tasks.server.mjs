import http from 'http';
import fetch from 'node-fetch';
import { task } from './task.mjs';

const server = http.createServer(async (req, res) => {
  await fetch('http://localhost:5555/');

  run(0, res);
});

function run(i, res) {
  setImmediate(() => {
    task(225);

    if (i === 24) {
      res.end();
    } else {
      run(++i, res)
    }
  });
}

server.listen(4000, () => {
  console.log('small tasks server listening at 4000 port!');
});