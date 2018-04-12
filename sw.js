importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "miyaoka",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.39448daf7e0eb33a24c6.js",
    "revision": "8ca9c5f291ba4e567f623c7e86623c20"
  },
  {
    "url": "/_nuxt/layouts/default.9e8d62b5973f955c7477.js",
    "revision": "26310352cfe70564e6a0c1a7e7d08272"
  },
  {
    "url": "/_nuxt/manifest.d397ac17db8deb5990fb.js",
    "revision": "205646eee0cc1a1d99ba012683773f72"
  },
  {
    "url": "/_nuxt/pages/index.2f9bddace4748df540ba.js",
    "revision": "223a660c986bbd8fda89910632402bcc"
  },
  {
    "url": "/_nuxt/pages/posts/_id.e94001cdb33228bb8333.js",
    "revision": "7eb2d248aa033e57d048fa6dc75acbd3"
  },
  {
    "url": "/_nuxt/vendor.e7bcb9bc997e8ec39016.js",
    "revision": "254ec2bac6a40dd39cb0f7bf073473e2"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

