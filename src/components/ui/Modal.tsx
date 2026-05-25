import React from 'react';
export default function Modal({children,...props}:any){return <div className='card' {...props}>{children||'Modal'}</div>}
