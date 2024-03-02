'use client'
import { Link } from 'react-scroll'
import React, { useEffect, useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import SidebarComponent from '../Sidebar';
import { navbarData } from '@/utils/constants';
import ModalComponent from '../Modal';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setOpenModal(true);
        }, 5000); 
    
        return () => clearTimeout(timeout);
      }, []);

    const handleSidebarVisiblity = () => {
        setSidebar((prev) => !prev);
      };
  return (
    <nav className='flex justify-around p-4 pt-7 w-screen fixed z-50 h-24 bg-white'>
        <Link to='home' className='-mt-3 lg:ml-0 md:-ml-28'>
            <img src='/logo.png' className='h-12 w-22 -ml-2' />
            <span className='font-extrabold font-mono text-blue-900 text-lg -ml-3'> Developers </span>
        </Link>

        <div className='lg:flex hidden gap-4 font-semibold mt-2'>
            {
                navbarData.map((data) => (
                    <Link key={data.title} to={data.name.toLowerCase()} className='ease-in-out duration-300 hover:scale-110'>
                        {data.name.toUpperCase()}
                    </Link>
                ))
            }
        </div>

        <div className='lg:block hidden'>
            <button onClick={() => setOpenModal(true)} className='bg-blue-gradient md:mt-1 text-white p-2 pl-4 pr-4 rounded-lg filter hover:brightness-75'>
                GET QUOTE
            </button>
        </div>

        <button className="lg:hidden mt-2 lg:mr-0 md:-mr-24" onClick={handleSidebarVisiblity}>
            <RxHamburgerMenu className={`${!sidebar ? 'block':'hidden'} text-4xl`} />
            <RxCross1 className={`${sidebar ? 'block':'hidden'} text-4xl`}  />
        </button>

        {sidebar && <SidebarComponent />}
        {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}

    </nav>
  )
}

export default Navbar