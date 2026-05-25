import React from 'react';
export default function Card({children,...props}:any){return <div className='card' {...props}>{children||'Card'}</div>}
