'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import star from '@/../public/1.question/star.png';
import bg from '@/../public/0.start/bgimage.png';
import ice from '@/../public/0.start/icecube1.png';
import ice2 from '@/../public/0.start/icecube2.png';

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='w-full h-full bg-center bg-cover flex flex-col justify-baseline items-center p-[44px] gap-[200px]'>
        <Image className='absolute w-full h-full z-0' src={bg} alt='bg' />
        <Image className='w-[120px] h-[120px] animate__animated animate__shakeY animate__infinite'
          style={{
            position: 'absolute',
            top: '260px',
            left: '20px',
            zIndex: 10,
            animationDuration: '6s',
          }}
          src={ice} alt='ice' />

          <Image className='w-[120px] h-[120px] animate__animated animate__shakeY animate__infinite'
          style={{
            position: 'absolute',
            top: '420px',
            left: '280px',
            zIndex: 10,
            animationDuration: '6s',
            animationDelay: '0.5s',
          }}
          src={ice2} alt='ice' />

          <Image className='w-[120px] h-[120px] animate__animated animate__shakeY animate__infinite'
          style={{
            position: 'absolute',
            top: '540px',
            left: '80px',
            zIndex: 10,
            animationDuration: '6s',
            animationDelay: '1s',
          }}
          src={ice} alt='ice' />

          <div className='w-full h-[30px] flex items-center justify-center mt-[20px]'>
            <Image src={star} alt="star" className="w-[22px] h-[22px]" />
            <div className="flex-1 h-[1px] bg-black mx-[4px]" />
            <div className='text-black font-regular tracking-widest text-[20px]'>顯示我的舒壓酒精</div>
            <div className="flex-1 h-[1px] bg-black mx-[4px]" />
            <Image src={star} alt="star" className="w-[22px] h-[22px]" />
          </div>
          
          <div className={`w-[138px] rounded-full text-black px-[32px] py-[10px] text-[18px]
            border-[0.5px] flex justify-center items-center font-light mt-32
            cursor-pointer hover:translate-y-0.5 transition z-10`}
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,1.0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,1.0) 100%)'
            }}
            onClick={nextStep}
          > 查看結果 </div>
        </div>
      </MobileFrame>
    </>
  );
}