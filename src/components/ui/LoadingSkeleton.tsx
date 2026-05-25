import React from 'react';
export default function LoadingSkeleton({children,...props}:any){return <div className='card' {...props}>{children||'LoadingSkeleton'}</div>}
