import React from 'react';
export default function Button({children,...props}:any){return <div className='card' {...props}>{children||'Button'}</div>}
