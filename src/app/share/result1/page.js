import Head from "next/head";
import Image from 'next/image';
import result1 from '@/../public/4.result/result-1.png';

export default function ShareResult1() {
  return (
    <>
      <Image className="flex justify-center w-[260px] h-auto mb-[16px]" src={result1} alt='result1' />
    </>
  );
}
