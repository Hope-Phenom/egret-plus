namespace egret_plus {
    /**
     * 异步sleep功能
     * @param time sleep时间，毫秒计
     * @param thisObj this对象
     */
    export function sleep(time: number, thisObj: any): Promise<{}> {
        return new Promise(resolve => egret.setTimeout(resolve, thisObj, time))
    }
}