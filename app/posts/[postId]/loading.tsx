export default function Loading() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='flex space-x-2'>
        <div className='h-4 w-4 rounded-full bg-slate-600 animate-bounce' />
        <div className='h-4 w-4 rounded-full bg-slate-600 animate-bounce delay-200' />
        <div className='h-4 w-4 rounded-full bg-slate-600 animate-bounce delay-400' />
      </div>
    </div>
  );
}
