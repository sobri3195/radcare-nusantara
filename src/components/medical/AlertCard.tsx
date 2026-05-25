import React from 'react';
export default function AlertCard({children,...props}:any){return <div className='card' {...props}>{children||'AlertCard'}</div>}
