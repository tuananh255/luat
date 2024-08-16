import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Table } from "antd";
import EditHeroBanner from "../Edits/Review/EditHeroBanner/EditHeroBanner";
import EditAboutUs from "../Edits/Review/EditAboutUs/EditAboutUs";
import EditFeatures from "../Edits/Review/EditFeatures/EditFeatures";
import EditCustomerTalk from "../Edits/Review/EditCustomerTalk/EditCustomerTalk";
import EditCTA from "../Edits/Review/EditCTA/EditCTA";
import { useState } from "react";
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
      session: "Đội ngũ chúng tôi",
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
      index: "3",
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
      index: "4",
      session: "Giá trị tạo nên sự khác biệt",
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
      index: "5",
      session: "Cam kết của chúng tôi",
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
      index: "6",
      session: "Thành tựu",
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
      index: "7",
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
