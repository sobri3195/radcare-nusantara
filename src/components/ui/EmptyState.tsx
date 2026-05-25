import React from 'react';
export default function EmptyState({children,...props}:any){return <div className='card' {...props}>{children||'EmptyState'}</div>}
