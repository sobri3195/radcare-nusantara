import React from 'react';
export default function RiskBadge({children,...props}:any){return <div className='card' {...props}>{children||'RiskBadge'}</div>}
