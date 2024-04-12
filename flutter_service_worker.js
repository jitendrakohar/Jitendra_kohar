'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/appIcon/icon.png": "8db9fca5c1b05ab9bf9f83bc67b39490",
"assets/assets/image/bluescene.jpg": "b5f80fda1515dfea9c6c6729a9eb91bf",
"assets/assets/image/cui.png": "287f9787968f5df14897e9066c22a388",
"assets/assets/image/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"assets/assets/image/tiptop.png": "fcb26bc92dae36378dce56cb7c8dede2",
"assets/assets/image/player.png": "612730c3861b2af0a0ae161ac8a72345",
"assets/assets/image/hostel.jpg": "5097a4852773704ea67cef42110d4171",
"assets/assets/image/skin-cancer.png": "55b41436c63aaab2b7143bf5cdb665fa",
"assets/assets/image/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/image/ecommerce.png": "9a8a414009e003bd11be63fa0ee8b1ca",
"assets/assets/image/task.png": "62d6be2ebaef80434b114eacd9102a52",
"assets/assets/image/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"assets/assets/images/dev_header.png": "0fbfaf0b550c2e8f2f137f89e94a9889",
"assets/assets/images/dev_award.png": "c1a434eaa7fa611755056c135a938dcb",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/dev_header.webp": "ee89211164b6af78a346e4ac31b42889",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/home_page_screenshot.png": "e745cbf5853cf0646dc62e0a01542895",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/dev_aboutme.png": "8db9fca5c1b05ab9bf9f83bc67b39490",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/app_icon.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/AssetManifest.bin": "247458c61869534396b4bc082ae14bae",
"assets/AssetManifest.json": "2e7d61a7b83e989f93131b07d4e6f632",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/fonts/MaterialIcons-Regular.otf": "9f3f4583f55ec37eaa0743b024381b8f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e9f5743be24a9c4580a12d79879fef6c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d826e37835f855b18d0cec7021987c79",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2a00c6942f20be06aaaa4a99590e0e6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/NOTICES": "b15a3cce8563df627d1e980f3c6c5183",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "af89d62861b0f61d62246fdc9dd70968",
"/": "af89d62861b0f61d62246fdc9dd70968",
"favicon.png": "5a099808b570fb533165d4f05e9e095e",
"manifest.json": "25bb914008a6c0bbd041febe622075a8",
"main.dart.js": "9fe78e97516b2a92fe36b3976c6d5442",
"icons/Icon-maskable-512.png": "4b7e8e9c990e40d967d5e97c9acfa936",
"icons/Icon-512.png": "4b7e8e9c990e40d967d5e97c9acfa936",
"icons/Icon-192.png": "b4133ef000385eab76f12a19025fda48",
"icons/Icon-maskable-192.png": "b4133ef000385eab76f12a19025fda48",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"version.json": "11d54d145d64b5ebed20b7e55d661ffc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
