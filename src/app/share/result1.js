import Head from "next/head";
import Image from 'next/image';

export default function ShareResult1() {
  return (
    <>
      <Image className="flex justify-center w-[260px] h-auto mb-[16px]" src={result1} alt='result1' />

    </>
  );
}
