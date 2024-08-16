import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Table } from 'antd';

const columns = [
  {
    title: 'Tên Plugin',
    dataIndex: 'title',
  },
  {
    title: 'Loại Plugin',
    dataIndex: 'type',
  },
  {
    title: 'Phiên bản',
    dataIndex: 'session',
  },
  {
    title: 'Ngày cập nhật cuối',
    dataIndex: 'updateEnd',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'trangthai',
  },
  {
    title: '',
    dataIndex: 'edit',
  },
  {
    title: '',
    dataIndex: 'delete',
  },
];
const data = [
  {
    title: 'SEO Schema',
    type: "Schema Plugin",
    session: '1.4.2',
    updateEnd:"2024-09-29",
    trangthai:(
      <>
        <span className='text-green-500 text-sm font-normal font-open-sans leading-tight'>Đang hoạt động</span>
      </>
    ),
    edit:(
      <>
        <AiOutlineEdit className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
  {
    title: 'SEO Schema',
    type: "Schema Plugin",
    session: '1.4.2',
    updateEnd:"2024-09-29",
    trangthai:(
      <>
        <span className='text-green-500 text-sm font-normal font-open-sans leading-tight'>Đang hoạt động</span>
      </>
    ),
    edit:(
      <>
        <AiOutlineEdit className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
  {
    title: 'SEO Schema',
    type: "Schema Plugin",
    session: '1.4.2',
    updateEnd:"2024-09-29",
    trangthai:(
      <>
        <span className='text-green-500 text-sm font-normal font-open-sans leading-tight'>Đang hoạt động</span>
      </>
    ),
    edit:(
      <>
        <AiOutlineEdit className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
  {
    title: 'SEO Schema',
    type: "Schema Plugin",
    session: '1.4.2',
    updateEnd:"2024-09-29",
    trangthai:(
      <>
        <span className='text-green-500 text-sm font-normal font-open-sans leading-tight'>Đang hoạt động</span>
      </>
    ),
    edit:(
      <>
        <AiOutlineEdit className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
  {
    title: 'SEO Schema',
    type: "Schema Plugin",
    session: '1.4.2',
    updateEnd:"2024-09-29",
    trangthai:(
      <>
        <span className='text-green-500 text-sm font-normal font-open-sans leading-tight'>Đang hoạt động</span>
      </>
    ),
    edit:(
      <>
        <AiOutlineEdit className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
];
const onChanges = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
export default function Plugin() {
  return (
    <div className='px-[40px]'>
      <div className="h-20 py-6 justify-start items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-1.5 inline-flex">
          <div className="self-stretch text-[#002740] text-2xl font-bold font-space-grotesk leading-loose">Plugin</div>
        </div>
      </div>
      <div className="px-8">
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChanges}
        pagination={false}
        showSorterTooltip={{
          target: 'sorter-icon',
          
        }}
      />
      </div>
    </div>
  )
}
