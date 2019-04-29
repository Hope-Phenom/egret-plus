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
/**
 * Egret-Plus 拓展功能库
 * @author Hope.Phenom
 * @version 2
 */
declare namespace egret_plus {
}
/**
 * @Extra EasyEgret 额外功能库
 */
declare namespace egret_plus.Extra {
}
/**
 * @Display EasyEgret Display显示功能库
 */
declare namespace egret_plus.Display {
}
/**
 * @Math EasyEgret 数学功能库
 */
declare namespace egret_plus.Maths {
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
     * @param arr 数组
     * @returns {any} 随机出来的结果
     */
    random_get(): T;
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
}
