import React from "react";
import { Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
const { TextArea } = Input;
interface EditPostProps {
  onClose?: () => void;
  isOpen?: boolean;
}

const EditPost: React.FC<EditPostProps> = ({ onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 99999 }}
      onClick={onClose}
    >
      <div
        className="w-[700px] h-max p-6 bg-[#f3f3f3] rounded-2xl flex-col justify-start items-center gap-6 inline-flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="self-stretch h-max flex-col justify-start items-start gap-4 flex">
          <div className="flex-col justify-center items-start gap-[17px] flex w-full">
            <div>
              <strong className="text-[18px]">Thêm bài viết mới</strong>
            </div>

            <div className="w-full">
              <label>Tiêu đề *</label>
              <Input placeholder="Tiêu đề" />
            </div>
            <div className="w-full">
              <label>Slug</label>
              <Input placeholder="Slug" />
            </div>
            <div className="w-full">
              <label>Mô tả *</label>
              <Input placeholder="Mô tả" />
            </div>
            <div className="w-full">
              <label>Lĩnh vực *</label>
              <Input placeholder="Lĩnh vực" />
            </div>
            <div className="w-full">
              <label>Nội dung</label>
              <TextArea rows={4} />
            </div>
            <div className="w-full flex flex-col">
              <label>Ảnh thumbnaill</label>
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                directory
              >
                <Button icon={<UploadOutlined />}>Upload Directory</Button>
              </Upload>
            </div>
            <div className="w-full">
              <label>Metal title</label>
              <Input placeholder="Metal title" />
            </div>
            <div className="w-full">
              <label>Meta description</label>
              <Input placeholder="Metal description" />
            </div>
            <div className="flex gap-3 w-full justify-end">
              <div
                onClick={onClose}
                className="h-10 px-10 py-3 bg-gradient-to-r from-[#fff] to-[#fff] rounded-xl justify-center items-center gap-3 inline-flex"
              >
                <div
                  className={`w-full text-black flex text-center text-base justify-center items-center font-bold font-['Space Grotesk'] leading-normal`}
                >
                  Hủy
                </div>
              </div>
              <div className="h-10 px-10 py-3 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-xl justify-center items-center gap-3 inline-flex">
                <div
                  className={`w-full text-white flex text-center text-base justify-center items-center font-bold font-['Space Grotesk'] leading-normal`}
                >
                  Gửi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
