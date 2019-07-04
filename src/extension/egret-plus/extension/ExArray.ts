interface Array<T> {
    /**
     * 在一个数组中随机获取一个元素
     * @version EgretPlus 1.2
     */
    random_get(): T;

    /**
     * 将该数组随机打乱
     * @version EgretPlus 1.2
     */
    randomSort(): T[];

    /**
     * 从数组中随机获取一个元素，并将其删除
     * @version EgretPlus 1.2
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

Array.prototype.random_get = function <T>(): T {
    var index: number = Math.floor(Math.random() * this.length);
    return this[index];
}

Array.prototype.randomSort = function <T>(): T[] {
    return this.sort(Math.plus_minus());
}

Array.prototype.random_get_and_delete = function <T>(): T {
    let index: number = Math.floor(Math.random() * this.length);
    const item = this[index];
    this.delete(item);
    return item;
}

Array.prototype.delete = function <T>(item: T): void {
    const i = this.indexOf(item);
    if (i !== -1) {
        this.splice(i, 1);
    }
}

Array.prototype.randomSortTimes = function <T>(times: number): T[] {
    for (let i = 0; i < times; i++) {
        this.randomSort();
    }
    return this;
}

Array.prototype.merge = function <T>(...arr: T[][]): T[] {
    let $arr: T[] = this;
    arr.forEach((_arr) => {
        $arr = $arr.concat(_arr);
    });
    return $arr;
}

Array.prototype.getDiffItem = function <T>(difference: number): RandomGetter<T> {

    for (let i = 0; i < difference; i++) {
        this.randomSort();
    }

    const get = (): T => {
        if (this.length > 0) {
            return this.pop();
        } else {
            throw "get times exceeding length of this array!";
        }
    }

    return { get: get, arr: this };
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