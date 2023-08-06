import { get, post } from '../../../Utils/request'
let currentUser = {}

//#region 用户
export function Login() {
    const md5 = require('md5');
    const hash = md5(12345);
    const results = get('/users', { username: 'admin', password: hash })
    currentUser = results
}
// 获取当前用户
export async function getCurrentUser() {
    return currentUser;
}
//#endregion






//#region 头像
export function EditAvatar(value) {
    let params = {
        avatar: value,
    }
    post('/EditAvatar', params)
}
//#endregion





//#region 格言
export function EditMaxim(value) {
    let params = {
        maxim: value,
    }
    post('/EditMaxim', params)
}
//#endregion





//#region 技能图片

//#region 查
export async function getSkillIcon() {
    const results = await get('/getBosPicture', { type: 1, username: '' });
    return results.res;
}
//#endregion

//#region 删
export function deleteSkillIcon(key) {
    let params = {
        key: key,
    }
    post('/DeleteBosPicture', params);
}
//#endregion

//#region 增
export function postSkillIcon(imgUrl, file, link) {
    let params = {
        BosPath: imgUrl,
        BosName: file.name,
        PictureType: 1,
        Href: link
    }
    post('/putBosPicture', params)
}
//#endregion
//#endregion
