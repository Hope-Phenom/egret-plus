# 原生Array类拓展
**实际使用中原生Array类的功能并不完善，故进行了补充**
## random_get()
     * 在一个数组中随机获取一个元素。
     * @version EgretPlus 1.2
**使用方法**  
array.random_get()  

**注意事项**  
无
## randomSort()
     * 将该数组随机打乱。
     * @version EgretPlus 1.2
**使用方法**  
array.randomSort()  

**注意事项**  
无
## randomSortTimes(times: number)
     * 随机打乱数组多次。
     * @param times 打乱的次数
     * @version EgretPlus 1.2
**使用方法**  
array.randomSortTimes(n)  

**注意事项**  
无
## delete(item: T)
     * 删除数组中的某个对象。
     * @param item 要删除的对象
     * @version EgretPlus 1.2
**使用方法**  
array.delete(item)  

**注意事项**  
无
## random_get_and_delete()
     * 从数组中随机获取一个元素，并将其删除。
     * @version EgretPlus 1.2
**使用方法**  
array.random_get_and_delete()  

**注意事项**  
无
## merge<T>(...arr: T[][])
     * 合并多个数组。
     * @version EgretPlus 1.2
**使用方法**  
array.merge(arr1,arr2,...)  

**注意事项**  
与原生的合并方法相比这里使用更加方便
## getDiffItem<T>(difference: number)
     * 从该数组里随机获取一个元素，采用泛型支持各种类型。
     * @param difference 打乱次序（一般而言越大随机度越高）
     * @returns 返回一个包含get方法和打乱数组的对象，通过调用对象的get方法就可以获得不同的元素
     * @version EgretPlus 1.2
**使用方法**  
array.getDiffItem(n)  

**注意事项**  
无