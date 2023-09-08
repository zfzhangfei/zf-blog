import { async } from "q";
import { getMark } from "../../../Api/Api";

export const genders = {
    male: '男',
    female: '女'
};

export function getRoles() {
    return {
        admin: '管理员',
        editor: '编辑'
    }
}

export  function getMarkDictionary() {
    return  getMark();
}