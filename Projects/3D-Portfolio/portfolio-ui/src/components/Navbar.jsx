import  { useState } from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* logo */}
        <Link to={'/'} className='flex items-center gap-2' onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className="text-white text-xl font-bold cursor-pointer">Aakash</p>
        </Link>

        {/* large screen nav links */}
        <ul className=" hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-lg font-medium cursor-pointer transition-colors `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="">{link.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile screen navbar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className='h-7 w-7 cursor-pointer object-contain ' onClick={() => setToggle(!toggle)} />

          <div className={`${toggle ? 'flex' : 'hidden'
            }  p-6  black-gradient absolute z-10 top-20 rounded-xl `}>
            <ul className=" flex flex-col justify-end items-start gap-1">
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-lg font-medium cursor-pointer transition-colors  `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`} className="">{link.title}</a>
                </li>
              ))}
            </ul>

          </div>
        </div>

      </div>



    </nav>
  )
}

export default Navbar