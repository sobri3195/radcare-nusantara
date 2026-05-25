import React from 'react';
export default function Sidebar({children,...props}:any){return <div className='card' {...props}>{children||'Sidebar'}</div>}
