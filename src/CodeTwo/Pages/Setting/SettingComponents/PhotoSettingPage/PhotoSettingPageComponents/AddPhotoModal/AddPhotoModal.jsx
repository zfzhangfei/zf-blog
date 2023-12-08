import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Space, Upload } from "antd";
import "./AddPhotoModal.scss";
import UploadPhotos from "./UploadPhotos/UploadPhotos";
import {
  getAlbumAsync,
  getAlbumPictureAsync,
  postAlbum,
  putBosPicture,
  updateAlbum,
} from "../../../../../../Api/Api";
import formatDate from "../../../../../../CommonFuc/Time";
import { uploadImg } from "../../../../../../../Utils/BaiduClient";
import { useDispatch } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const AddPhotoModal = ({ item }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [albumName, setAlbumName] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [imageUrlOrigin, setImageUrlOrigin] = useState();
  const [loading, setLoading] = useState(false);

  const SaveAlbum = () => {
    fileList.map((file) => {
      const now = new Date();
      let params = {
        BosPath:
          "https://zfblog.su.bcebos.com/zfblogpicture/" +
          file.originFileObj.name,
        BosName: file.originFileObj.name,
        PictureType: 2,
        Href: "",
        PhotoId: item.Id,
        PhotoTime: formatDate(now),
      };
      putBosPicture(params);
      dispatch(getAlbumPictureAsync());
    });

    let ablumParams = {
      Id:item.Id,
      Name: albumName,
      Cover: "https://zfblog.su.bcebos.com/zfblogpicture/" + imageUrlOrigin.name,
      Description: "",
    };
    updateAlbum(ablumParams);
    dispatch(getAlbumAsync());
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setAlbumName(event.target.value);
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setImageUrlOrigin(info.file.originFileObj);
      uploadImg(info.file.originFileObj)
      setFileList([...fileList, info.file]);
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        console.log(url,'urlurl');
        setImageUrl(url);
      });
    }
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div className="AddPhotoModal">
      <Button type="primary" onClick={() => setOpen(true)}>
        编辑相册
      </Button>
      <Modal
        title={item.Name}
        centered
        open={open}
        onOk={SaveAlbum}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <div>
          <span>相册封面:</span>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            // beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
        <div style={{ marginBottom: 20 }}>
          <span>相册名:</span>
          <Input
            placeholder="请输入相册名！"
            value={albumName}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <span>相册简介:</span>
          <TextArea placeholder="请输入相册简介！" style={{ resize: "none" }} />
        </div>
        <UploadPhotos item={item} setFileList={setFileList} />
      </Modal>
    </div>
  );
};
export default AddPhotoModal;
