import React from 'react';
export default function Timeline({children,...props}:any){return <div className='card' {...props}>{children||'Timeline'}</div>}
