import { Tabs } from "antd";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import Home from "../../components/home/Home";
import Review from "../../components/review/Review";
import Service from "../Service/Service";
import { useState } from "react";
import AddService from "../../components/Services/AddService";
import Recruitment from "../Recruitment/Recruitment";
import AddRecruitment from "../../components/Edits/Recruitment/AddRecruitment";
import AddHumanResources from "../../components/Edits/HumanResources/AddHumanResources";
import HumanResources from "../HumanResources/HumanResources";
import Post from "../Post/Post";
import AddPost from "../../components/Edits/Post/AddPost";
export default function Content() {
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
  const handleAddServiceOpen = () => setIsAddServiceOpen(true);
  const handleCloseAddService = () => setIsAddServiceOpen(false);

  const [isAddRecruitmentOpen, setIsAddRecruitmentOpen] = useState(false);
  const handleAddRecruitmentOpen = () => setIsAddRecruitmentOpen(true);
  const handleCloseAddRecruitment = () => setIsAddRecruitmentOpen(false);

  const [isAddHumanResourcesOpen, setIsAddHumanResourcesOpen] = useState(false);
  const handleAddHumanResourcesOpen = () => setIsAddHumanResourcesOpen(true);
  const handleCloseAddHumanResources = () => setIsAddHumanResourcesOpen(false);

  const [isAddPostOpen, setIsAddPostOpen] = useState(false);
  const handleAddPostOpen = () => setIsAddPostOpen(true);
  const handleCloseAddPost = () => setIsAddPostOpen(false);
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Trang chủ",
      children: (
        <>
          <Home />
        </>
      ),
    },
    {
      key: "2",
      label: "Giới thiệu",
      children: (
        <>
          <Review />/
        </>
      ),
    },
    {
      key: "3",
      label: "Dịch vụ",
      children: (
        <>
          <div className="h-[296px] w-full flex-col justify-start items-start gap-6 inline-flex">
            <Service />
            <div className="w-fit" onClick={handleAddServiceOpen}>
              <ButtonCustom
                title="Thêm mới"
                text="text-white"
                to="#48d1cc"
                from="#40e0d0"
              />
            </div>
            <AddService
              isOpen={isAddServiceOpen}
              onClose={handleCloseAddService}
            />
          </div>
        </>
      ),
    },
    {
      key: "4",
      label: "Tuyền dụng",
      children: (
        <>
          <div className="h-[296px] w-full flex-col justify-start items-start gap-6 inline-flex">
            <Recruitment />
            <div className="w-fit" onClick={handleAddRecruitmentOpen}>
              <ButtonCustom
                title="Thêm vị trí tuyển dụng"
                text="text-white"
                to="#48d1cc"
                from="#40e0d0"
              />
            </div>
            <AddRecruitment
              isOpen={isAddRecruitmentOpen}
              onClose={handleCloseAddRecruitment}
            />
          </div>
        </>
      ),
    },
    {
      key: "5",
      label: "Nhân sự",
      children: (
        <>
          <div className="h-[296px] w-full flex-col justify-start items-start gap-6 inline-flex">
            <HumanResources />
            <div className="w-fit" onClick={handleAddHumanResourcesOpen}>
              <ButtonCustom
                title="Thêm mới"
                text="text-white"
                to="#48d1cc"
                from="#40e0d0"
              />
            </div>
            <AddHumanResources
              isOpen={isAddHumanResourcesOpen}
              onClose={handleCloseAddHumanResources}
            />
          </div>
        </>
      ),
    },
    {
      key: "6",
      label: "Bài viết",
      children: (
        <>
          <div className="h-[296px] w-full flex-col justify-start items-start gap-6 inline-flex">
            <Post />
            <div className="w-fit" onClick={handleAddPostOpen}>
              <ButtonCustom
                title="Thêm mới"
                text="text-white"
                to="#48d1cc"
                from="#40e0d0"
              />
            </div>
            <AddPost isOpen={isAddPostOpen} onClose={handleCloseAddPost} />
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="px-[40px]">
        <div className="h-14 pt-6 justify-start items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-1.5 inline-flex">
            <div className="self-stretch text-[#002740] text-2xl font-bold font-space-grotesk leading-loose">
              Nội dung
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </>
  );
}
