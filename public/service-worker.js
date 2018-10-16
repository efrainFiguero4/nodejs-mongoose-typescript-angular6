/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["10.eda221ab11c5282ddcc9.js","e8136860946e386e8b66be9a2ae9253d"],["11.801ddf08273442a33ff2.js","59d43c294c1ff090ac62d8aeaeaa6155"],["12.30d679779bf2db0bc2d8.js","8931e0dc16c7df1cd3253de741c538b4"],["13.16402f7f0467357e5546.js","97843756d5dc178d0417c784d2cfc581"],["2.88858cdde2b27b25d493.js","dc69abf375b7901a984a605cda7dc1d4"],["3.cfd2aa5fdb923e685c52.js","1694754673b6cf243fbd3a749ce9feb1"],["3rdpartylicenses.txt","71b831eb65bf83c38141331693892d1f"],["7.acaa63af3d604844e9b3.js","e6f105f22c23fc26719cf4d769fce199"],["8.a488a7e349c9f73e6741.js","c8680d067492ec6d0ec183855796d921"],["9.f2e318d9f4a7c0e4fb17.js","9c68efea6c21757615c2bafbf55bca6a"],["OpenSans-Bold.07986db864a6fdb45564.ttf","07986db864a6fdb45564de20fc8b1691"],["OpenSans-Bold.58308bcc8dce00a629bd.woff","58308bcc8dce00a629bd46305a1c5494"],["OpenSans-Bold.6dcdccc095ca3d949a5f.eot","6dcdccc095ca3d949a5f0b2c05f8bd08"],["OpenSans-Light.185c8f0ad073144803fc.eot","185c8f0ad073144803fcaaac566c4531"],["OpenSans-Light.3c5786e02436eb7c7f67.ttf","3c5786e02436eb7c7f6763f391c7d648"],["OpenSans-Light.684c4fb87e4351abe8c8.woff","684c4fb87e4351abe8c8d6b02b1ceb25"],["OpenSans-Regular.7ce00256097ccf0d2c06.eot","7ce00256097ccf0d2c0641fce8a96e57"],["OpenSans-Regular.a88748791c366be26c9b.ttf","a88748791c366be26c9bdf959d583d3f"],["OpenSans-Regular.ce3b96ab2b51255e60d2.woff","ce3b96ab2b51255e60d2d1aae633dae3"],["assets/fonts/OpenSans-Bold.eot","6dcdccc095ca3d949a5f0b2c05f8bd08"],["assets/fonts/OpenSans-Bold.otf","13d2b0db21dda1d8f7fa8e90459824c1"],["assets/fonts/OpenSans-Bold.ttf","07986db864a6fdb45564de20fc8b1691"],["assets/fonts/OpenSans-Bold.woff","58308bcc8dce00a629bd46305a1c5494"],["assets/fonts/OpenSans-Light.eot","185c8f0ad073144803fcaaac566c4531"],["assets/fonts/OpenSans-Light.otf","d01cbd11e5df383a496c7807e6fafbd8"],["assets/fonts/OpenSans-Light.ttf","3c5786e02436eb7c7f6763f391c7d648"],["assets/fonts/OpenSans-Light.woff","684c4fb87e4351abe8c8d6b02b1ceb25"],["assets/fonts/OpenSans-Regular.eot","7ce00256097ccf0d2c0641fce8a96e57"],["assets/fonts/OpenSans-Regular.otf","693e229e19898b657806809b6305eb48"],["assets/fonts/OpenSans-Regular.ttf","a88748791c366be26c9bdf959d583d3f"],["assets/fonts/OpenSans-Regular.woff","ce3b96ab2b51255e60d2d1aae633dae3"],["assets/icons/icon-128x128.png","c868628f85920746394b72634dfcc4f9"],["assets/icons/icon-144x144.png","cd8497548afb834dda62757379542627"],["assets/icons/icon-152x152.png","fe8578eb15d077ca8c61b136d721f816"],["assets/icons/icon-192x192.png","cba69c4d0a85d58c52948906f09cc2e5"],["assets/icons/icon-384x384.png","09e0f809670656f359124debc2f18af5"],["assets/icons/icon-512x512.png","499374c2e19adb5ef3b3dadc7cc53412"],["assets/icons/icon-72x72.png","18f662ec383f61bfe9db19a5a43fcec5"],["assets/icons/icon-96x96.png","5e7bb9c1b59630a0a57a10b506ba83b8"],["assets/img/add.png","ede93e5d57e5488c198b1bab4a83d221"],["assets/img/cplx.png","399447a56b3e9da2e2facdf28d8e73f8"],["assets/img/descarga.png","9e7b12534d7e52de21bdba4f66eab960"],["assets/img/edit.svg","f687453c96741b76a89ab7ca6fded007"],["assets/img/favicon.ico","7ba500e87c565efe4ebada422c1f7eb3"],["assets/img/logo-01.png","4704952d02bba1a932fb9c79617d0a08"],["assets/img/logo-01.svg","7a14964e51fe48eb2e8022de40628ace"],["assets/svg/arrow.svg","e96f5dce10310beb7c86e304167ba2b9"],["assets/svg/check.svg","5f07082cb9b8cd858b3029ea3845b9ef"],["assets/svg/close.svg","dcb0142c84754182037f7b9d46649cbb"],["assets/svg/config.svg","4c341f401e7fde9155f5b61f7495e54a"],["assets/svg/delete.svg","01282b5ae80bb6193385f519b20d7e2b"],["assets/svg/find.svg","ac8621a8c96b174756cc6eb45a313e20"],["assets/svg/info.svg","a73e3a4bc5e068d4189804c58dcac1e6"],["assets/svg/loading.svg","39d4592022141fbfd51cce4abce911c3"],["assets/svg/noti.svg","7b33be931bbe5ce251e65f94dce3d1de"],["common.0d17f55917584d1931bd.js","bdc24f18b1f761ed165569edd28297dc"],["favicon.ico","7ba500e87c565efe4ebada422c1f7eb3"],["index.html","51edc0b0b58cc5de5abfff2c9474cba3"],["main.7b7bb426a90a20229898.js","47d597ff3b57c414e6b760fe1a14012c"],["manifest.json","f9e327f0fa35f926d4c38d6232c23bb8"],["ngsw-worker.js","8c921182f1caf7e8bcb2185004d68b1f"],["ngsw.json","8b36442fce91a9500a8db275f809d3f8"],["polyfills.76105623b11d2b028a79.js","cc727102e27bd9116f88922ed792178c"],["runtime.b5360d315c83f5e2de6f.js","ad4a4c040b4cae8c9eebe1c1a99c407b"],["safety-worker.js","9963b75a25ae24de13db3e8e39ab027b"],["scripts.60119b0f9e1a2db5bb1e.js","2f43827e2c1fce943002fda62380cd81"],["styles.7de057d1d76ebe1c5c15.css","bdba6208c9664e0b8aba7787dbd9598d"],["worker-basic.min.js","9963b75a25ae24de13db3e8e39ab027b"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







