import React from 'react'
import { useSelector } from 'react-redux';
import { LuLoader2 } from "react-icons/lu";

export default function Loader() {
    const setLoader = useSelector(store => store.appSlice.setLoader);
  return (
    <div className={`${setLoader? 'flex' : 'hidden'} gap-1 text-black fixed inset-0 flex items-center justify-center`}>
        <div className='animate-spin text-2xl'>
            <LuLoader2/>
        </div>
        <span>Loading</span>
    </div>
  )
}
