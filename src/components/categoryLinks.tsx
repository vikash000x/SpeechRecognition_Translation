/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{ } from 'react'
import { IconBriefcase,IconBulb,IconSchool,IconWriting,IconMoodSmile,IconHeart } from '@tabler/icons-react'

 const categories = [
    {icon:IconBriefcase,label:'Business'},
    {icon:IconBulb,label:'Technology'},
    {icon:IconSchool,label:'Education'},
    {icon:IconWriting,label:'Journalism'},
    {icon:IconMoodSmile,label:'Lifestyle'},
    {icon:IconHeart,label:'Health'}
 ];
const categoryLinks:React.FC = () => {

  return (
    <div className="mt-10 sm:mt-20 ">
      {
        categories.map(({icon:Icon,label})=>(
          <div key={label} className="
          m-1 py-2 px-3 inline-flex items-center gap-x-3 text-sm font-medium rounded-lg  border border-gray-200 shadow-sm hover:bg-gray-500 disabled:pointer-events-none bg-neutral-900 text-white cursor-pointer">
           <Icon size={40} />
           <p className='text-2xl'>{label}</p>
          </div>
        ))
      }
    </div>
  );
}

export default categoryLinks