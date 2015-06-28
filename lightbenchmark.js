// LightBenchmark.js - A simple and lightweight benchmark tool in native JavaScript.
// Version 1.0
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
    console.error('Fatal error : missing options.');
    return;
  } else if (typeof options !== 'object') {
    options = {};
    console.warn('Warning : incorrect options. Redefined as an object. May cause errors.');
  }

  if ( ! options.name || typeof options.name !== 'string') {
    options.name = 'Default';
    console.info('Info : missing or incorrect name. "' + options.name + '" name given instead.');
  }

  if ( ! options.loops) {
    options.loops = defaultLoops;
    console.info('Info : missing "loops" value. Default value given : ' + defaultLoops + '.');
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
          console.info('Info : incorrect "loops" value. Default value given instead : ' + defaultLoops + '.');
          break;
      }
    }
  } else {
    options.loops = defaultLoops;
    console.info('Info : incorrect "loops" value. Default value given instead : ' + defaultLoops + '.');
  }

  if ( ! callback || typeof callback !== 'function') {
    console.error('Fatal error : missing or incorrect callback function.');
    return;
  }


  console.info('"' + options.name + '" code is tested ' + options.loops + ' times :');
  console.time(options.name);

  for (var i = 0; i < options.loops; i++) {
    callback.call(scope, i, options);
  }

  console.timeEnd(options.name);
  console.log('\n');
}
