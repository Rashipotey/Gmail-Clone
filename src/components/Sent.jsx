import React from 'react'
import { sentOpen } from '../redux/appSlice';
import Messages from './Messages';
import { useDispatch, useSelector } from 'react-redux';
import { setLoaderComp } from '../redux/appSlice';


export default function inbox() {

  return (
    <div className={'flex-1 bg-white rounded-xl mx-6 '}>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center ga-2 text-gray-700 py-2'>
          <div className='flex items-center gap-1'>
           
           
           </div>
           
           
        </div>
        
      </div>
      <div className='h-[90vh] overflow-y-auto'>
        <Messages/>
      </div>
    </div>
  )
}
