﻿if (!self.define) { const e = e => { "require" !== e && (e += ".js"); let s = Promise.resolve(); return a[e] || (s = new Promise(async s => { if ("document" in self) { const a = document.createElement("script"); a.src = e, document.head.appendChild(a), a.onload = s } else importScripts(e), s() })), s.then(() => { if (!a[e]) throw new Error(`Module ${e} didn’t register its module`); return a[e] }) }, s = (s, a) => { Promise.all(s.map(e)).then(e => a(1 === e.length ? e[0] : e)) }, a = { require: Promise.resolve(s) }; self.define = (s, c, n) => { a[s] || (a[s] = Promise.resolve().then(() => { let a = {}; const t = { uri: location.origin + s.slice(1) }; return Promise.all(c.map(s => { switch (s) { case "exports": return a; case "module": return t; default: return e(s) } })).then(e => { const s = n(...e); return a.default || (a.default = s), a }) })) } } define("./sw.js", ["./workbox-c2b5e142"], (function (e) { "use strict"; importScripts(), e.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{ url: "/_next/server/middleware-manifest.json", revision: "4f5ca87a6870c96ad6fb0f65adfdac9b" }, { url: "/_next/static/K_WeyLag3VHh0yFUl4yGO/_buildManifest.js", revision: "ebfb74f0e0f53c6e9590f431fd295f94" }, { url: "/_next/static/K_WeyLag3VHh0yFUl4yGO/_middlewareManifest.js", revision: "fb2823d66b3e778e04a3f681d0d2fb19" }, { url: "/_next/static/K_WeyLag3VHh0yFUl4yGO/_ssgManifest.js", revision: "b6652df95db52feb4daf4eca35380933" }, { url: "/_next/static/chunks/417.fcac8e2fcbd2c97c.js", revision: "9adcb004d8f3afc3ed85890174c859e7" }, { url: "/_next/static/chunks/599.101ee0efb9497c1a.js", revision: "8c6c17f286347628c9529c2631168c04" }, { url: "/_next/static/chunks/framework-ff100329a956f214.js", revision: "fcdacbc767178ca39fae1d152b41e645" }, { url: "/_next/static/chunks/main-8d45e59b20412df6.js", revision: "7f4d57c7b6d773fcb10c8086afb3eb72" }, { url: "/_next/static/chunks/pages/%5B[...index%5D%5D-467a3169bf19be21.js", revision: "a6fc0d34d3a455c57122fcf80800042d" }, { url: "/_next/static/chunks/pages/AccountSummary-ac5c3078f0761326.js", revision: "4b0a5edb34c12bf54eef39e2484bb283" }, { url: "/_next/static/chunks/pages/ArticleDetail-08c20055bcf307af.js", revision: "9c272326d7d180788f4277c0f7a7dfe3" }, { url: "/_next/static/chunks/pages/Contact-371bef10d4850b2a.js", revision: "4219315ae6dbb535cf62ad3b6408d25c" }, { url: "/_next/static/chunks/pages/CourseDetailWildcard-9d2b22e34fc0240e.js", revision: "f25171440dd72ba0c058907230338779" }, { url: "/_next/static/chunks/pages/CourseListing-abb8806459274b83.js", revision: "fff86333e5be593d7a367172d8c79716" }, { url: "/_next/static/chunks/pages/Join-533f5997a7739458.js", revision: "02bc40bd4f517aa66d016dc115d5725b" }, { url: "/_next/static/chunks/pages/ManageAccount-24851f1c82cd2408.js", revision: "c97d557ec27df11d04f8e2ad16780f15" }, { url: "/_next/static/chunks/pages/Master-b48b06f065167870.js", revision: "e91a5f0ade306d94e99e9d4a2425bbb7" }, { url: "/_next/static/chunks/pages/NotFound-ff8f35c013ae88c8.js", revision: "77061aa77f50e530e69554c70f139b7f" }, { url: "/_next/static/chunks/pages/ResetPassword-192fd3c5dac6b1e1.js", revision: "203b15943f1859bf2e901c81932a50b7" }, { url: "/_next/static/chunks/pages/ServerError-a9c20b5608017a5d.js", revision: "7e40443e096ebf5dd2d7a92af47a6860" }, { url: "/_next/static/chunks/pages/StandardContent-7c9abfcee96e2f22.js", revision: "a7995eaa1980b2421c2a5df0939acb1f" }, { url: "/_next/static/chunks/pages/Unauthorised-ef602a64255ac708.js", revision: "58bd5388b469c9c8b6e7803879e82c8c" }, { url: "/_next/static/chunks/pages/_app-29e5919ee6ae98dd.js", revision: "e63f14a70131535c60f0f327a18a2243" }, { url: "/_next/static/chunks/pages/_error-1995526792b513b2.js", revision: "ef4f0cf72a09cf216936987a3c5393e6" }, { url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js", revision: "99442aec5788bccac9b2f0ead2afdd6b" }, { url: "/_next/static/chunks/webpack-800a71b73698a150.js", revision: "873b3ac72c6ebc0575389871dbcb2486" }, { url: "/_next/static/css/2b5d5a7ec39ea4aa.css", revision: "e654dc6a4dcafca87934a48340b56e7c" }, { url: "/_next/static/css/b01e914d8345bd87.css", revision: "e0597705f55b20ea76a690fa046dd819" }, { url: "/favicon.png", revision: "e758f397b6386000884eba2593733c04" }, { url: "/icon-512x512.png", revision: "8d2c26fdb12f0dc4cf959ee419ae6cae" }, { url: "/icon.png", revision: "78e42be8847b7f3ba9b05b2620596524" }, { url: "/manifest.json", revision: "5354cd4c51fbdc7df5a10c96ee59d369" }], { ignoreURLParametersMatching: [] }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({ cacheName: "start-url", plugins: [new e.ExpirationPlugin({ maxEntries: 1, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new e.CacheFirst({ cacheName: "google-fonts", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0 })] }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({ cacheName: "static-font-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 })] }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({ cacheName: "static-image-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({ cacheName: "static-js-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({ cacheName: "static-style-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({ cacheName: "static-data-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), "GET"), e.registerRoute(/\/api\/.*$/i, new e.NetworkFirst({ cacheName: "apis", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), "GET"), e.registerRoute(/.*/i, new e.NetworkFirst({ cacheName: "others", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), "GET") }));
