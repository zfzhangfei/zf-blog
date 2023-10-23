import { get, post } from '../../Utils/request'
let currentUser = {}

//#region 用户
export function login() {
    const md5 = require('md5');
    const hash = md5(12345);
    const results = get('/users', { username: '南风知我意', password: hash })
    currentUser = results
}
export async function getCurrentUser() {
    return currentUser;
}


export async function getMark() {
}

//#endregion



