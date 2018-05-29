
 
var scrape = require('website-scraper');
var rimraf = require('rimraf');
var sitePath =  __dirname + '/site';


rimraf(sitePath, function () {
  var options = {
    urls: ['http://usvcc.webflow.io/'],
    directory: sitePath,
    recursive: true,
    maxRecursiveDepth: 5,
    onResourceSaved: (resource) => {
    	console.log(`Resource ${resource} was saved to fs`);
    }
  };
  console.log(options);
   
  // with promise
  scrape(options).then((result) => {
      console.log(result)
  }).catch((err) => {
      console.error(err)
  });
});


