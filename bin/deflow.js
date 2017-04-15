#!/usr/bin/env node
// @flow

'use strict';

const app = require('commander');
const getStdin = require('get-stdin');
const babel = require("babel-core");


const opts = {
  presets: ['babel-preset-flow'].map(require.resolve),
  plugins: ['babel-plugin-syntax-jsx', 'babel-plugin-syntax-object-rest-spread'].map(require.resolve),
}

const deflowString = str => (babel.transform(str, opts)).code;
const deflowFile = filename => {
  return new Promise((res, rej) => {
    babel.transformFile(filename, opts, (err, result) => {
      if (err) {
        rej(err);
      } else {
        res(result.code);
      }
    });

  })
};

if (process.stdin.isTTY) {

  app
    .version('0.0.1')
    .description('a cli app for stripping flow types that accepts stdin')
    .usage('<file>')
    .parse(process.argv)

  if (app.args.length === 1) {
    deflowFile(app.args[0]).then(str => console.log(str));
  } else {
    app.outputHelp();
  }

} else {
  return getStdin().then(str => {
    console.log(deflowString(str))
  });
}
