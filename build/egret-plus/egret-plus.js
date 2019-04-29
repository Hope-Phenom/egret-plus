var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var egret_plus;
(function (egret_plus) {
    var StateMachine;
    (function (StateMachine) {
        /**
         * 状态机的状态
         */
        var State = (function () {
            function State() {
            }
            /**
             * 进入状态时调用
             */
            State.prototype.onEnterState = function () { };
            ;
            /**
             * 脱离状态时调用
             */
            State.prototype.onExitState = function () { };
            ;
            return State;
        }());
        StateMachine.State = State;
        __reflect(State.prototype, "egret_plus.StateMachine.State");
        var _state = null;
        /**
         * 改变当前的状态
         * @param state 状态
         */
        function changeState(state) {
            if (_state) {
                _state.onExitState();
            }
            _state = state;
            if (_state) {
                state.onEnterState();
            }
        }
        StateMachine.changeState = changeState;
        ;
    })(StateMachine = egret_plus.StateMachine || (egret_plus.StateMachine = {}));
})(egret_plus || (egret_plus = {}));
var egret_plus;
(function (egret_plus) {
    /**
     * 创建龙骨动画，有缓存方法
     * @param resName 龙骨资源组名称
     * @param armatureName 动画名称，默认为数据中的第一个(可选)
     */
    function createDragonBones(resName, armatureName) {
        var dragonBonesDatas = RES.getRes(resName + "_ske_json");
        var textureData = RES.getRes(resName + "_tex_json");
        var texture = RES.getRes(resName + "_tex_png");
        try {
            var egretFactory = dragonBones.EgretFactory.factory;
            egretFactory.parseDragonBonesData(dragonBonesDatas);
            egretFactory.parseTextureAtlasData(textureData, texture);
            var armatureDisplay = egretFactory.buildArmatureDisplay(armatureName ? armatureName : dragonBonesDatas.armature[0].name);
            return armatureDisplay;
        }
        catch (e) {
            egret.warn('create dragonBones Res is null');
            alert(resName + " \u52A8\u753B\u64AD\u653E\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u6280\u672F\u4EBA\u5458");
            return;
        }
    }
    egret_plus.createDragonBones = createDragonBones;
    /**
     * 销毁龙骨动画，释放资源
     * @param db 龙骨动画对象
     */
    function clearDBAnimation(db) {
        if (!db)
            return;
        db.dbClear();
        db.dispose();
        db.parent && db.parent.removeChild(db);
    }
    egret_plus.clearDBAnimation = clearDBAnimation;
})(egret_plus || (egret_plus = {}));
var egret_plus;
(function (egret_plus) {
    /**
     * 按照资源名创建MC动画
     * @param name MC资源组名称
     * @param movieClipName 播放的剪辑名称(可选)
     */
    function createMC(name, movieClipName) {
        var data = RES.getRes(name + "_mc_json");
        var txtr = RES.getRes(name + "_tex_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData(movieClipName));
    }
    egret_plus.createMC = createMC;
})(egret_plus || (egret_plus = {}));
Array.prototype.random_get = function () {
    var index = Math.floor(Math.random() * this.length);
    return this[index];
};
Math.limit = function (from, end) {
    from = Math.min(from, end);
    end = Math.max(from, end);
    var range = end - from;
    return from + Math.random() * range;
};
Math.limitInteger = function ($from, $end) {
    return Math.round(this.limit($from, $end));
};
