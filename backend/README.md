# Angular-PWA

### Backend code for the Push Notifications example

To start;
```bash
npm i
```


To get started, install `web-push` globally:

```bash
npm install web-push -g
web-push generate-vapid-keys --json

This will produce a JSON output similar to this:
{
  "publicKey": "ByP9KTS5K7ZLBx-_x3qf5F4_hf2WrL2qEa0qKb-aCJbcxEvyn62GDTy0K7TfmOKSPqp8vQF0DaG8hpSBknziEFo",
  "privateKey": "fGcS9j-KgY29NM7myQXXoGcO-fGcSsA_fG0DaG8h"
}
```


To run the server:
```bash
node src/server.js
```


To publish new message:
```bash
node src/push.js
```