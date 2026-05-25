export default function AvatarInitials({ name }: { name: string }) {
  const initials = name.split(' ').map((x) => x[0]).slice(0, 2).join('').toUpperCase();
  return <div className='flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 text-xs font-bold text-white shadow'>{initials}</div>;
}
