import MenuPage from '../MenuPage/MenuPage'

export default function Layout({children}) {
  return (
    <>
        <div className="h-[100vh]">
            <div className='flex justify-center'>
                <div className='w-[244px] h-[100vh]'>
                    <MenuPage/>
                </div>
                <div className='w-[1019px]'>
                    {children}
                </div>
            </div> 
        </div>
    </>
  )
}
