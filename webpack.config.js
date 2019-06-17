const path = require('path');
const fs = require('fs')
// const LoadablePlugin = require('@loadable/webpack-plugin')

let nodeModules = {};
fs.readdirSync(path.resolve(__dirname, './node_modules'))
    .filter((x) => {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach((mod) => {
        nodeModules[mod] = 'commonjs ' + mod;
    });

  module.exports = {
    entry: [
    	path.resolve(__dirname, "w.js")
    ],
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: nodeModules,
    module: {
    	rules: [
    		{
    			test: /\.js$/,
    			exclude: /node_modules/,
    			use: {
    				loader: 'babel-loader',
    				options: {
    					presets: ['@babel/preset-react'],
    					plugins: ["@babel/plugin-syntax-dynamic-import"]
    				},
    			}
    		}
    	]
    },
    // plugins: [new LoadablePlugin()],
  };