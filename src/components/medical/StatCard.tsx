import React from 'react';
export default function StatCard({children,...props}:any){return <div className='card' {...props}>{children||'StatCard'}</div>}
