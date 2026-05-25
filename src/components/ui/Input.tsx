import React from 'react';
export default function Input({children,...props}:any){return <div className='card' {...props}>{children||'Input'}</div>}
