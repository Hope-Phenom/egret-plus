# Sleep
**使用setTimeout来组织代码时会让代码变的异常复杂且难以理解，使用Sleep可以有效改善这一情况**
## sleep(time: number, thisObj: any)
     * 异步sleep功能
     * @param time sleep时间，毫秒计
     * @param thisObj this对象
     * @version EgretPlus 1.2
**使用方法**  
改写前：  
``` TypeScript
egret.setTimeout(()=>{
    a();
    egret.setTimeout(()=>{
        b();
        egret.setTimeout(()=>{
            c();
        }, this, 500);
    }, this, 500);
}, this, 500);
```
改写后：  
``` TypeScript
await egret_plus.sleep(500, this);
a();
await egret_plus.sleep(500, this);
b();
await egret_plus.sleep(500, this);
c();
```

**注意事项**  
该方法只能在标记有 async 的异步函数中使用。