import { Tabs ,Table} from 'antd';
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
const onChange = (key) => {
  console.log(key);
};
const onChanges = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const columns = [
  {
    title: 'App ID',
    dataIndex: 'id',
  },
  {
    title: 'OA ID',
    dataIndex: 'oa',
  },
  {
    title: 'Secret key',
    dataIndex: 'secret',
  },
  {
    title: 'Access Token',
    dataIndex: 'access',
  },
  {
    title: 'Refresh Token',
    dataIndex: 'refresh',
  },
  {
    title: '',
    dataIndex: 'delete',
  },
];
const data = [
  {
    id: '9876ab54cde',
    oa: '0987654321',
    secret: "abc123def456ghi789jkl",
    access: "abc123def456ghi789jkl",
    refresh: 'abc123def456ghi789jkl',
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
  {
    id: '9876ab54cde',
    oa: '0987654321',
    secret: "abc123def456ghi789jkl",
    access: "abc123def456ghi789jkl",
    refresh: 'abc123def456ghi789jkl',
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
  {
    id: '9876ab54cde',
    oa: '0987654321',
    secret: "abc123def456ghi789jkl",
    access: "abc123def456ghi789jkl",
    refresh: 'abc123def456ghi789jkl',
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
  {
    id: '9876ab54cde',
    oa: '0987654321',
    secret: "abc123def456ghi789jkl",
    access: "abc123def456ghi789jkl",
    refresh: 'abc123def456ghi789jkl',
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
  {
    id: '9876ab54cde',
    oa: '0987654321',
    secret: "abc123def456ghi789jkl",
    access: "abc123def456ghi789jkl",
    refresh: 'abc123def456ghi789jkl',
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
  {
    id: '9876ab54cde',
    oa: '0987654321',
    secret: "abc123def456ghi789jkl",
    access: "abc123def456ghi789jkl",
    refresh: 'abc123def456ghi789jkl',
    delete:(
      <>
        <RiDeleteBin5Line className='w-[24px] h-[24px] cursor-pointer'/>
      </>
    ),
  },
];
const items = [
  {
    key: '1',
    label: 'OA Zalo',
    children: (
      <>
        <div className="">
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChanges}
            pagination={false}
            showSorterTooltip={{
              target: 'sorter-icon',
              
            }}
          />
          <div className="w-fit mt-3">
            <ButtonCustom title='Thêm mới' text="text-white" to='#48d1cc' from='#40e0d0' />
          </div>
        </div>
      </>
    ),
  },
  {
    key: '2',
    label: 'Facebook',
    children: (
      <>
        <div className="">
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChanges}
            pagination={false}
            showSorterTooltip={{
              target: 'sorter-icon',
              
            }}
          />
          <div className="w-fit mt-3">
            <ButtonCustom title='Thêm mới' text="text-white" to='#48d1cc' from='#40e0d0' />
          </div>
        </div>
      </>
    ),
  },
];

export default function Api() {
  return (
    <div className='px-[40px]'>
      <div className="h-14 pt-6 justify-start items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-1.5 inline-flex">
          <div className="self-stretch text-[#002740] text-2xl font-bold font-space-grotesk leading-loose">Plugin</div>
        </div>
      </div>
      <div className="mt-3">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  )
}
