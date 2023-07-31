import { BosClient } from '@baiducloud/sdk';

const client = new BosClient(
    {
        endpoint: 'http://zfblog.su.bcebos.com',         //传入Bucket所在区域域名
        credentials: {
            ak: 'acb6c295f9c34fa5a8b5cdd803b6d18b',         //您的AccessKey
            sk: 'a3a95a9b31d1480ab2e5a6c682fd3447'     //您的SecretAccessKey
        }
    }
);

export async function uploadImg(file) {
    const bucketName = '';
    const key = 'zfblogpicture/' + file.name;

    console.log(bucketName, key, file, 'key');
    const result = await client.putObject(bucketName, key, file);
    return result;
}

export function downloadImg(key) {
    const bucketName = 'zfblog';
    const result = client.getObject(bucketName, key);
    const blob = new Blob([result.body], { type: 'image/png' });
    const imgUrl = URL.createObjectURL(blob);
    // const imgUrl = 'http://zfblog.su.bcebos.com/'+key;
    return imgUrl; // 返回图片 blob 数据
}


