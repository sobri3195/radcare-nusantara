import React from 'react';
export default function PublicLayout({children,...props}:any){return <div className='card' {...props}>{children||'PublicLayout'}</div>}
