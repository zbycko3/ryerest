window.QGSettings = {
   "origin": "https://domodi.pl",
   "useLegacyAPI": true,
   "vapidPublicKey": "BCcSPwieopx97MjYl5VVC--sGf-LghOB5jAruHYoQF-I2XZLFoBSJ6_GRWRHl6ghvltrGEE7_0fFqG2Tds-mC1A",
   "inWebEnabled": true,
   "debug": false,
   "qgendpoint": "https://.aiqua.io/notify.html",
   "appId": "6105f8c85f2a3badc914",
   "push": {
      "useNotifyEndpoint": false,
      "restrictOrigin": false,
      "requestSelf": false,
      "delay": 0,
      "fakePrompt": true,
      "secondsBetweenPrompts": 3600,
      "prompt": {
         "buttonColor": "#e31d1d",
         "isMiddle": false,
         "laterText": "Nie teraz",
         "message": "Otrzymuj powiadomienia, a nie przegapisz nowych trend\u00f3w, rabat\u00f3w i wyprzeda\u017cy!",
         "overlay": false,
         "subscribeText": "Zapisz mnie",
         "title": "\u2764\ufe0f B\u0105d\u017a z mod\u0105 na bie\u017c\u0105co. ",
         "icon": "https://lb0.dstatic.pl/banners/510a7e81-42fa-463b-afe3-42e2d9967994.jpg"
      },
      "onSubscribedPopup": {
         "enabled": false,
         "htmlBody": "",
         "showOverlay": true
      },
      "allowedPushDomains": null
   },
   "events": true
};
if(window.qg && window.qg.queue) {
    window.qg.queue.unshift(('init', QGSettings));
}
!function(q,g,r,a,p,h,js){
    if(!q.qg){
        js=q.qg=function() {
            js.callmethod ? js.callmethod.call(js, arguments) : js.queue.push(arguments);
            js.queue = [];
        }
    }
    if(q.qg.initialized){return;}
    window.qg.queue.unshift(['init',window.QGSettings])
    p=g.createElement(r);
    p.async=!0;
    p.src=a;
    h=g.getElementsByTagName(r)[0];
    h.parentNode.insertBefore(p,h);
    q.qg.initialized = true;
}(window,document,'script','//cdn.qgraph.io/v3/r/aiqua.js');

setTimeout(function() {
  if (!('serviceWorker' in navigator)) {
    return;
  }
  if (Notification.permission != 'granted') {
    return;
  }
  navigator.serviceWorker.ready.then(function(reg) {
    reg.pushManager.subscribe({ userVisibleOnly: true }).then(function(subscription) {}).catch(function(err) {
      navigator.serviceWorker.ready.then(function(reg) {
        reg.pushManager.getSubscription().then(function(subscription) { subscription.unsubscribe() }).then(function() {
          window.qgPushSubscribeCalled = false;
          _qg.subscribe();
        })
      })
    })
  });
}, 3000)