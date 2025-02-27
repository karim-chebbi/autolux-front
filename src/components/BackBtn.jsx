import React from 'react'
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate()
  return (
    <Tooltip title="Back">
      <Button onClick={()=> navigate(-1)} type="primary" shape="circle" icon={<ArrowLeftOutlined />} />
    </Tooltip>
  );
}

export default BackBtn