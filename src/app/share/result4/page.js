import Head from "next/head";
import Image from 'next/image';
import result4 from '@/../public/4.result/result-4.png';
import circle1Img from '@/../public/0.start/blur-circle-1.png';
import Link from "next/link";

export default function ShareResult1() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Image className="w-[640px] h-[640px] absolute bottom-0 translate-y-1/2 pointer-events-none z-0" src={circle1Img} alt="circle1Img" />
          
        <Image className="flex justify-center w-[300px] h-auto mb-[16px] z-10" src={result4} alt='result4'/>

        <Link href={"https://pt-hw-dorothys-projects-0d99ad2e.vercel.app/"}
        className="w-auto rounded-full text-black border-[0.5px]
                    p-[12px] text-s flex justify-center items-center font-normal
                    shadow-md cursor-pointer hover:translate-y-0.5 transition z-10"
        style={{
          background:
          'linear-gradient(to bottom, rgba(255,255,255,1.0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,1.0) 100%)',
        }}
        >
          點我進入測驗！
        </Link>
      </div>
    </>
  );
}