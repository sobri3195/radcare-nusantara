import React from 'react';
export default function Badge({children,...props}:any){return <div className='card' {...props}>{children||'Badge'}</div>}
