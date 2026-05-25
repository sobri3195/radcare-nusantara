import React from 'react';
export default function DashboardLayout({children,...props}:any){return <div className='card' {...props}>{children||'DashboardLayout'}</div>}
