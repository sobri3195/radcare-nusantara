import React from 'react';
export default function BottomNav({children,...props}:any){return <div className='card' {...props}>{children||'BottomNav'}</div>}
