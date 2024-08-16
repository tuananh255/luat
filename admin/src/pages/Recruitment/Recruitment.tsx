import { useState } from "react";
// import { Pagination } from "antd";
import { Table } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DatePicker, Space } from "antd";
import { Input } from "antd";
import DeleteRecruitment from "../../components/Edits/Recruitment/DeleteRecruitment";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

const onChanges = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
export default function Recruitment() {
  const [isDeleteRecruitmentOpen, setIsDeleteRecruitmentOpen] = useState(false);
  const handleDeleteRecruitmentOpen = () => setIsDeleteRecruitmentOpen(true);
  const handleCloseDeleteRecruitment = () => setIsDeleteRecruitmentOpen(false);

  const [activeTable, setActiveTable] = useState("table1");

  const handleButtonClick = (tableName: string) => {
    setActiveTable(tableName);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
    },
    {
      title: "Vị trí tuyển dụng",
      dataIndex: "dichvu",
    },
    {
      title: "Mô tả",
      dataIndex: "mota",
    },
    {
      title: "Ngày đăng",
      dataIndex: "ngaydang",
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "ngayhethan",
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
      ngaydang: "14-10-2024",
      ngayhethan: <DatePicker onChange={onChange} />,
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
            onClick={handleDeleteRecruitmentOpen}
          />
        </>
      ),
    },
    {
      stt: "2",
      dichvu: "Luật sư riêng",
      mota: "test",
      ngaydang: "14-10-2024",
      ngayhethan: <DatePicker onChange={onChange} />,
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
            onClick={handleDeleteRecruitmentOpen}
          />
        </>
      ),
    },
    {
      stt: "3",
      dichvu: "Luật sư riêng",
      mota: "test",
      ngaydang: "14-10-2024",
      ngayhethan: <DatePicker onChange={onChange} />,
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
            onClick={handleDeleteRecruitmentOpen}
          />
        </>
      ),
    },
    {
      stt: "4",
      dichvu: "Luật sư riêng",
      mota: "test",
      ngaydang: "14-10-2024",
      ngayhethan: <DatePicker onChange={onChange} />,
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
            onClick={handleDeleteRecruitmentOpen}
          />
        </>
      ),
    },
  ];

  const columns2 = [
    {
      title: "STT",
      dataIndex: "stt",
    },
    {
      title: "Họ tên",
      dataIndex: "hoten",
    },
    {
      title: "Vị trí tuyển dụng",
      dataIndex: "vitri",
    },

    {
      title: "Ngày nạp hồ sơ",
      dataIndex: "ngaynap",
    },
    {
      title: "CV",
      dataIndex: "cv",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangthai",
      filters: [
        {
          text: "Đã tuyển",
          value: "Đã tuyển",
        },
        {
          text: "Đang phỏng vấn",
          value: "Đang phỏng vấn",
        },
        {
          text: "Loại",
          value: "Loại",
        },
        {
          text: "Đã phỏng vấn",
          value: "Đã phỏng vấn",
        },
      ],
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

  const data2 = [
    {
      stt: "1",
      hoten: "Nguyễn Văn A",
      vitri: "Luật sư tranh tụng",
      ngaynap: "14-10-2024",
      cv: "Hình mình họa",
      trangthai: <span className="text-green-500">Đã tuyển</span>,
      edit: (
        <>
          <AiOutlineEdit className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleDeleteRecruitmentOpen}
          />
        </>
      ),
    },
    {
      stt: "1",
      hoten: "Nguyễn Văn A",
      vitri: "Luật sư tranh tụng",
      ngaynap: "14-10-2024",
      cv: "Hình mình họa",
      trangthai: <span className="text-blue-600">Đang phỏng vấn</span>,
      edit: (
        <>
          <AiOutlineEdit className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleDeleteRecruitmentOpen}
          />
        </>
      ),
    },
    {
      stt: "2",
      hoten: "Nguyễn Văn A",
      vitri: "Luật sư tranh tụng",
      ngaynap: "14-10-2024",
      cv: "Hình mình họa",
      trangthai: <span className="text-green-500">Đã tuyển</span>,
      edit: (
        <>
          <AiOutlineEdit className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleDeleteRecruitmentOpen}
          />
        </>
      ),
    },
    {
      stt: "3",
      hoten: "Nguyễn Văn A",
      vitri: "Luật sư tranh tụng",
      ngaynap: "14-10-2024",
      cv: "Hình mình họa",
      trangthai: <span className="text-red-500">Loại</span>,
      edit: (
        <>
          <AiOutlineEdit className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleDeleteRecruitmentOpen}
          />
        </>
      ),
    },
    {
      stt: "3",
      hoten: "Nguyễn Văn A",
      vitri: "Luật sư tranh tụng",
      ngaynap: "14-10-2024",
      cv: "Hình mình họa",
      trangthai: <span className="text-gray-400">Đã phỏng vấn</span>,
      edit: (
        <>
          <AiOutlineEdit className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleDeleteRecruitmentOpen}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="flex gap-3 mb-4">
            <div>
              <ButtonCustom
                title="Bài đăng"
                text="text-white"
                to="#48d1cc"
                from="#40e0d0"
                onClick={() => handleButtonClick("table1")}
              />
            </div>
            <div>
              <ButtonCustom
                title="Ứng viên"
                text="text-black"
                to="#fff"
                from="#fff"
                onClick={() => handleButtonClick("table2")}
              />
            </div>
          </div>
          <div className="text-[#667085] text-xs font-semibold font-open-sans leading-tight mb-2">
            <Input placeholder="Search here..." />
          </div>
        </div>
        <div className="">
          {activeTable === "table1" && (
            <>
              <Table
                columns={columns}
                dataSource={data}
                onChange={onChanges}
                pagination={false}
                showSorterTooltip={{
                  target: "sorter-icon",
                }}
              />
              <DeleteRecruitment
                isOpen={isDeleteRecruitmentOpen}
                onClose={handleCloseDeleteRecruitment}
              />
            </>
          )}
          {activeTable === "table2" && (
            <>
              <Table
                columns={columns2}
                dataSource={data2}
                onChange={onChanges}
                pagination={false}
                showSorterTooltip={{
                  target: "sorter-icon",
                }}
              />
              {/* <DeleteRecruitment
              isOpen={isDeleteRecruitmentOpen}
              onClose={handleCloseDeleteRecruitment}
            /> */}
            </>
          )}
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
    </>
  );
}
