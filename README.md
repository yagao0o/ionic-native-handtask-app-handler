# ionic-native-handtask-app-handler

    cordova plugin add https://github.com/yagao0o/handtask-app-handler
    npm install github:yagao0o/ionic-native-handtask-app-handler

## Ionic包用法


```Typescript
import { HandtaskAppHandler } from '@ionic-native/handtask-app-handler/ngx';

constructor(private handler: HandtaskAppHandler) { }
// getApps
const apps = await this.handler.getApps('com.inspur.handtask', true);
apps.forEach(app => {
  console.log(app);
  console.log(app.name);
  console.log(app.packageName);
  console.log(app.activity);
});

// startApp
const result = await this.handler.startApp('com.inspur.handtask', 'com.inspur.combined.login.LoginActivity', 'foo1=bar1&foo2=bar2', true);
console.log(result.success);
```