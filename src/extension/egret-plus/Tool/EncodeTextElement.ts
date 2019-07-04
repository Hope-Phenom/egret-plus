namespace egret_plus {
    /**
     * 根据给定的条件，自动编码egret.ITextElement数组
     * @param desc 要进行编码的文本
     * @param condition 编码条件，支持string和RegExp正则表达式
     * @param style 符合条件时的特殊Style
     */
    export function encodeTextElement(desc: string, condition: string | RegExp, style: egret.ITextStyle): egret.ITextElement[] {
        let arr: egret.ITextElement[] = [];
        if (condition instanceof RegExp) {

            const exArr = desc.match(condition);
            if (!exArr || exArr.length === 0) {
                arr.push({ text: desc })
                return arr;
            }

            desc = desc.replace(condition, "|");
            const strArr = desc.split("|");
            for (let i = 0; i < strArr.length; i++) {
                const str = strArr[i];
                const ext = exArr[i];
                arr.push({ text: str });
                if (ext) {
                    arr.push({ text: `${ext}`, style: style });
                }
            }

        } else {

            if (desc.indexOf(condition) === -1 || !desc) {
                arr.push({ text: desc })
                return arr;
            }

            while (desc.indexOf(condition) !== -1) {
                desc = desc.replace(condition, "|");
            }
            const strArr = desc.split("|");
            for (let i = 0; i < strArr.length; i++) {
                const str = strArr[i];
                const ext = (i === strArr.length - 1) ? null : condition;
                arr.push({ text: str });
                if (ext) {
                    arr.push({ text: `${ext}`, style: style });
                }
            }
        }

        return arr;
    }
}