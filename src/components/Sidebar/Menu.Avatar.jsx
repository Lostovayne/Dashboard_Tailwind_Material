import {
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline'
import {
    Avatar,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography
} from '@material-tailwind/react'

export default function MenuAvatar() {
    return (
        <Menu>
            <MenuHandler>
                <Avatar
                    size='sm'
                    variant='circular'
                    alt='candice wu'
                    className='cursor-pointer'
                    src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                />
            </MenuHandler>
            <MenuList>
                <MenuItem className='flex items-center gap-2'>
                    <UserCircleIcon strokeWidth={2} className='h-4 w-4' />
                    <Typography variant='small' className='font-normal'>
                        My Profile
                    </Typography>
                </MenuItem>
                <MenuItem className='flex items-center gap-2'>
                    <Cog6ToothIcon strokeWidth={2} className='h-4 w-4' />
                    <Typography variant='small' className='font-normal'>
                        Edit Profile
                    </Typography>
                </MenuItem>
                <MenuItem className='flex items-center gap-2'>
                    <InboxArrowDownIcon strokeWidth={2} className='h-4 w-4' />
                    <Typography variant='small' className='font-normal'>
                        Inbox
                    </Typography>
                </MenuItem>
                <MenuItem className='flex items-center gap-2'>
                    <LifebuoyIcon strokeWidth={2} className='h-4 w-4' />
                    <Typography variant='small' className='font-normal'>
                        Help
                    </Typography>
                </MenuItem>
                <hr className='my-2 border-blue-gray-50' />
                <MenuItem className='flex items-center gap-2 '>
                    <PowerIcon strokeWidth={2} className='h-4 w-4' />
                    <Typography variant='small' className='font-normal'>
                        Sign Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
