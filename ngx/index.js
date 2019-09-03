var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HandtaskApp = /** @class */ (function () {
    function HandtaskApp() {
    }
    return HandtaskApp;
}());
export { HandtaskApp };
var HandtaskAppHandler = /** @class */ (function (_super) {
    __extends(HandtaskAppHandler, _super);
    function HandtaskAppHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandtaskAppHandler.prototype.getApps = function (packageName) { return cordova(this, "getApps", {}, arguments); };
    /**
     * 启动app
     * @param packageName {string} 启动应用包名
     * @param activity {string} 启动应用Activity
     * @param param {string} 参数
     * @return {Promise<HandtaskApp[]>} 返回二级应用列表
     */
    HandtaskAppHandler.prototype.startApp = function (packageName, activity, param) {
        return;
    };
    HandtaskAppHandler.pluginName = "HandtaskAppHandler";
    HandtaskAppHandler.plugin = "cordova.handtask.app.handle";
    HandtaskAppHandler.pluginRef = "HandtaskAppHandler";
    HandtaskAppHandler.repo = "https://github.com/yagao0o/handtask-app-handler.git";
    HandtaskAppHandler.install = "";
    HandtaskAppHandler.installVariables = [];
    HandtaskAppHandler.platforms = ["Android"];
    HandtaskAppHandler = __decorate([
        Injectable()
    ], HandtaskAppHandler);
    return HandtaskAppHandler;
}(IonicNativePlugin));
export { HandtaskAppHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hhbmR0YXNrLWFwcC1oYW5kbGVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7OztzQkFaNUg7Ozs7SUF1RHdDLHNDQUFpQjs7OztJQVF2RCxvQ0FBTyxhQUFDLFdBQW1CO0lBSTNCOzs7Ozs7T0FNRztJQUNILHFDQUFRLEdBQVIsVUFBUyxXQUFtQixFQUFFLFFBQWdCLEVBQUUsS0FBYTtRQUMzRCxPQUFPO0lBQ1QsQ0FBQzs7Ozs7Ozs7SUFyQlUsa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtPQUNBLGtCQUFrQjs2QkF2RC9CO0VBdUR3QyxpQkFBaUI7U0FBNUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBIYW5kdGFza0FwcCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFja2FnZU5hbWU6IHN0cmluZztcbiAgYWN0aXZpdHk6IHN0cmluZztcbiAgY29tcGFueTogc3RyaW5nO1xuICBpY29uVXJsOiBzdHJpbmc7XG4gIHZlcnNpb25OYW1lOiBzdHJpbmc7XG4gIHZlcnNpb25Db2RlOiBzdHJpbmc7XG59XG4vKipcbiAqIEBuYW1lIEhhbmR0YXNrIEFwcCBIYW5kbGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBIYW5kdGFza0FwcEhhbmRsZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2hhbmR0YXNrLWFwcC1oYW5kbGVyJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBoYW5kdGFza0FwcEhhbmRsZXI6IEhhbmR0YXNrQXBwSGFuZGxlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuaGFuZHRhc2tBcHBIYW5kbGVyLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSGFuZHRhc2tBcHBIYW5kbGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS5oYW5kdGFzay5hcHAuaGFuZGxlJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ0hhbmR0YXNrQXBwSGFuZGxlcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS95YWdhbzBvL2hhbmR0YXNrLWFwcC1oYW5kbGVyLmdpdCcsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGFuZHRhc2tBcHBIYW5kbGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiDojrflj5bkuoznuqflupTnlKjliJfooahcbiAgICogQHBhcmFtIHBhY2thZ2VOYW1lIHtzdHJpbmd9IOW9k+WJjeW6lOeUqOWMheWQjVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEhhbmR0YXNrQXBwW10+fSDov5Tlm57kuoznuqflupTnlKjliJfooahcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwcyhwYWNrYWdlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxIYW5kdGFza0FwcFtdPiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiDlkK/liqhhcHBcbiAgICogQHBhcmFtIHBhY2thZ2VOYW1lIHtzdHJpbmd9IOWQr+WKqOW6lOeUqOWMheWQjVxuICAgKiBAcGFyYW0gYWN0aXZpdHkge3N0cmluZ30g5ZCv5Yqo5bqU55SoQWN0aXZpdHlcbiAgICogQHBhcmFtIHBhcmFtIHtzdHJpbmd9IOWPguaVsFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEhhbmR0YXNrQXBwW10+fSDov5Tlm57kuoznuqflupTnlKjliJfooahcbiAgICovXG4gIHN0YXJ0QXBwKHBhY2thZ2VOYW1lOiBzdHJpbmcsIGFjdGl2aXR5OiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=