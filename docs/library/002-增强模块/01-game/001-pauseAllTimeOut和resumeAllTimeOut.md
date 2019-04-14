# pauseAllTimeOut和resumeAllTimeOut
**在实际测试中发现egret.setTimeOut所注册的延时回调并不会随着引擎的整体的生命周期而暂停，故新增方法以强化功能。**
## egret.pauseAllTimeOut()
     * 暂停所有延迟后运行的函数。
     * @version EgretPlus 0.1
     * @returns void
**使用方法**  
egret.pauseAllTimeOut()  

**注意事项**  
无
## egret.resumeAllTimeOut()
     * 恢复所有已暂停的延迟后运行的函数。
     * @version EgretPlus 0.1
     * @returns void
**使用方法**  
egret.resumeAllTimeOut()  

**注意事项**  
无