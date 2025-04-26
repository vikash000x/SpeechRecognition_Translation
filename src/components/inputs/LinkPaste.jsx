import React from 'react'
import { IconLink } from '@tabler/icons-react'


const LinkPaste = ({handleLinkPaste}) => {
  return (
   <>
   <label htmlFor='link-paste' className='cursor-pointer'>
     <IconLink size={21}/>
     <input
      id='link-paste'
      type='text'
      className='hidden'
      onChange={handleLinkPaste}
     />
    </label>
   </>
  )
}

export default LinkPaste