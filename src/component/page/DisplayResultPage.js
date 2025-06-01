'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import bg from '@/../public/0.start/bgimage.png';
import star from '@/../public/1.question/star.png';

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='w-full h-full bg-center bg-cover flex flex-col justify-baseline items-center p-[44px] gap-[200px]'
        style={{ backgroundImage: `url(${bg.src})` }}>
          <div className='w-full h-[30px] flex items-center justify-center mt-[20px]'>
            <Image src={star} alt="star" className="w-[22px] h-[22px]" />
            <div className="flex-1 h-[1px] bg-black mx-4" />
            <div className='text-black font-medium text-[20px]'>顯示我的舒壓酒精</div>
            <div className="flex-1 h-[1px] bg-black mx-4" />
            <Image src={star} alt="star" className="w-[22px] h-[22px]" />
          </div>
          
          <div className={`w-[138px] rounded-full text-black px-[32px] py-[10px] text-[18px]
            flex justify-center items-center font-regular
            cursor-pointer hover:translate-y-0.5 transition`}
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