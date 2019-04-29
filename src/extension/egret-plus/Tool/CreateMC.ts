namespace egret_plus {
    /**
     * 按照资源名创建MC动画
     * @param name MC资源组名称
     * @param movieClipName 播放的剪辑名称(可选)
     */
    export function createMC(name: string, movieClipName?: string): egret.MovieClip {
        const data = RES.getRes(`${name}_mc_json`);
        const txtr = RES.getRes(`${name}_tex_png`);
        const mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData(movieClipName));
    }
}