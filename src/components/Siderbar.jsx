import React from 'react';
import { assets } from "../assets/assets";

const Sidebar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around p-2'>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} alt="Home icon" />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} alt="Search icon" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded p-4'>
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} alt='Library icon' />
                        <p className='font-semibold'>Tu Biblioteca</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt='Arrow icon' />
                        <img className='w-5' src={assets.plus_icon} alt='Plus icon' />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1'>
                    <h1>Crea tu primera playlist</h1>
                    <p className='font-light'>Es fácil, nosotros te ayudaremos</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Crear nueva playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4'>
                    <h1>Busquemos algún podcast para seguir</h1>
                    <p className='font-light'>Te mantendremos informados sobre nuevos episodios</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Buscar podcast</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
