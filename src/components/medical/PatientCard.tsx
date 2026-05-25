import React from 'react';
export default function PatientCard({children,...props}:any){return <div className='card' {...props}>{children||'PatientCard'}</div>}
