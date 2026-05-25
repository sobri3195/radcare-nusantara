import React from 'react';
export default function RoadmapCard({children,...props}:any){return <div className='card' {...props}>{children||'RoadmapCard'}</div>}
