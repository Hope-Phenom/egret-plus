# Screenshot
**该模块为截屏功能的封装，支持保存为图片文件**
## takeShot(item: egret.DisplayObject)
     * 将一个egret.DisplayObject对象导出为egret.RenderTexture纹理.
     * @param item 显示对象
     * @returns egret.RenderTexture 截图的纹理
     * @version EgretPlus 1.2
**使用方法**  
const texture = egret_plus.Screenshot.takeShot(xxx);

**注意事项**  
无
## takeShotAndSaveFile(item: egret.DisplayObject, fileName: string)
     * 将一个egret.DisplayObject对象导出为egret.RenderTexture纹理并保存为文件在浏览器默认下载目录中.
     * @param item 显示对象
     * @param fileName 文件名
     * @version EgretPlus 1.2
**使用方法**  
egret_plus.Screenshot.takeShotAndSaveFile(xxx);

**注意事项**  
无
## takeShotAndSaveLocalStorage(item: egret.DisplayObject, needSave: boolean = false, itemName: string)
     * 将一个egret.DisplayObject对象进行base64转码并返回对象,可选是否直接存入localStorage.
     * @param item 显示对象
     * @param needSave 是否直接存入localStorage，默认否
     * @param itemName 存入localStorage时的名称
     * @returns {string} Base64编码后的图片
     * @version EgretPlus 1.2
**使用方法**  
const base64 = egret_plus.Screenshot.takeShotAndSaveLocalStorage(xxx);

**注意事项**  
无
## loadImgFromBase64(loadByName: boolean = true, nameOrBase64: string, bitmap: egret.Bitmap)
     * 用从Base64中读取的纹理t填充一个egret.Bitmap对象.
     * @param loadByName 为true时，传入name直接从localStorage读取；否则把传入的字符串按Base64解析出纹理
     * @param nameOrBase64 按照loadByName传入的字符串
     * @param bitmap 存放Bitmap的容器
     * @version EgretPlus 1.2
**使用方法**  
egret_plus.Screenshot.loadImgFromBase64(true, "test", this.bitmap1);

**注意事项**  
无