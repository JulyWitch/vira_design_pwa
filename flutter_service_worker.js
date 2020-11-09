'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/Anton-Regular.ttf": "10c6818802ed96f9d6976633ae148c37",
"assets/assets/fonts/McLaren-Regular.ttf": "a3d5a6bb00cccb4399652973d0ea3a40",
"assets/assets/fonts/Oswald-VariableFont_wght.ttf": "a6e5446a7c5789aabc9b37eaaf72134d",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Itim-Regular.ttf": "ea9ed37af3e95dd1629a9581ceb2c4ed",
"assets/assets/fonts/Lato-Black.ttf": "e631d2735799aa943d93d301abf423d2",
"assets/assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf": "fd0ed435ec08aae4c87867bf3068762d",
"assets/assets/fonts/Lato-Italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/assets/fonts/JosefinSans-VariableFont_wght.ttf": "324a513cb9c683dc30777bdbccf59995",
"assets/assets/fonts/Lato-BoldItalic.ttf": "f98d18040a766b7bc4884b8fcc154550",
"assets/assets/avatars/43.jpg": "50576efd0fd16e48c80d6744372bd6c4",
"assets/assets/avatars/16_002.jpg": "2d6d19aa420764f4d4343aa57a81ab0c",
"assets/assets/avatars/19_002.jpg": "885eb8b494ed32c5d00911aaf8752db3",
"assets/assets/avatars/47.jpg": "64a02404402db81031b9b6675d4b52ea",
"assets/assets/avatars/44.jpg": "ee7f23d6cb6677f1dcc534bc67752105",
"assets/assets/avatars/18.jpg": "68b158d3d8866abd40c97bffc18a1305",
"assets/assets/avatars/45.jpg": "571ecd9ced495b9fb153f21d29890400",
"assets/assets/avatars/14_002.jpg": "622fb0328791a22b5e83c0a160d1b706",
"assets/assets/avatars/40.jpg": "5eb6f0d0103522ba525a9971399a1899",
"assets/assets/avatars/15_002.jpg": "929d03883784eaf1cce5a1879d8bdd2a",
"assets/assets/avatars/47_002.jpg": "0c0824c5f55a1dc906357f5aa8530856",
"assets/assets/avatars/19.jpg": "43e83a817edbfc3138cb1a4f91f1b472",
"assets/assets/avatars/41_002.jpg": "0f4246ee8b6dd185af6607d249a29efe",
"assets/assets/avatars/15.jpg": "7432224f7c72d894b11c94099784aa7f",
"assets/assets/avatars/13.jpg": "de73a3703000dd7c2ae3f9e7acbfce6b",
"assets/assets/avatars/1_002.jpg": "9e0ba91725de490418b2894e599a2c4b",
"assets/assets/avatars/49.jpg": "51a3470387263a30e35e4414eef1f7d4",
"assets/assets/avatars/1.jpg": "66e813ce0fb9781d87bebcb824729be5",
"assets/assets/avatars/49_002.jpg": "2aacb547df9050337b76b22996568e1f",
"assets/assets/avatars/17_002.jpg": "e89022feb98cc08cf4886a2297f322ee",
"assets/assets/avatars/41.jpg": "dc57fdce68245e7a68f9f728b57667cd",
"assets/assets/avatars/12.jpg": "d9b53079b7026c5b252175846e32a072",
"assets/assets/avatars/42.jpg": "d010af71871263823e98898dc282c3cf",
"assets/assets/avatars/11_002.jpg": "b779eca12905edb571bcf6ddaad660b5",
"assets/assets/avatars/43_002.jpg": "beee744f182e4d5d2f554218a1fec48d",
"assets/assets/avatars/42_002.jpg": "7f547c22dc60b35d73439eb62fbe4d07",
"assets/assets/avatars/46.jpg": "76e496fa87e94ce407626ed44f837bac",
"assets/assets/avatars/4_003.jpg": "da1fe3788c71ba23abf5b87d16d3e665",
"assets/assets/avatars/40_002.jpg": "b6f033741a7ea50bf2197a8b2638100a",
"assets/assets/avatars/17.jpg": "6339180afd928ccb36620e08d10918d5",
"assets/assets/avatars/16.jpg": "86892064b4628fb9f8412abdd9553aae",
"assets/assets/avatars/13_002.jpg": "9ac20b1630d2fd8cee2e8f710bd383ad",
"assets/assets/avatars/4_002.jpg": "0f009026daa99305e0fb7335717a1594",
"assets/assets/avatars/46_002.jpg": "1e163b7d22fd7d1ea5a759f14e291907",
"assets/assets/avatars/10.jpg": "183bbe6f05cddf589a7b0afac3886683",
"assets/assets/avatars/45_002.jpg": "a19e276ff9e7692765eabe662aed6210",
"assets/assets/avatars/1_003.jpg": "4d3f0a62bbe0eabd41f91651ea8c0832",
"assets/assets/avatars/10_002.jpg": "b72daec663e111095b18ccbf11aeabb8",
"assets/assets/avatars/11.jpg": "18d6b9fb82b31f627528a1febd56b0ad",
"assets/assets/avatars/128.png": "803dd93aec70fd8436c194ae97f87173",
"assets/assets/avatars/12_002.jpg": "17ee652e67eadb01656fab01555d132c",
"assets/assets/avatars/48.jpg": "8f5913fa361d9542860671fca63bb2a0",
"assets/assets/avatars/4.jpg": "d9127c30eae6da0a2f5dfcc0c0a5dd37",
"assets/assets/avatars/18_002.jpg": "bc7c899e8b5a9f81f26858fe5e9c5f34",
"assets/assets/avatars/48_002.jpg": "a7a84d5e4d090723fe7ab59e45d387cd",
"assets/assets/avatars/14.jpg": "b059ddbbd625a452e07fc2b6c3e931a4",
"assets/assets/avatars/44_002.jpg": "a09297f27805fa21360c2da06d4293f7",
"assets/FontManifest.json": "af20673c2c85000b130beb2a64f630a6",
"assets/online_assets/book_noun_001_01679.jpg": "3a83b29286d6a3a6613ba007e76278d2",
"assets/online_assets/effect-of-coronavirus-on-food.jpg": "6b0c2fef827779562cac1a5cfd3f90b8",
"assets/online_assets/food-product-png-1.png": "4d988ca009d1929947185d5bbac845fe",
"assets/online_assets/587277-515x515-1.jpg": "dfe24d42b2c423723fa9f066cafb9183",
"assets/AssetManifest.json": "1d1459bded721d4603accc698e93158c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/error_without_loop.flr": "35b9b6c9a71063406bdac60d7b3d53e8",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/error.flr": "87d83833748ad4425a01986f2821a75b",
"assets/NOTICES": "43520aa7f3414b26c337dff21e62e670",
"main.dart.js": "4dd920fae18865dfd303bd713dfbf3bd",
"manifest.json": "82e05e44382ed223aa444d43122063cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "8f53d787d0908b4ae7e7d21d4c44e0ab",
".git/refs/remotes/origin/master": "4e1187d8b727e2e6a5fc2c842b81bb53",
".git/refs/heads/master": "4e1187d8b727e2e6a5fc2c842b81bb53",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/96/e38dee10d566149cf0b3794dffdd5b27823000": "74364b8a14c7ea16c3c3f29c9dede7dc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e0/baff646e52e4d990d2671f307e1525a276653f": "eaf79f910da0f27664712f64a47896df",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/71/68aa1de695e33697b52f95b1706bf6b54da197": "3eb3ff6ccb4830257a1a1dc86027b50a",
".git/objects/12/161058f59098f178194620925d7fca1cff6247": "cc976b41a66371d56a14bf6ea5f98d6d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/config": "ca8e089b0fad3ef8ae3e4647f25f78fe",
".git/logs/refs/remotes/origin/master": "ca770d39ca923051935c8eac50e064e2",
".git/logs/refs/heads/master": "32e7bb6efb2518b49b93f37f9de22f8b",
".git/logs/HEAD": "32e7bb6efb2518b49b93f37f9de22f8b",
".git/COMMIT_EDITMSG": "60e70f0db58ebf52f9f07eb927891238",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"version.json": "5fe536a737c48387be1aa79bb1afa6d7",
"index.html": "9436d40cc0e4a1444336065be1c836a1",
"/": "9436d40cc0e4a1444336065be1c836a1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
