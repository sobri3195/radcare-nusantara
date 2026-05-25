import React from 'react';
export default function Tabs({children,...props}:any){return <div className='card' {...props}>{children||'Tabs'}</div>}
