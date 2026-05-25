import { CheckCircle2, X } from 'lucide-react';

type Props = { message: string; onClose?: () => void };

export default function ToastNotification({ message, onClose }: Props) {
  return (
    <div className='fixed bottom-24 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white/95 p-3 shadow-2xl backdrop-blur sm:bottom-6'>
      <div className='flex items-start gap-2'>
        <CheckCircle2 className='mt-0.5 h-5 w-5 text-emerald-600' />
        <p className='flex-1 text-sm font-medium text-slate-700'>{message}</p>
        {onClose && <button onClick={onClose} className='rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700'><X className='h-4 w-4' /></button>}
      </div>
    </div>
  );
}
