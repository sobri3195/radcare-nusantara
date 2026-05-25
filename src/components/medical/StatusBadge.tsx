import React from 'react';
export default function StatusBadge({children,...props}:any){return <div className='card' {...props}>{children||'StatusBadge'}</div>}
