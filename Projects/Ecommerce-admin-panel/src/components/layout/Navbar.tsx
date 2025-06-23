import { Input } from '../ui/input'
import { BellIcon,  Menu,  MoonIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useSidebar } from '../ui/sidebar'

const Navbar = () => {
  const {toggleSidebar} = useSidebar();
  return (
    <nav className="px-5 py-2 border-b h-14 fixed top-0 w-full bg-white">
      <div className="flex justify-between items-center">
        <div className="logo flex items-center gap-3">
          <span className="logo-icon  md:hidden"><Menu onClick={toggleSidebar} className='w-5 h-auto cursor-pointer'/></span>
          <h2 className="text-lg font-bold">Admin</h2>
        </div>
        <div className="flex items-center gap-3">
          <Input placeholder='Search' className='w-28 focus-visible:ring-1 focus:border-0  bg-[#F0F2F5]' />
          <button className="notification  bg-primary rounded-full p-1 text-black ">
            <BellIcon className='h-5 w-auto' />
          </button>
          <button className='theme-toggler bg-primary rounded-full p-1 text-black '>
            <MoonIcon className='h-5 w-auto' />
          </button>
          <Avatar className='h-7 w-auto'>
            <AvatarImage src="/images/avatar.png" />
            <AvatarFallback>avatar</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}

export default Navbar