/* eslint-disable */
export default defineNuxtPlugin(() => {
// @ts-ignore
  window.Air360 = window.Air360 || [], Air360.init = function (e, t) { window.Air360.appid = e, window.Air360.config = t = t || {}; var a = document.createElement("script"); a.type = "text/javascript", a.async = !0, a.src = "https://cdn.air360tracker.net/air360.min.js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(a, n); for (var o = function (e) { return function () { Air360.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }, p = ["addEventProperties", "clearEventProperties", "identify", "removeEventProperty", "setUserProperties", "track", "trackError", "trackPurchase", "optInUserTracking", "optOutUserTracking"], c = 0; c < p.length; c++)Air360[p[c]] = o(p[c]) };
  Air360.init("izxdj2ihcqxarhox");
})
