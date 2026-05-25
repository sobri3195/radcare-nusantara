import React from 'react';
export default function ChatBubble({children,...props}:any){return <div className='card' {...props}>{children||'ChatBubble'}</div>}
