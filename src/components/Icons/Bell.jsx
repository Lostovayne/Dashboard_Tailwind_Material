import { ClockIcon } from '@heroicons/react/24/outline'
import { BellIcon } from '@heroicons/react/24/solid'
import {
    Avatar,
    IconButton,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography
} from '@material-tailwind/react'

export default function Bell() {
    return (
        <Menu>
            <MenuHandler>
                <IconButton variant='text'>
                    <BellIcon className='h-5 w-5 text-blue-gray-800' />
                </IconButton>
            </MenuHandler>
            <MenuList className='flex flex-col gap-2'>
                <MenuItem className='flex items-center gap-4 py-2 pr-8 pl-2'>
                    <Avatar
                        variant='circular'
                        alt='candice wu'
                        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                    />
                    <div className='flex flex-col gap-1'>
                        <Typography
                            variant='small'
                            color='gray'
                            className='font-normal'>
                            <span className='font-medium text-blue-gray-900'>
                                Wu
                            </span>{' '}
                            send you a message
                        </Typography>
                        <Typography
                            variant='small'
                            className='flex items-center gap-1 text-xs text-gray-600'>
                            <ClockIcon className='h-3 w-3' />
                            13 minutes ago
                        </Typography>
                    </div>
                </MenuItem>
                <MenuItem className='flex items-center gap-4 py-2 pr-8 pl-2'>
                    <Avatar
                        variant='circular'
                        alt='natali craig'
                        src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80'
                    />
                    <div className='flex flex-col gap-1'>
                        <Typography
                            variant='small'
                            color='gray'
                            className='font-normal'>
                            <span className='font-medium text-blue-gray-900'>
                                Natali
                            </span>{' '}
                            reply to your email
                        </Typography>
                        <Typography
                            variant='small'
                            className='flex items-center gap-1 text-xs text-gray-600'>
                            <ClockIcon className='h-3 w-3' />a hour ago
                        </Typography>
                    </div>
                </MenuItem>
                <MenuItem className='flex items-center gap-4 py-2 pr-8 pl-2'>
                    <Avatar
                        variant='circular'
                        alt='paypal'
                        src='https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png'
                    />
                    <div className='flex flex-col gap-1'>
                        <Typography
                            variant='small'
                            color='gray'
                            className='font-normal'>
                            <span className='font-medium text-blue-gray-900'>
                                PayPal
                            </span>{' '}
                            you&apos;ve received a payment.
                        </Typography>
                        <Typography
                            variant='small'
                            className='flex items-center gap-1 text-xs text-gray-600'>
                            <ClockIcon className='h-3 w-3' />5 hours ago
                        </Typography>
                    </div>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
