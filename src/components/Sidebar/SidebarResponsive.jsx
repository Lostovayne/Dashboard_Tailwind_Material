import { XMarkIcon } from '@heroicons/react/24/outline'
import {
    Bars3Icon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon
} from '@heroicons/react/24/solid'
import {
    Button,
    Chip,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Typography
} from '@material-tailwind/react'
import React from 'react'

export function SidebarResponsive() {
    const [open, setOpen] = React.useState(false)
    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)

    return (
        <React.Fragment>
            <Button
                className={`${
                    open
                        ? 'hidden'
                        : 'p-1 bg-white shadow-none border-none hover:shadow-none'
                }`}
                onClick={openDrawer}>
                <Bars3Icon className='h-6 w-6 text-black' />
            </Button>
            <Drawer open={open} onClose={closeDrawer}>
                <div className='mb-2 flex items-center justify-between p-4'>
                    <Typography variant='h5' color='blue-gray'>
                        Side Menu
                    </Typography>
                    <IconButton
                        variant='text'
                        color='blue-gray'
                        onClick={closeDrawer}>
                        <XMarkIcon strokeWidth={2} className='h-5 w-5' />
                    </IconButton>
                </div>
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className='h-5 w-5' />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className='h-5 w-5' />
                        </ListItemPrefix>
                        E-Commerce
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className='h-5 w-5' />
                        </ListItemPrefix>
                        Inbox
                        <ListItemSuffix>
                            <Chip
                                value='14'
                                size='sm'
                                variant='ghost'
                                color='blue-gray'
                                className='rounded-full'
                            />
                        </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className='h-5 w-5' />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <Cog6ToothIcon className='h-5 w-5' />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className='h-5 w-5' />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    )
}
