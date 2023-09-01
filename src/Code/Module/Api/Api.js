import { get, post } from '../../../Utils/request'
let currentUser = {}

//#region 用户
export function login() {
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
export function editAvatar(value) {
    let params = {
        avatar: value,
    }
    post('/EditAvatar', params)
}
//#endregion





//#region 格言
export function editMaxim(value) {
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




//#region 文章
//#region 增加
export async function postArtical(Name, Mark, Content,Cover) {
    let params = {
        Name:Name,
        Mark:Mark,
        Content:Content,
        Cover:Cover
    }
    await post('/putArtical', params)
}
//#endregion

//#region 编辑
export async function editArtical(Name, Mark, Content,Summary,Id) {
    let params = {
        Name:Name,
        Mark:Mark,
        Content:Content,
        Summary:Summary,
        Id:Id,
    }
    await post('/editArtical', params)
}
//#endregion

//#region 查
export async function getArtical() {
    const results = await get('/getArtical')
    return results.res;
}

export async function getArticalById(Id) {
    let params={
        Id:Id
    }
    const results = await get('/getArticalById',params)
    return results.res[0];
}


//#endregion

//#endregion





//#region 标签
export async function getMark() {
    const results = await get('/getMark')
    return results.res;
}
//#endregion






