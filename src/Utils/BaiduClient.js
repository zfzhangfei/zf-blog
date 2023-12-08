

import { BosClient } from '@baiducloud/sdk';
const client = new BosClient(
    {
        endpoint: 'https://zfblog.su.bcebos.com',         //传入Bucket所在区域域名
        credentials: {
            ak: 'acb6c295f9c34fa5a8b5cdd803b6d18b',         //您的AccessKey
            sk: 'a3a95a9b31d1480ab2e5a6c682fd3447'     //您的SecretAccessKey
        }
    }
);

export async function uploadImg(file) {
    const bucketName = 'zfblog';
    const key = 'zfblogpicture/' + file.name;
    const result = await client.putObject(bucketName, key, file);
    return result;
}

export async function downloadImg(name) {
    // const bucketName = 'zfblog';
    const key = 'zfblogpicture/' + name;
    // const result = await client.getObject(bucketName, key);
    // console.log(result.body.toString())
    // const blob = new Blob([result.body],{type: file.type});
    // console.log(blob)
    // const imgUrl = URL.createObjectURL(blob);
    const imgUrl = 'https://zfblog.su.bcebos.com/v1/'+key;
    return imgUrl;
}