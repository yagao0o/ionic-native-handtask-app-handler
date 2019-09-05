import { IonicNativePlugin } from '@ionic-native/core';
export declare class HandtaskApp {
    name: string;
    packageName: string;
    activity: string;
    company: string;
    iconUrl: string;
    versionName: string;
    versionCode: string;
}
/**
 * @name Handtask App Handler
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { HandtaskAppHandler } from '@ionic-native/handtask-app-handler';
 *
 *
 * constructor(private handtaskAppHandler: HandtaskAppHandler) { }
 *
 * ...
 *
 *
 * this.handtaskAppHandler.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class HandtaskAppHandler extends IonicNativePlugin {
    /**
     * 获取二级应用列表
     * @param packageName {string} 当前应用包名
     * @param isOut {boolean} 是否外网环境
     * @return {Promise<HandtaskApp[]>} 返回二级应用列表
     */
    getApps(packageName: string, isOut: boolean): Promise<HandtaskApp[]>;
    /**
     * 启动app
     * @param packageName {string} 启动应用包名
     * @param activity {string} 启动应用Activity
     * @param param {string} 参数
     * @param isOut {boolean} 是否外网环境
     * @return {Promise<HandtaskApp[]>} 返回二级应用列表
     */
    startApp(packageName: string, activity: string, param: string, isOut: boolean): Promise<any>;
}
