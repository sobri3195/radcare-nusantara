import React from 'react';
export default function AppLayout({children,...props}:any){return <div className='card' {...props}>{children||'AppLayout'}</div>}
