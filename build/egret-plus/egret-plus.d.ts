declare namespace egret_plus.StateMachine {
    /**
     * 状态机的状态
     */
    class State {
        /**
         * 进入状态时调用
         */
        onEnterState(): void;
        /**
         * 脱离状态时调用
         */
        onExitState(): void;
    }
    /**
     * 改变当前的状态
     * @param state 状态
     */
    function changeState(state: State): void;
}
declare namespace egret_plus {
    /**
     * 创建龙骨动画，有缓存方法
     * @param resName 龙骨资源组名称
     * @param armatureName 动画名称，默认为数据中的第一个(可选)
     */
    function createDragonBones(resName: string, armatureName?: string): dragonBones.EgretArmatureDisplay;
    /**
     * 销毁龙骨动画，释放资源
     * @param db 龙骨动画对象
     */
    function clearDBAnimation(db: dragonBones.EgretArmatureDisplay): void;
}
declare namespace egret_plus {
    /**
     * 按照资源名创建MC动画
     * @param name MC资源组名称
     * @param movieClipName 播放的剪辑名称(可选)
     */
    function createMC(name: string, movieClipName?: string): egret.MovieClip;
}
declare namespace egret_plus {
    /**
     * 根据给定的条件，自动编码egret.ITextElement数组
     * @param desc 要进行编码的文本
     * @param condition 编码条件，支持string和RegExp正则表达式
     * @param style 符合条件时的特殊Style
     */
    function encodeTextElement(desc: string, condition: string | RegExp, style: egret.ITextStyle): egret.ITextElement[];
}
/**
* @Screenshot 截屏功能相关
*/
declare namespace egret_plus.Screenshot {
    /**
     * 将一个egret.DisplayObject对象导出为egret.RenderTexture纹理.
     * @param item 显示对象
     * @returns egret.RenderTexture 截图的纹理
     */
    function takeShot(item: egret.DisplayObject): egret.RenderTexture;
    /**
     * 将一个egret.DisplayObject对象导出为egret.RenderTexture纹理并保存为文件在浏览器默认下载目录中.
     * @param item 显示对象
     */
    function takeShotAndSaveFile(item: egret.DisplayObject, fileName: string): void;
    /**
     * 将一个egret.DisplayObject对象进行base64转码并返回对象,可选是否直接存入localStorage.
     * @param item 显示对象
     * @param needSave 是否直接存入localStorage，默认否
     * @param itemName 存入localStorage时的名称
     * @returns {string} Base64编码后的图片
     */
    function takeShotAndSaveLocalStorage(item: egret.DisplayObject, needSave: boolean, itemName: string): string;
    /**
     * 用从Base64中读取的纹理t填充一个egret.Bitmap对象.
     * @param loadByName 为true时，传入name直接从localStorage读取；否则把传入的字符串按Base64解析出纹理
     * @param nameOrBase64 按照loadByName传入的字符串
     * @param bitmap 存放Bitmap的容器
     */
    function loadImgFromBase64(loadByName: boolean, nameOrBase64: string, bitmap: egret.Bitmap): void;
}
declare namespace egret_plus {
    /**
     * 异步sleep功能
     * @param time sleep时间，毫秒计
     * @param thisObj this对象
     */
    function sleep(time: number, thisObj: any): Promise<{}>;
}
/**
 * Egret-Plus 拓展功能库
 * @author Hope.Phenom
 * @version 2
 */
declare namespace egret_plus {
}
/**
 * @StateMachine EasyEgret 状态机功能，使用时应先创建继承自App.StateMachine.State的状态对象
 */
declare namespace egret_plus.StateMachine {
}
/**
 * EasyEgret 自定义事件功能
 * @CustomEvent
 */
declare namespace egret_plus.CustomEvent {
}
interface Array<T> {
    /**
     * 在一个数组中随机获取一个元素
     */
    random_get(): T;
    /**
     * 将该数组随机打乱
     */
    randomSort(): T[];
    /**
     * 从数组中随机获取一个元素，并将其删除
     */
    random_get_and_delete(): T;
    /**
     * 删除数组中的某个对象
     * @param item 要删除的对象
     */
    delete(item: T): void;
    /**
     * 随机打乱数组多次
     * @param times 打乱的次数
     */
    randomSortTimes(times: number): T[];
    /**
     * 合并多个数组
     * @param arr 要合并的数组
     * @returns {T[]} 合并出来的数组
     */
    merge<T>(...arr: T[][]): T[];
    /**
     * 从该数组里随机获取一个元素，采用泛型支持各种类型
     * @param difference 打乱次序（一般而言越大随机度越高）
     * @returns 返回一个包含get方法和打乱数组的对象，通过调用对象的get方法就可以获得不同的元素
     */
    getDiffItem<T>(difference: number): RandomGetter<T>;
}
/**
 * 泛型随机获取器
 */
interface RandomGetter<T> {
    /**
     * 获取随机对象
     */
    get: () => T;
    /**
     * 存储所有可获得对象的数组
     */
    arr: T[];
}
interface Math {
    /**
     * 获取一个区间的随机数
     * @param from 最小值
     * @param end 最大值
     */
    limit(from: number, end: number): void;
    /**
     * 获取一个区间的随机数(整数)
     * @param from 最小值
     * @param end 最大值
     */
    limitInteger(from: number, end: number): number;
    /**
     * 随机获取符号（1或者-1）
     */
    plus_minus(): 1 | -1;
    /**
     * 转换时间格式
     * @param type 转换类型，参照MathTimeType枚举
     * @param value 秒数
     */
    convertTime(type: MathTimeType, value: number): string;
    /**
     * 获取不同的数字，只要是通过这里创造的同一个对象，每次get必定返回不一样的数字
     * @param min 最小值（包括）
     * @param max 最大值（包括）
     * @param difference 打乱次序（一般而言越大随机度越高）
     * @returns 返回一个包含get方法和打乱数组的对象，通过调用对象的get方法就可以获得不同的数字
     */
    getDiffNumber(min: number, max: number, difference: number): RandomGetter<number>;
    /**
     * 获取一个指定起始点的连续的数字数组
     * @param start 起始点（包括）
     * @param end 终止点（包括）
     */
    getConsecutiveNumArr(start: number, end: number): number[];
    /**
     * 获取一定范围内，能整除某个数字的数组
     * @param target 目标数字
     * @param start 范围起始（包含）
     * @param end 结束范围（包含）
     */
    getExactDivisionNumArr(target: number, start: number, end: number): number[];
    /**
     * 获取一定范围内，能被某个数字整除的数组
     * @param target 目标数字
     * @param start 范围起始（包含）
     * @param end 结束范围（包含）
     */
    getBeExactDivisionNumArr(target: number, start: number, end: number): number[];
}
declare enum MathTimeType {
    /**
     * X分X秒 格式
     */
    Chinese = 0,
    /**
     * 00:00 格式
     */
    Clock = 1,
}
