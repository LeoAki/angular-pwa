const webpush = require("web-push");
const fs = require('fs');

const VAPID = {
  publicKey:
    "BCIXQbt6YBfQWqVgy_MZDOSKQ0SHil7eeq0ldaFAO7wIPYS2AJTOA50RJkbEmfkgFjeOKJzOHm4cUyOMktB6G_M",
  privateKey: "xyy6ZlnDbJjyV1Igh6MbTjkuozKRuqi5h6hwCzoKV6A",
};
webpush.setVapidDetails(
  "mailto:demo@tudomain.pe",
  VAPID.publicKey,
  VAPID.privateKey
);

const payload = JSON.stringify({
  "notification": {
    "title": "¡Nuevo video!",
    "icon": "https://cdn.icon-icons.com/icons2/836/PNG/96/Youtube_icon-icons.com_66802.png",
    "data": {
      "onActionClick": {
        "default": {"operation": "openWindow", "url": "https://www.youtube.com/watch?v=xMtuVP8Mj4o"}
      }
    }
  }
});

function sendNotification(pushSubscription) {
  return webpush
    .sendNotification(
      pushSubscription,
      payload
    )
    .catch((err) => {
      console.log(err);
    });
}

const pushSubscription = JSON.parse(fs.readFileSync("subscription.json"));
sendNotification(pushSubscription);


