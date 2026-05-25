import React from 'react';
export default function Textarea({children,...props}:any){return <div className='card' {...props}>{children||'Textarea'}</div>}
