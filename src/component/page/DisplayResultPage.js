'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import circle1Img from '@/../public/0.start/blur-circle-1.png';

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-[#B65A0F] font-bold text-[24px] mb-[76px]'>
            顯示我的舒壓酒精
          </div>
            <div 
              className={` bg-[#B65A0F] w-[138px] rounded-full text-white 
                px-[32px] py-[10px] text-[18px] flex justify-center items-center font-semibold 
                shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
              onClick={nextStep}
            > 查看結果 </div>
            </div>
      </MobileFrame>
    </>
  );
}