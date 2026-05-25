import React from 'react';
export default function RoleSwitcher({children,...props}:any){return <div className='card' {...props}>{children||'RoleSwitcher'}</div>}
