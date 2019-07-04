# 原生Math类拓展
**实际使用中原生Math类的功能并不完善，故进行了补充**
## limit()
     * 获取一个区间的随机数。
     * @param from 最小值
     * @param end 最大值
     * @version EgretPlus 1.2
**使用方法**  
Math.limit(1,10)  

**注意事项**  
无
## limitInteger()
     * 获取一个区间的随机数(整数)。
     * @param from 最小值
     * @param end 最大值
     * @version EgretPlus 1.2
**使用方法**  
Math.limitInteger(1,10)  

**注意事项**  
无
## plus_minus()
     * 随机获取符号（1或者-1）
     * @version EgretPlus 1.2
**使用方法**  
Math.plus_minus(1,10)  

**注意事项**  
无
## convertTime(type: MathTimeType, value: number)
     * 转换时间格式
     * @param type 转换类型，参照MathTimeType枚举
     * @param value 秒数
     * @version EgretPlus 1.2
**使用方法**  
Math.convertTime(MathTimeType.Chinese, 120)  

**注意事项**  
无
## getDiffNumber(min: number, max: number, difference: number)
     * 获取不同的数字，只要是通过这里创造的同一个对象，每次get必定返回不一样的数字
     * @param min 最小值（包括）
     * @param max 最大值（包括）
     * @param difference 打乱次序（一般而言越大随机度越高）
     * @returns 返回一个包含get方法和打乱数组的对象，通过调用对象的get方法就可以获得不同的数字
     * @version EgretPlus 1.2
**使用方法**  
const getter = Math.getDiffNumber(1, 10, 5)  
let a = getter.get()  
let b = getter.get()  

**注意事项**  
无
## getConsecutiveNumArr(start: number, end: number)
     * 获取一个指定起始点的连续的数字数组
     * @param start 起始点（包括）
     * @param end 终止点（包括）
     * @version EgretPlus 1.2
**使用方法**  
const arr = Math.getConsecutiveNumArr(1, 10)  

**注意事项**  
无
## getExactDivisionNumArr(target: number, start: number, end: number)
     * 获取一定范围内，能整除某个数字的数组
     * @param target 目标数字
     * @param start 范围起始（包含）
     * @param end 结束范围（包含）
     * @version EgretPlus 1.2
**使用方法**  
const arr = Math.getExactDivisionNumArr(1, 10)  

**注意事项**  
无
## getBeExactDivisionNumArr(target: number, start: number, end: number)
     * 获取一定范围内，能被某个数字整除的数组
     * @param target 目标数字
     * @param start 范围起始（包含）
     * @param end 结束范围（包含）
     * @version EgretPlus 1.2
**使用方法**  
const arr = Math.getBeExactDivisionNumArr(1, 10)  

**注意事项**  
无