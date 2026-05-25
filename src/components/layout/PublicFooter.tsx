import React from 'react';
export default function PublicFooter({children,...props}:any){return <div className='card' {...props}>{children||'PublicFooter'}</div>}
