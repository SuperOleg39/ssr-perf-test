import http from 'http';
import { sleep } from './task.mjs';

let reqId = 0;

const server = http.createServer(async (req, res) => {
  reqId++;

  if (reqId % 2 === 0) {
    await sleep(1000);
  } else {
    await sleep(100);
  }

  res.end();
});

server.listen(5555, () => {
  console.log('api server listening at 5555 port!');
});