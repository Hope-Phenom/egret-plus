
/**
* @Screenshot 截屏功能相关
*/
namespace egret_plus.Screenshot {
    /**
     * 将一个egret.DisplayObject对象导出为egret.RenderTexture纹理.
     * @param item 显示对象
     * @returns egret.RenderTexture 截图的纹理
     */
    export function takeShot(item: egret.DisplayObject): egret.RenderTexture {
        let renderTexture: egret.RenderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(item);
        return renderTexture;
    }

    /**
     * 将一个egret.DisplayObject对象导出为egret.RenderTexture纹理并保存为文件在浏览器默认下载目录中.
     * @param item 显示对象
     */
    export function takeShotAndSaveFile(item: egret.DisplayObject, fileName: string): void {
        const texture = this.takeShot(item);
        try {
            texture.saveToFile("image/png", `${fileName}.png`, new egret.Rectangle(0, 0, texture.textureWidth, texture.textureHeight));
        } catch (error) {
            throw error;
        }
    }

    /**
     * 将一个egret.DisplayObject对象进行base64转码并返回对象,可选是否直接存入localStorage.
     * @param item 显示对象
     * @param needSave 是否直接存入localStorage，默认否
     * @param itemName 存入localStorage时的名称
     * @returns {string} Base64编码后的图片
     */
    export function takeShotAndSaveLocalStorage(item: egret.DisplayObject, needSave: boolean = false, itemName: string): string {
        const texture = this.takeShot(item);
        const str = texture.toDataURL("image/png", new egret.Rectangle(0, 0, texture.textureWidth, texture.textureHeight));
        if (needSave) {
            egret.localStorage.setItem(itemName, str);
        }
        return str;
    };

    /**
     * 用从Base64中读取的纹理t填充一个egret.Bitmap对象.
     * @param loadByName 为true时，传入name直接从localStorage读取；否则把传入的字符串按Base64解析出纹理
     * @param nameOrBase64 按照loadByName传入的字符串
     * @param bitmap 存放Bitmap的容器
     */
    export function loadImgFromBase64(loadByName: boolean = true, nameOrBase64: string, bitmap: egret.Bitmap): void {
        let str = (loadByName ? egret.localStorage.getItem(nameOrBase64) : nameOrBase64);
        let img: HTMLImageElement = new Image();
        img.src = str;
        img.crossOrigin = '*';
        img.onload = function () {
            let texture = new egret.Texture();
            let bitmapdata = new egret.BitmapData(img);
            texture._setBitmapData(bitmapdata);
            bitmap.texture = texture;
        }
    };
}