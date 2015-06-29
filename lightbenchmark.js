// LightBenchmark.js - A simple and lightweight benchmark tool in native JavaScript.
// Version 1.0.1
// MIT License
// Copyright (c) 2015 Bertrand Vignaud-Lerouge / n457 - https://github.com/n457


// options : object
// callback : function
function lightbenchmark(options, callback, scope) {

  'use strict';

  var lowLoops = 1000,
      defaultLoops = 10000,
      highLoops = 100000;

  if (! options) {
    console.info('LightBenchmark.js info : nothing to do.');
    return;
  } else if (typeof options === 'function') {
    callback = options;
    options = {};
  } else if (callback && typeof callback === 'function') {
    if (typeof options !== 'object') {
      options = {};
      console.info('LightBenchmark.js info : incorrect options. Redefined as an object.');
    }
  } else {
    console.error('LightBenchmark.js error : missing or incorrect callback function.');
    return;
  }

  if ( ! options.name || typeof options.name !== 'string') {
    options.name = 'Default';
    console.info('LightBenchmark.js info : missing or incorrect name. "' + options.name + '" name given instead.');
  }

  if ( ! options.loops) {
    options.loops = defaultLoops;
    console.info('LightBenchmark.js info : missing "loops" value. Default value given : ' + defaultLoops + '.');
  } else if (typeof options.loops === 'number' || typeof options.loops === 'string') {
    var checkInt = parseInt(options.loops);
    if (checkInt) {
      options.loops = checkInt;
    } else {
      switch (options.loops) {
        case 'low':
          options.loops = lowLoops;
          break;
        case 'default':
          options.loops = defaultLoops;
          break;
        case 'high':
          options.loops = highLoops;
          break;
        default:
          options.loops = defaultLoops;
          console.info('LightBenchmark.js info : incorrect "loops" value. Default value given instead : ' + defaultLoops + '.');
          break;
      }
    }
  } else {
    options.loops = defaultLoops;
    console.info('LightBenchmark.js info : incorrect "loops" value. Default value given instead : ' + defaultLoops + '.');
  }


  console.info('LightBenchmark.js : "' + options.name + '" code is tested ' + options.loops + ' times :');
  console.time(options.name);

  for (var i = 0; i < options.loops; i++) {
    callback.call(scope, i, options);
  }

  console.timeEnd(options.name);
  console.log('\n');
}
