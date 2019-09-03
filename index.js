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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HandtaskApp = /** @class */ (function () {
    function HandtaskApp() {
    }
    return HandtaskApp;
}());
export { HandtaskApp };
var HandtaskAppHandlerOriginal = /** @class */ (function (_super) {
    __extends(HandtaskAppHandlerOriginal, _super);
    function HandtaskAppHandlerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandtaskAppHandlerOriginal.prototype.getApps = function (packageName) { return cordova(this, "getApps", {}, arguments); };
    /**
     * 启动app
     * @param packageName {string} 启动应用包名
     * @param activity {string} 启动应用Activity
     * @param param {string} 参数
     * @return {Promise<HandtaskApp[]>} 返回二级应用列表
     */
    HandtaskAppHandlerOriginal.prototype.startApp = function (packageName, activity, param) {
        return;
    };
    HandtaskAppHandlerOriginal.pluginName = "HandtaskAppHandler";
    HandtaskAppHandlerOriginal.plugin = "cordova.handtask.app.handle";
    HandtaskAppHandlerOriginal.pluginRef = "HandtaskAppHandler";
    HandtaskAppHandlerOriginal.repo = "https://github.com/yagao0o/handtask-app-handler.git";
    HandtaskAppHandlerOriginal.install = "";
    HandtaskAppHandlerOriginal.installVariables = [];
    HandtaskAppHandlerOriginal.platforms = ["Android"];
    return HandtaskAppHandlerOriginal;
}(IonicNativePlugin));
var HandtaskAppHandler = new HandtaskAppHandlerOriginal();
export { HandtaskAppHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hhbmR0YXNrLWFwcC1oYW5kbGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOzs7O3NCQVo1SDs7OztJQXVEd0Msc0NBQWlCOzs7O0lBUXZELG9DQUFPLGFBQUMsV0FBbUI7SUFJM0I7Ozs7OztPQU1HO0lBQ0gscUNBQVEsR0FBUixVQUFTLFdBQW1CLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO1FBQzNELE9BQU87SUFDVCxDQUFDOzs7Ozs7Ozs2QkE1RUg7RUF1RHdDLGlCQUFpQjtTQUE1QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEhhbmR0YXNrQXBwIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYWNrYWdlTmFtZTogc3RyaW5nO1xuICBhY3Rpdml0eTogc3RyaW5nO1xuICBjb21wYW55OiBzdHJpbmc7XG4gIGljb25Vcmw6IHN0cmluZztcbiAgdmVyc2lvbk5hbWU6IHN0cmluZztcbiAgdmVyc2lvbkNvZGU6IHN0cmluZztcbn1cbi8qKlxuICogQG5hbWUgSGFuZHRhc2sgQXBwIEhhbmRsZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhhbmR0YXNrQXBwSGFuZGxlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaGFuZHRhc2stYXBwLWhhbmRsZXInO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhbmR0YXNrQXBwSGFuZGxlcjogSGFuZHRhc2tBcHBIYW5kbGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5oYW5kdGFza0FwcEhhbmRsZXIuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdIYW5kdGFza0FwcEhhbmRsZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLmhhbmR0YXNrLmFwcC5oYW5kbGUnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnSGFuZHRhc2tBcHBIYW5kbGVyJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3lhZ2FvMG8vaGFuZHRhc2stYXBwLWhhbmRsZXIuZ2l0JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIYW5kdGFza0FwcEhhbmRsZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIOiOt+WPluS6jOe6p+W6lOeUqOWIl+ihqFxuICAgKiBAcGFyYW0gcGFja2FnZU5hbWUge3N0cmluZ30g5b2T5YmN5bqU55So5YyF5ZCNXG4gICAqIEByZXR1cm4ge1Byb21pc2U8SGFuZHRhc2tBcHBbXT59IOi/lOWbnuS6jOe6p+W6lOeUqOWIl+ihqFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBcHBzKHBhY2thZ2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEhhbmR0YXNrQXBwW10+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIOWQr+WKqGFwcFxuICAgKiBAcGFyYW0gcGFja2FnZU5hbWUge3N0cmluZ30g5ZCv5Yqo5bqU55So5YyF5ZCNXG4gICAqIEBwYXJhbSBhY3Rpdml0eSB7c3RyaW5nfSDlkK/liqjlupTnlKhBY3Rpdml0eVxuICAgKiBAcGFyYW0gcGFyYW0ge3N0cmluZ30g5Y+C5pWwXG4gICAqIEByZXR1cm4ge1Byb21pc2U8SGFuZHRhc2tBcHBbXT59IOi/lOWbnuS6jOe6p+W6lOeUqOWIl+ihqFxuICAgKi9cbiAgc3RhcnRBcHAocGFja2FnZU5hbWU6IHN0cmluZywgYWN0aXZpdHk6IHN0cmluZywgcGFyYW06IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==