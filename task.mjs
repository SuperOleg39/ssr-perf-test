import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import { performance } from 'perf_hooks';

export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export async function task(n) {
  const results = [];

  // let now = performance.now();

  for (let i = 0; i < n; i++) {
    results.push(
      ReactDOMServer.renderToString(
        React.createElement(Component, {})
      )
    );
  }

  // let diff = performance.now() - now;

  // console.log(`task for n = ${n} take ${diff}ms`);

  return results;
}

function Component() {
  return React.createElement('div', {},
    React.createElement('ul', {}, [
      React.createElement('li', { children: 'text' }),
      React.createElement('li', { children: 'text' }),
      React.createElement('li', { children: 'text' }),
      React.createElement('li', { children: 'text' }),
      React.createElement('li', { children: 'text' }),
    ])
  )
}
