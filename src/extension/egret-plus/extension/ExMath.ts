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
}

Math.limit = function (from: number, end: number): number {
    from = Math.min(from, end);
    end = Math.max(from, end);
    var range: number = end - from;
    return from + Math.random() * range;
}

Math.limitInteger = function ($from: number, $end: number): number {
    return Math.round(this.limit($from, $end));
}

Math.plus_minus = function (): 1 | -1 {
    return Math.random() > .5 ? -1 : 1;
}

Math.convertTime = function (type: MathTimeType, value: number): string {
    let result: string = null;
    let minutes = Math.floor(value / 60);
    let seconds = value % 60;
    if (type === MathTimeType.Clock) {
        if (value < 10) {
            result = '00:0' + value;
        } else if (value < 60) {
            result = '00:' + value;
        } else if (value >= 60) {
            let minuteLabel;
            let secondLabel;
            if (minutes < 10) {
                minuteLabel = '0' + minutes;
            } else {
                minuteLabel = minutes;
            }
            if (seconds < 10) {
                secondLabel = '0' + seconds;
            } else {
                secondLabel = seconds;
            }
            result = minuteLabel + ':' + secondLabel;

        }
    } else if (type === MathTimeType.Chinese) {
        if (minutes == 0) {
            result = value + '秒';
        } else {
            if (seconds == 0) {
                result = minutes + '分钟';
            } else {
                result = minutes + '分' + seconds + '秒';
            }
        }
    }
    return result;
}

Math.getDiffNumber = function (min: number, max: number, difference: number): RandomGetter<number> {
    let arr: number[] = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr.getDiffItem(difference);
}

Math.getConsecutiveNumArr = function (start: number, end: number): number[] {
    const arr: number[] = [];
    for (let i = start; i < end + 1; i++) {
        arr.push(i);
    }
    return arr;
}

enum MathTimeType {
    /**
     * X分X秒 格式
     */
    Chinese,
    /**
     * 00:00 格式
     */
    Clock
}