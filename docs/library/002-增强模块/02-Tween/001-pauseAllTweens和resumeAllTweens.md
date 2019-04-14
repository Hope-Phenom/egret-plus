# pauseAllTweens和resumeAllTweens
**在实际测试中发现egret引擎心跳暂停再恢复时，受dt的计算方式影响，Tween动画的表现为没有暂停（虽然心跳确实停了），故新增方法以强化功能。**
## egret.pauseAllTweens()
     * 暂停所有 Tween。
     * @version EgretPlus 0.1
     * @returns void
**使用方法**  
egret.pauseAllTweens()  

**注意事项**  
无
## egret.resumeAllTweens()
     * 恢复播放已暂停的所有 Tween。
     * @version EgretPlus 0.1
     * @returns void
**使用方法**  
egret.resumeAllTweens()  

**注意事项**  
无