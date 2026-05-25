type Props = {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDialog({ open, title, description, confirmText = 'Konfirmasi', cancelText = 'Batal', onConfirm, onCancel }: Props) {
  if (!open) return null;
  return (
    <div className='fixed inset-0 z-50 grid place-items-center bg-slate-900/40 p-4 backdrop-blur-sm'>
      <div className='w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl'>
        <h3 className='text-lg font-bold text-slate-900'>{title}</h3>
        <p className='mt-2 text-sm text-slate-600'>{description}</p>
        <div className='mt-5 flex gap-2'>
          <button onClick={onCancel} className='h-11 flex-1 rounded-xl border border-slate-200 font-medium'>
            {cancelText}
          </button>
          <button onClick={onConfirm} className='h-11 flex-1 rounded-xl bg-rose-600 font-medium text-white'>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
