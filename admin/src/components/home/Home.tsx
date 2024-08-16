import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Table } from "antd";
import { useState } from "react";
import EditHeroBanner from "../Edits/Home/EditHome/EditHeroBanner";
import EditAboutUs from "../Edits/Home/EditAboutUs/EditAboutUs";
import EditFeatures from "../Edits/Home/EditFeatures/EditFeatures";
import EditCustomerTalk from "../Edits/Home/EditCustomerTalk/EditCustomerTalk";
import EditCTA from "../Edits/Home/EditCTA/EditCTA";

const columns = [
  {
    title: "STT",
    dataIndex: "index",
  },
  {
    title: "Session",
    dataIndex: "session",
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

const onChanges = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
export default function () {
  const [isEditHeroBannerOpen, setIsEditHeroBannerOpen] = useState(false);
  const handleEditHeroBannerOpen = () => setIsEditHeroBannerOpen(true);
  const handleCloseEditHeroBanner = () => setIsEditHeroBannerOpen(false);

  const [isEditAboutUsOpen, setIsEditAboutUsOpen] = useState(false);
  const handleEditAboutUsOpen = () => setIsEditAboutUsOpen(true);
  const handleCloseEditAboutUs = () => setIsEditAboutUsOpen(false);

  const [isEditFeaturesOpen, setIsEditFeaturesOpen] = useState(false);
  const handleEditFeaturesOpen = () => setIsEditFeaturesOpen(true);
  const handleCloseEditFeatures = () => setIsEditFeaturesOpen(false);

  const [isEditCustomerTalkOpen, setIsEditCustomerTalkOpen] = useState(false);
  const handleEditCustomerTalkOpen = () => setIsEditCustomerTalkOpen(true);
  const handleCloseEditCustomerTalk = () => setIsEditCustomerTalkOpen(false);

  const [isEditCTAOpen, setIsEditCTAOpen] = useState(false);
  const handleEditCTAOpen = () => setIsEditCTAOpen(true);
  const handleCloseEditCTA = () => setIsEditCTAOpen(false);

  const data = [
    {
      index: "1",
      session: "Hero Banner",
      edit: (
        <>
          <AiOutlineEdit
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleEditHeroBannerOpen}
          />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
    },
    {
      index: "2",
      session: "Hero Banner",
      edit: (
        <>
          <AiOutlineEdit
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleEditHeroBannerOpen}
          />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
    },
    {
      index: "3",
      session: "Về chúng tôi",
      edit: (
        <>
          <AiOutlineEdit
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleEditAboutUsOpen}
          />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
    },
    {
      index: "4",
      session: "Dịch vụ",
      edit: (
        <>
          <AiOutlineEdit
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleEditHeroBannerOpen}
          />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
    },
    {
      index: "5",
      session: "Đặc điểm nổi bật của Apolo Lawyers",
      edit: (
        <>
          <AiOutlineEdit
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleEditFeaturesOpen}
          />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
    },
    {
      index: "6",
      session: "Khách hàng nói gì về Apolo Lawyers",
      edit: (
        <>
          <AiOutlineEdit
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleEditCustomerTalkOpen}
          />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
    },
    {
      index: "7",
      session: "Tin tức mới nhất",
      edit: (
        <>
          <AiOutlineEdit className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
    },
    {
      index: "8",
      session: "CTA",
      edit: (
        <>
          <AiOutlineEdit
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleEditCTAOpen}
          />
        </>
      ),
      delete: (
        <>
          <RiDeleteBin5Line className="w-[24px] h-[24px] cursor-pointer" />
        </>
      ),
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChanges}
        pagination={false}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
      <EditHeroBanner
        isOpen={isEditHeroBannerOpen}
        onClose={handleCloseEditHeroBanner}
      />
      <EditAboutUs
        isOpen={isEditAboutUsOpen}
        onClose={handleCloseEditAboutUs}
      />
      <EditFeatures
        isOpen={isEditFeaturesOpen}
        onClose={handleCloseEditFeatures}
      />
      <EditCustomerTalk
        isOpen={isEditCustomerTalkOpen}
        onClose={handleCloseEditCustomerTalk}
      />
      <EditCTA isOpen={isEditCTAOpen} onClose={handleCloseEditCTA} />
    </div>
  );
}
