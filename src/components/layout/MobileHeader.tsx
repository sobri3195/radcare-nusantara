import React from 'react';
export default function MobileHeader({children,...props}:any){return <div className='card' {...props}>{children||'MobileHeader'}</div>}
