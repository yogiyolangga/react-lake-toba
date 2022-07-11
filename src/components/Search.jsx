import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

export const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-4'>
        <div className='flex flex-col p-2 border rounded-md shadow-xl lg:col-span-2 justify-evenly'>
            <div>
                <h1>Enjoy your life and be happy</h1>
                <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, beatae eligendi. Voluptate at sint blanditiis, dolor officiis commodi sunt, debitis ducimus ipsam, illo illum. Tempora dolore aut provident labore cum. Impedit odit eius commodi minima mollitia rerum laudantium accusantium expedita?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nesciunt odit at accusantium a beatae reprehenderit, cumque eos veniam.</p>
            </div>
            <div className='grid grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col items-center text-center lg:flex-row'>
                    <button><RiCustomerService2Fill size={50}  /></button>
                    <div>
                        <h3 className='py-2'>Leading Service</h3>
                        <p className='lg:pl-2'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center text-center lg:flex-row'>
                    <button><MdOutlineTravelExplore size={50} /></button>
                    <div>
                        <h3 className='py-2'>Booking</h3>
                        <p className='lg:pl-2'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <div className='flex flex-col items-center p-4 mb-3 border rounded-md shadow-md'>
                <h3 className='text-center'>Lorem ipsum dolor sit.</h3>
                <h3 className='text-center'>Lorem ipsum dolor.</h3>
                <h3 className='text-center bg-slate-700 text-white w-[98%]'>PESAN SEKARANG</h3>
            </div>
            <form className='flex flex-col px-1' action="/">
                <div>
                    <label className='' htmlFor="destination">Destination</label>
                    <select name="destination" id="destination" className='w-full h-10 border rounded-lg shadow-md border-slate-400'>
                        <option value="sipiso-piso">Sipiso-piso</option>
                        <option value="tongging">Tongging</option>
                        <option value="silalahi">Silalahi</option>
                        <option value="paropo">Paropo</option>
                    </select>
                </div>
                <div className='py-2'>
                    <label className='' htmlFor="awal-jalan">Awal Jalan</label>
                    <input type="date" id='awal-jalan' name='awal-jalan' className='w-full h-10 border rounded-lg shadow-md border-slate-400' />
                </div>
                <div>
                    <label className='' htmlFor="pulang">Pulang</label>
                    <input type="date" id='pulang' name='pulang' className='w-full h-10 border rounded-lg shadow-md border-slate-400' />
                </div>
                <button className='mt-4'>Order</button>
            </form>
        </div>
        <div>
        </div>
    </div>
  )
}
