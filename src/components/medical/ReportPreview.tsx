import React from 'react';
export default function ReportPreview({children,...props}:any){return <div className='card' {...props}>{children||'ReportPreview'}</div>}
