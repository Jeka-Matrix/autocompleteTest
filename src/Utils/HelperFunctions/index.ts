export const fileNameFromId = (fileId: string) => {
    //8105r000000D3EtAAK_20230108_113536_fileName
    let fileName = fileId.split('_').slice(3).join('_');
    if (fileName === '') return fileId.substring(0, 8);
    return fileName;
};

export const getFullname = (firstname?: string, lastname?: string) => {
    return `${firstname ? firstname + ' ' : ''}${lastname ? lastname : ''}`;
};

/**
 *
 * @param value string | null | undefined
 * @returns value as int or 0
 */
export const intFromString = (value: string | undefined | null, defVal?: number) => {
    if (!value) return defVal ? defVal : 0;
    const res = parseInt(value);
    if (isNaN(res)) return defVal ? defVal : 0;
    return res;
};

/**
 *
 * @param value string | null | undefined
 * @returns T extends {[key:string]:any};
 */
export const objectFromString: <T extends Object>(value: string | undefined | null, init: T) => T = (value, init) => {
    try {
        if (!value) return init;
        const obj = JSON.parse(value);
        const initKeys = Object.keys(init);
        const objKeys = Object.keys(obj);

        //check if we received valid object
        if (initKeys.length > objKeys.length) return init;
        //check if all the keys from initKeys exists in objKeys
        initKeys.forEach((key) => {
            if (!objKeys.includes(key)) return init;
        });

        return obj;
    } catch {
        return init;
    }
};

type contentType = 'image/jpeg' | 'image/png';
export const downloadBase64Img = (fileName: string, base64Data: string, contentType: contentType = 'image/jpeg') => {
    //base64Data: base64 string | Filename: ex- balblabla
    const fileNameAndContentType = `${fileName}.${contentType.split('/').pop()}`;
    const linkSource = `data:${contentType};base64,${base64Data}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileNameAndContentType;
    downloadLink.click();
};

//Remove spaces when the user pasted
export const delSpacesOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (e.clipboardData.getData('text/plain')) {
        e.clipboardData.items[0].getAsString((text) => {
            (e.target as HTMLInputElement).value = text.replaceAll(' ', '');
        });
    }
};
