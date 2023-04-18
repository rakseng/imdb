'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='text-center mt-10 '>
      <h1 className='text-lg font-bold mb-3'>Something went wrong!</h1>
      <button className='hover:text-white hover:font-bold rounded-full p-2 bg-amber-600  ' onClick={()=>reset()}>Try Again</button>
    </div>
  );
}
