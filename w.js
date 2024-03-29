const http = require('http');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
import Hallo from './Hallo'

const server = http.createServer((req, res) => {
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><head><title>Test</title></head><body>')
  
  const stream = ReactDOMServer.renderToNodeStream(<Hallo />).pipe(res)

}).listen(3000)