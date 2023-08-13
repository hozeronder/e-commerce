import React from 'react'

const Footer = ({isSmallScreen})  => {
    return isSmallScreen ?  (
        <div id="contact" className='h-56 mt-10 my-5 mx-5 flex background-footer rounded-xl'>Footer</div>
    ) : (
        <div id="contact" className='h-56 mt-28 my-5 mx-20 flex background-footer rounded-xl'>Footer</div>
    )
}
export default Footer
