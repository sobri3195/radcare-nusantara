import React from 'react';
export default function Select({children,...props}:any){return <div className='card' {...props}>{children||'Select'}</div>}
