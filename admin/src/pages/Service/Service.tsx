import {  useState } from "react";
import { Pagination } from "antd";
import { Table } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

import { Input } from "antd";
import DeleteService from "../../components/Services/DeleteService";

const onChanges = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
export default function Service() {
  const [isDeleteServiceOpen, setIsDeleteServiceOpen] = useState(false);
  const handleDeleteServiceOpen = () => setIsDeleteServiceOpen(true);
  const handleCloseDeleteService = () => setIsDeleteServiceOpen(false);
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "dichvu",
    },
    {
      title: "Mô tả",
      dataIndex: "mota",
    },
    {
      title: "Hình minh họa",
      dataIndex: "hinhminhhoa",
    },

    {
      title: "",
      dataIndex: "edit",
    },
    {
      title: "",
      dataIndex: "delete",
    },
  ];
  const data = [
    {
      stt: "1",
      dichvu: "Luật sư riêng",
      mota: "test",
      hinhminhhoa: "Hình",
      edit: (
        <>
          <AiOutlineEdit className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleDeleteServiceOpen}
          />
        </>
      ),
    },
    {
      stt: "2",
      dichvu: "Luật sư riêng",
      mota: "test",
      hinhminhhoa: "Hình",
      edit: (
        <>
          <AiOutlineEdit className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleDeleteServiceOpen}
          />
        </>
      ),
    },
    {
      stt: "3",
      dichvu: "Luật sư riêng",
      mota: "test",
      hinhminhhoa: "Hình",
      edit: (
        <>
          <AiOutlineEdit className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleDeleteServiceOpen}
          />
        </>
      ),
    },
    {
      stt: "4",
      dichvu: "Luật sư riêng",
      mota: "test",
      hinhminhhoa: "Hình",
      edit: (
        <>
          <AiOutlineEdit className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleDeleteServiceOpen}
          />
        </>
      ),
    },
  ];

  // const [showPassword, setShowPassword] = useState(false);
  // const [showPassword2, setShowPassword2] = useState(false);
  // const [addUser, setAddUser] = useState(false);
  // const [current, setCurrent] = useState(3);
  // const handleTogglePassword = () => {
  //   setShowPassword(!showPassword);
  // };
  // const handleTogglePassword2 = () => {
  //   setShowPassword2(!showPassword2);
  // };
  // const onChange = (page) => {
  //   console.log(page);
  //   setCurrent(page);
  // };
  // // nhấn cut huỷ
  // const handleCancel = () => {
  //   setAddUser(false);
  // };
  // // khi nhấn nút add
  // const handleAdd = () => {
  //   setAddUser(true);
  // };
  // //  lắng nghe sự kiện nhấn esc để tắt
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === "Escape") {
  //       setAddUser(false);
  //     }
  //   };
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);
  return (
    <>
      <div className="w-full">
        <div className="">
          <div className="text-[#667085] text-xs font-semibold font-open-sans leading-tight mb-2">
            <Input placeholder="Search here..." />
          </div>
        </div>
        <div className="">
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChanges}
            pagination={false}
            showSorterTooltip={{
              target: "sorter-icon",
            }}
          />
          <DeleteService
            isOpen={isDeleteServiceOpen}
            onClose={handleCloseDeleteService}
          />
        </div>

        {/* pagination */}
      </div>
      <div
        className="fixed bottom-0 pb-6 pt-3 bg-white"
        style={{ borderTop: "1px solid #F2F4F7" }}
      >
        <div className="flex items-center justify-between w-[1019px] px-[40px]">
          <div className="">
            <div className="h-7 justify-start items-center gap-2 inline-flex">
              <div className="text-center text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                Hiển thị
              </div>
              <div className="px-1.5 py-1 rounded-lg border border-[#dee4e7] justify-center items-center gap-0.5 flex">
                <div className="px-0.5 justify-center items-center flex">
                  <div className="text-[#5d5d5d] text-sm font-semibold font-open-sans leading-tight">
                    10
                  </div>
                </div>
                <div className="w-4 h-4 justify-center items-center flex">
                  <div className="w-4 h-4 relative"></div>
                </div>
              </div>
              <div className="text-center text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                trên 1,000 kết quả
              </div>
            </div>
          </div>
          {/* <Pagination
            align="end"
            current={current}
            onChange={onChange}
            total={50}
          /> */}
        </div>
      </div>
      {/* thêm thành viên */}
      {/* {addUser && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 99999 }}
        >
          <div className="w-[828px] p-6 bg-white rounded-2xl  gap-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[#002740] text-2xl font-bold font-space-grotesk leading-loose">
                Thêm thành viên
              </div>
              <IoMdClose
                className="cursor-pointer w-[24px] h-[24px] text-[#7e899c]"
                onClick={() => setAddUser(false)}
              />
            </div>
            <div className="self-stretch  flex-col justify-start items-end gap-4 flex">
              <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                <div className="text-[#606670] text-sm font-medium font-inter leading-tight">
                  Họ tên*
                </div>
                <input
                  type="text"
                  id="floating_outlined"
                  className="w-full block px-3.5 py-2.5 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
              </div>
              <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                <div className="text-[#606670] text-sm font-medium font-inter leading-tight">
                  Email*
                </div>
                <input
                  type="email"
                  id="floating_outlined"
                  className="w-full block px-3.5 py-2.5 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 peer"
                  placeholder=""
                />
              </div>
              <div className="relative w-full">
                <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-[#606670] text-sm font-medium font-inter leading-tight">
                      Mật khẩu
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="floating_outlined"
                      className="w-full block px-3.5 py-2.5 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer pr-10"
                      placeholder=" "
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 right-3 transform -translate-y-[10%]"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-[#606670] text-sm font-medium font-inter leading-tight">
                      Nhập lại mật khẩu
                    </div>
                    <input
                      type={showPassword2 ? "text" : "password"}
                      id="floating_outlined"
                      className="w-full block px-3.5 py-2.5 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer pr-10"
                      placeholder=" "
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 right-3 transform -translate-y-[10%]"
                      onClick={handleTogglePassword2}
                    >
                      {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                <div className="text-[#606670] text-sm font-medium font-inter leading-tight">
                  Quyền*
                </div>
                <Select
                  showSearch
                  className="bg-[#f3f3f3] h-full  text-gray-900"
                  style={{ width: "100%" }}
                  dropdownStyle={{
                    background: "#f3f3f3",
                    zIndex: "9999999999999999999999999",
                  }}
                  placeholder="Chọn dịch vụ"
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "Admin",
                      label: "Admin",
                    },
                    {
                      value: "Nhân viên",
                      label: "Nhân viên",
                    },
                    {
                      value: "Người dùng",
                      label: "Người dùng",
                    },
                  ]}
                />
              </div>
              <div className="justify-end items-center gap-4 flex">
                <div className="w-[78px] rounded-xl border border-[#dee4e7] justify-center items-center gap-3 flex">
                  <ButtonCustom
                    title="Huỷ"
                    text="text-[#002740]"
                    onClick={handleCancel}
                  />
                </div>
                <div className="w-[90px] rounded-xl justify-center items-center gap-3 flex">
                  <ButtonCustom
                    title="Thêm"
                    text="text-[#002740]"
                    to="#48d1cc"
                    from="#48d1cc "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}
