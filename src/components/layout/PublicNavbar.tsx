import React from 'react';
export default function PublicNavbar({children,...props}:any){return <div className='card' {...props}>{children||'PublicNavbar'}</div>}
