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
var egret_plus;
(function (egret_plus) {
    /**
     * 根据给定的条件，自动编码egret.ITextElement数组
     * @param desc 要进行编码的文本
     * @param condition 编码条件，支持string和RegExp正则表达式
     * @param style 符合条件时的特殊Style
     */
    function encodeTextElement(desc, condition, style) {
        var arr = [];
        if (condition instanceof RegExp) {
            var exArr = desc.match(condition);
            if (!exArr || exArr.length === 0) {
                arr.push({ text: desc });
                return arr;
            }
            desc = desc.replace(condition, "|");
            var strArr = desc.split("|");
            for (var i = 0; i < strArr.length; i++) {
                var str = strArr[i];
                var ext = exArr[i];
                arr.push({ text: str });
                if (ext) {
                    arr.push({ text: "" + ext, style: style });
                }
            }
        }
        else {
            if (desc.indexOf(condition) === -1 || !desc) {
                arr.push({ text: desc });
                return arr;
            }
            while (desc.indexOf(condition) !== -1) {
                desc = desc.replace(condition, "|");
            }
            var strArr = desc.split("|");
            for (var i = 0; i < strArr.length; i++) {
                var str = strArr[i];
                var ext = (i === strArr.length - 1) ? null : condition;
                arr.push({ text: str });
                if (ext) {
                    arr.push({ text: "" + ext, style: style });
                }
            }
        }
        return arr;
    }
    egret_plus.encodeTextElement = encodeTextElement;
})(egret_plus || (egret_plus = {}));
/**
* @Screenshot 截屏功能相关
*/
var egret_plus;
(function (egret_plus) {
    var Screenshot;
    (function (Screenshot) {
        /**
         * 将一个egret.DisplayObject对象导出为egret.RenderTexture纹理.
         * @param item 显示对象
         * @returns egret.RenderTexture 截图的纹理
         */
        function takeShot(item) {
            var renderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(item);
            return renderTexture;
        }
        Screenshot.takeShot = takeShot;
        /**
         * 将一个egret.DisplayObject对象导出为egret.RenderTexture纹理并保存为文件在浏览器默认下载目录中.
         * @param item 显示对象
         */
        function takeShotAndSaveFile(item, fileName) {
            var texture = this.takeShot(item);
            try {
                texture.saveToFile("image/png", fileName + ".png", new egret.Rectangle(0, 0, texture.textureWidth, texture.textureHeight));
            }
            catch (error) {
                throw error;
            }
        }
        Screenshot.takeShotAndSaveFile = takeShotAndSaveFile;
        /**
         * 将一个egret.DisplayObject对象进行base64转码并返回对象,可选是否直接存入localStorage.
         * @param item 显示对象
         * @param needSave 是否直接存入localStorage，默认否
         * @param itemName 存入localStorage时的名称
         * @returns {string} Base64编码后的图片
         */
        function takeShotAndSaveLocalStorage(item, needSave, itemName) {
            if (needSave === void 0) { needSave = false; }
            var texture = this.takeShot(item);
            var str = texture.toDataURL("image/png", new egret.Rectangle(0, 0, texture.textureWidth, texture.textureHeight));
            if (needSave) {
                egret.localStorage.setItem(itemName, str);
            }
            return str;
        }
        Screenshot.takeShotAndSaveLocalStorage = takeShotAndSaveLocalStorage;
        ;
        /**
         * 用从Base64中读取的纹理t填充一个egret.Bitmap对象.
         * @param loadByName 为true时，传入name直接从localStorage读取；否则把传入的字符串按Base64解析出纹理
         * @param nameOrBase64 按照loadByName传入的字符串
         * @param bitmap 存放Bitmap的容器
         */
        function loadImgFromBase64(loadByName, nameOrBase64, bitmap) {
            if (loadByName === void 0) { loadByName = true; }
            var str = (loadByName ? egret.localStorage.getItem(nameOrBase64) : nameOrBase64);
            var img = new Image();
            img.src = str;
            img.crossOrigin = '*';
            img.onload = function () {
                var texture = new egret.Texture();
                var bitmapdata = new egret.BitmapData(img);
                texture._setBitmapData(bitmapdata);
                bitmap.texture = texture;
            };
        }
        Screenshot.loadImgFromBase64 = loadImgFromBase64;
        ;
    })(Screenshot = egret_plus.Screenshot || (egret_plus.Screenshot = {}));
})(egret_plus || (egret_plus = {}));
var egret_plus;
(function (egret_plus) {
    /**
     * 异步sleep功能
     * @param time sleep时间，毫秒计
     * @param thisObj this对象
     */
    function sleep(time, thisObj) {
        return new Promise(function (resolve) { return egret.setTimeout(resolve, thisObj, time); });
    }
    egret_plus.sleep = sleep;
})(egret_plus || (egret_plus = {}));
Array.prototype.random_get = function () {
    var index = Math.floor(Math.random() * this.length);
    return this[index];
};
Array.prototype.randomSort = function () {
    return this.sort(Math.plus_minus());
};
Array.prototype.random_get_and_delete = function () {
    var index = Math.floor(Math.random() * this.length);
    var item = this[index];
    this.delete(item);
    return item;
};
Array.prototype.delete = function (item) {
    var i = this.indexOf(item);
    if (i !== -1) {
        this.splice(i, 1);
    }
};
Array.prototype.randomSortTimes = function (times) {
    for (var i = 0; i < times; i++) {
        this.randomSort();
    }
    return this;
};
Array.prototype.merge = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var $arr = this;
    arr.forEach(function (_arr) {
        $arr = $arr.concat(_arr);
    });
    return $arr;
};
Array.prototype.getDiffItem = function (difference) {
    var _this = this;
    for (var i = 0; i < difference; i++) {
        this.randomSort();
    }
    var get = function () {
        if (_this.length > 0) {
            return _this.pop();
        }
        else {
            throw "get times exceeding length of this array!";
        }
    };
    return { get: get, arr: this };
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
Math.plus_minus = function () {
    return Math.random() > .5 ? -1 : 1;
};
Math.convertTime = function (type, value) {
    var result = null;
    var minutes = Math.floor(value / 60);
    var seconds = value % 60;
    if (type === MathTimeType.Clock) {
        if (value < 10) {
            result = '00:0' + value;
        }
        else if (value < 60) {
            result = '00:' + value;
        }
        else if (value >= 60) {
            var minuteLabel = void 0;
            var secondLabel = void 0;
            if (minutes < 10) {
                minuteLabel = '0' + minutes;
            }
            else {
                minuteLabel = minutes;
            }
            if (seconds < 10) {
                secondLabel = '0' + seconds;
            }
            else {
                secondLabel = seconds;
            }
            result = minuteLabel + ':' + secondLabel;
        }
    }
    else if (type === MathTimeType.Chinese) {
        if (minutes == 0) {
            result = value + '秒';
        }
        else {
            if (seconds == 0) {
                result = minutes + '分钟';
            }
            else {
                result = minutes + '分' + seconds + '秒';
            }
        }
    }
    return result;
};
Math.getDiffNumber = function (min, max, difference) {
    var arr = [];
    for (var i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr.getDiffItem(difference);
};
Math.getConsecutiveNumArr = function (start, end) {
    var arr = [];
    for (var i = start; i < end + 1; i++) {
        arr.push(i);
    }
    return arr;
};
Math.getExactDivisionNumArr = function getExactDivisionNumArr(target, start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if ((target % i) === 0) {
            arr.push(i);
        }
    }
    return arr;
};
Math.getBeExactDivisionNumArr = function getBeExactDivisionNumArr(target, start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if ((i % target) === 0) {
            arr.push(i);
        }
    }
    return arr;
};
var MathTimeType;
(function (MathTimeType) {
    /**
     * X分X秒 格式
     */
    MathTimeType[MathTimeType["Chinese"] = 0] = "Chinese";
    /**
     * 00:00 格式
     */
    MathTimeType[MathTimeType["Clock"] = 1] = "Clock";
})(MathTimeType || (MathTimeType = {}));
