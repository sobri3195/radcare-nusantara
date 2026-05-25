import React from 'react';
export default function ProgressBar({children,...props}:any){return <div className='card' {...props}>{children||'ProgressBar'}</div>}
