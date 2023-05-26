import { Typography } from '@material-tailwind/react'
import Bell from '../Icons/Bell'
import MenuAvatar from './Menu.Avatar'
import { SidebarResponsive } from './SidebarResponsive'

const Menu = () => {
    return (
        <div className='h-16 bg-white shadow-sm flex justify-between px-5 items-center'>
            <button className='block lg:hidden'>
                <SidebarResponsive />
            </button>
            <Typography variant='lead' className='text-blue-gray-800'>
                Search
            </Typography>
            <div className=''>
                <div className='flex items-center gap-2'>
                    <Bell />
                    <MenuAvatar />
                </div>
            </div>
        </div>
    )
}
export default Menu
