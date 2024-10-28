import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex items-center justify-center bg-gray-100 p-6'>
      <div className='text-center space-y-6'>
        <h1 className='text-5xl font-bold text-gray-800'>404</h1>
        <p className='text-lg text-gray-600'>
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          href='/'
          className='inline-block px-6 py-3 rounded-lg bg-slate-600 text-white text-sm font-semibold shadow-md hover:bg-slate-600 transition duration-300'
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
