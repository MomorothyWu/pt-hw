'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result-1.png';
import result2 from '@/../public/4.result/result-2.png';
import result3 from '@/../public/4.result/result-3.png';
import result4 from '@/../public/4.result/result-4.png';
import circle1Img from '@/../public/0.start/blur-circle-1.png';

export default function ResultPage() {

  const psyState = usePsyStore( (state) => state );


  const playAgain = function(){
    // todo: 重新整理頁面
    window.location.reload();
  }

  return (
    <>
      <MobileFrame>
        <div className='flex flex-col justify-center items-center'>
          
          {
            psyState.score < 5 &&
            <Image className="flex justify-center w-[260px] h-auto mb-[16px]" src={result1} alt='result1' />
          }

          {
            (psyState.score >= 5 && psyState.score < 9) &&
            <Image className="flex justify-center w-[260px] h-auto mb-[16px]" src={result2} alt='result2' />
          }

          {
            (psyState.score >= 9 && psyState.score < 12) &&
            <Image className="flex justify-center w-[260px] h-auto mb-[16px]" src={result3} alt='result3' />
          }

          {
            psyState.score >= 12 &&
            <Image className="flex justify-center w-[260px] h-auto mb-[16px]" src={result4} alt='result4' />
          }

          <div className='flex justify-center font-semibold text-[#B65A0F] text-[14px] mb-[36px]'>長按或截圖可保存結果</div>

          <div className='flex justify-center gap-[16px]'>
            <div 
              className={` bg-[#B65A0F] w-[122px] rounded-full text-white 
                px-[26px] py-[10px] text-[16px] flex justify-center items-center font-semibold
                shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
              onClick={playAgain}
            > 再玩一次 </div>

            <div 
              className={` bg-[#B65A0F] w-[122px] rounded-full text-white 
                px-[26px] py-[10px] text-[16px] flex justify-center items-center font-semibold 
                shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
              onClick={playAgain}
            > 分享結果 </div>
          </div>
          <Image className="absolute bottom-0 translate-y-1/2 pointer-events-none" src={circle1Img} alt="circle1Img" />
        </div>
      </MobileFrame>
    </>
  );
}