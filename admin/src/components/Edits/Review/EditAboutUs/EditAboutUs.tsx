import React from "react";
import { Input } from "antd";
import { Select, Space } from "antd";
interface EditAboutUsProps {
  onClose?: () => void;
  isOpen?: boolean;
}

const EditAboutUs: React.FC<EditAboutUsProps> = ({ onClose, isOpen }) => {
  if (!isOpen) return null;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const options = [
    {
      label: "Luật sư riêng",
      value: "Luật sư riêng",
    },
    {
      label: "Luật sư tranh tụng",
      value: "Luật sư tranh tụng",
    },
    {
      label: "Luật sư hình sự",
      value: "Luật sư hình sự",
    },
    {
      label: "Luật sư dân sự",
      value: "Luật sư dân sự",
    },
    {
      label: "Luật sư nhà đất",
      value: "Luật sư nhà đất",
    },
    {
      label: "Luật sư lao động",
      value: "Luật sư lao động",
    },
    {
      label: "Luật sư tư vấn hợp đồng",
      value: "Luật sư tư vấn hợp đồng",
    },
    {
      label: "Luật sư hôn nhân và gia đình",
      value: "Luật sư hôn nhân và gia đình",
    },
    {
      label: "Luật sư tư vấn về xây dựng",
      value: "Luật sư tư vấn về xây dựng",
    },
    {
      label: "Luật sư hàng hải và bảo hiểm và quốc tế",
      value: "Luật sư hàng hải và bảo hiểm và quốc tế",
    },
    {
      label: "Luật sư cho người nước ngoài tại Việt Nam",
      value: "Luật sư cho người nước ngoài tại Việt Nam",
    },
  ];
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 99999 }}
      onClick={onClose}
    >
      <div
        className="w-[600px] h-max p-6 bg-[#f3f3f3] rounded-2xl flex-col justify-start items-center gap-6 inline-flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="self-stretch h-max flex-col justify-start items-start gap-4 flex">
          <div className="flex-col justify-center items-start gap-[17px] flex w-full">
            <div>
              <strong className="text-[18px]">Chỉnh sửa "Về chúng tôi"</strong>
            </div>
            <div className="w-full">
              <label>Tiêu đề *</label>
              <Input placeholder="Tiêu đề" />
            </div>
            <div className="w-full">
              <label>Mô tả *</label>
              <Input placeholder="Mô tả" />
            </div>
            <div>
              <label>Dịch vụ</label>
              <Select
                mode="multiple"
                style={{
                  width: "100%",
                }}
                dropdownStyle={{
                  zIndex: 9999999,
                }}
                placeholder="select one country"
                defaultValue={["Luật sư riêng"]}
                onChange={handleChange}
                options={options}
                optionRender={(option) => <Space>{option.data.label}</Space>}
              />
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

export default EditAboutUs;
