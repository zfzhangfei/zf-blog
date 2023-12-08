import React from "react";
import "./PhotoFilter.scss";
import { Button } from "antd";
import { getAlbumAsync, postAlbum } from "../../../../../../Api/Api";
import { useDispatch } from "react-redux";

const PhotoFilter = () => {
  const dispatch = useDispatch();
  const AddAlbum = async () => {
    let params = {
      Name: "新相册",
    };
    await postAlbum(params);
    dispatch(getAlbumAsync());
  };
  return (
    <div className="PhotoFilter">
      <Button onClick={AddAlbum}>新增相册</Button>
    </div>
  );
};

export default PhotoFilter;
