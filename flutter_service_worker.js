'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0106245a196cd83c2e5017719d5a2a80",
"index.html": "2e4e5ccc2fe73507c47dee43c46a38eb",
"/": "2e4e5ccc2fe73507c47dee43c46a38eb",
"main.dart.js": "144246551a9d3a5bf2578cef6d8c5df0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "850a0f32f462d28bca42d40d8d8a1bc6",
".git/config": "4df65c860a90c7026f153c8335ca7916",
".git/objects/0d/e69d180006aee789b2a4fc6f994d45287628f6": "ff6f2163f11fd3f5339a5e62f4afa703",
".git/objects/95/28e4c5e52618973e11724ff56c3b4a9e038b5a": "3b6e3c196a598b34faec6021e936f6f9",
".git/objects/0c/040a66f0cedf802a30080a52c1b23c52ad4f7f": "9e283ab20d324433f51d011b5be9d5e2",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/299ab76acc1ace48ff1369de3d0a1a924d58c8": "bd351fbcde4a27b3852d8c4044ca8337",
".git/objects/3d/bb0bb05e74d3285da2bede7c89cd52b40a64b6": "1e5e72eb53ad8b3cb0f8d57187c80432",
".git/objects/9d/0dd9578bdb25bb87e438bf67ea31e2385bb794": "6ee377cad839b7b983040cb850ef882c",
".git/objects/02/730e0b9adf5cbdc332e63cf48da5ae0b98d181": "199488593e87ba36f7e93b8cb24d7d02",
".git/objects/b2/440305294bcdf4de7f47bb45271860a253a8db": "63ff98419b675cf153717b96ad181a5d",
".git/objects/da/304ebebd1c165965898a8a707c5cf270ba42a3": "897161223ef159c7c2159a490820351d",
".git/objects/a2/788adcee34b430afe86fdc652cdfeed6c3acee": "3f8f99a7e33563e349d42b90ef239677",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/649c435f611c4be37a22ca3d70d9aac92c6f63": "8d8e362a3b3b351ba0bb614bfab18ef6",
".git/objects/c8/a43898784454e61842838655ba14a0eb40898a": "c1fa8d6133c9c689e84c8934aa0c28d0",
".git/objects/4e/75e192fa57026dc68c57a4c6392352a5fc9c58": "32222d3afbda88a93ae75d758588482e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/55689ea449eb66cb2f6c27b2a524ef7392053f": "867342809f4b27c2ae7728cd2d9c4261",
".git/objects/7c/547343f2f63ae9257f1ad485e38de417bc7da1": "45946713b49163523244b0ee03763111",
".git/objects/80/58e00a7c52ade5121f7afaab253f8468d90464": "8a8d2a5cfaa5aa1c15c08b8b8ef0fc9e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e744b64fefd844ea69b1598c270e1428beb043": "16499b758b0f5b85856b1aade13447ae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/8f980f27da883d571adc977a446b75fe493211": "6bb68d1dc5266f50c0c14bf0de1d2c4f",
".git/objects/9a/933c48ede115776a1fda368fb922823ee8b895": "4733ff91f90daaa36f932ab20c9425e1",
".git/objects/91/42ab3884c8fa4a9905c9ad38796275845f1672": "25fcbaa1dd734f8c9e3c37dc8a030c83",
".git/objects/6c/fe62fd27d271e065f76cd271967d6ff35d3e31": "73a1579f498c544c2414533aba4aaf1a",
".git/objects/64/e8fa1d866a1aa13b758f037af9c3d3c7cf2ce6": "d6f6ed741f85877b27765ff04baffbf1",
".git/objects/90/7884da4da97f81032a1da53075933d631617c0": "a5e40261b279efab786d91a00b47f2c7",
".git/objects/b8/bd4f3d7387465f6533184f5ae54b78f3a9ce2d": "792817d84691e415ca02f7922fdf66ed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/6e732c140f42239662c9ba33ac0add084edfe9": "0312625d5e637f3d8d26229eab3885f2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/339bd005ba43b98fc1133bd9375af13da0a588": "601279874c57cee92a3943e93fba1a29",
".git/objects/e1/042a464478fd9ec3d08e5e7047710702025cb1": "e8d585dfc05ba85605b7d01faa649b2b",
".git/objects/f6/8cdc3755995e0193867dd3b1959df75c20ff21": "8b94573f2582c50c7455c1165c5e60fe",
".git/objects/e9/5b1682f072d83e550533d1a98d137e693dfbeb": "67e0741cd1268cd9ad3aadc3060b0aae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/62482059ef5633995237ace89c04cdbc973d41": "427e416988f2274a6fec6cb81e64292b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/68f067c700e2270c6b4be4d99e8509e86fab16": "ac1ef11cda87e93d6359768a4d627a90",
".git/objects/12/e8e6d42fc474b7965ed10e7191a78703020bc6": "a3cd8024073c6396f0e1c2da9077e4b3",
".git/objects/1c/3fd66c8254fa4cf3b17798389d00b84752b170": "aa15832dbbb3bab8fe390b7b19ddc104",
".git/objects/49/9291098b2238a6ac888f94bc8c7b1e3a61ee17": "fb473c8b9c18f7c8b3807590934fb76e",
".git/objects/2b/67bd580c49ea26a406e5c75381cf5b260bc2e0": "1a3d62888d630b8f1dadc60639ac0927",
".git/objects/78/818cbb5aebc13824ea80697a91973c452487ef": "eb745ed571ad925df79cf2dc584689cf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06476220cb643f8c72c3fc29d0285987",
".git/logs/refs/heads/main": "2cd6e4c84edb09b27a362cb4e1fb9b42",
".git/logs/refs/remotes/origin/main": "15f31cad003977eaf10066d575d07e1b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "fdc0c09c76fa96a7d830a387d27e80f9",
".git/refs/remotes/origin/main": "fdc0c09c76fa96a7d830a387d27e80f9",
".git/index": "d602cb8afce992f122dc14d317d7ce5f",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "b095088825eb6a0313ae9b67ef727282",
".git/FETCH_HEAD": "ed57ffc1cf88b7243920485e0c08e0af",
".git/sourcetreeconfig": "64891395fd06fdf0f8993c80704fe3a7",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "ee47f1d3bda69bbec8b08f25c6ed36c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
