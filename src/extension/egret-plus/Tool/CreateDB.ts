namespace egret_plus {
    /**
     * 创建龙骨动画，有缓存方法
     * @param resName 龙骨资源组名称
     * @param armatureName 动画名称，默认为数据中的第一个(可选)
     */
    export function createDragonBones(resName: string, armatureName?: string): dragonBones.EgretArmatureDisplay {

        let dragonBonesDatas = RES.getRes(`${resName}_ske_json`);
        let textureData = RES.getRes(`${resName}_tex_json`);
        let texture = RES.getRes(`${resName}_tex_png`);

        try {
            let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
            egretFactory.parseDragonBonesData(dragonBonesDatas);
            egretFactory.parseTextureAtlasData(textureData, texture);
            let armatureDisplay: dragonBones.EgretArmatureDisplay = egretFactory.buildArmatureDisplay(armatureName ? armatureName : dragonBonesDatas.armature[0].name);
            return armatureDisplay;
        } catch (e) {
            egret.warn('create dragonBones Res is null');
            alert(`${resName} 动画播放失败，请联系技术人员`);
            return;
        }
    }

    /**
     * 销毁龙骨动画，释放资源
     * @param db 龙骨动画对象
     */
    export function clearDBAnimation(db: dragonBones.EgretArmatureDisplay) {
        if (!db) return;
        db.dbClear();
        db.dispose();
        db.parent && db.parent.removeChild(db);
    }
}
