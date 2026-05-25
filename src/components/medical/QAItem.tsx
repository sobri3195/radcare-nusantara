import React from 'react';
export default function QAItem({children,...props}:any){return <div className='card' {...props}>{children||'QAItem'}</div>}
