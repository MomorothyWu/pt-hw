'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { useState } from 'react';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result-1.png';
import result2 from '@/../public/4.result/result-2.png';
import result3 from '@/../public/4.result/result-3.png';
import result4 from '@/../public/4.result/result-4.png';
import circle1Img from '@/../public/0.start/blur-circle-1.png';
import star from '@/../public/1.question/star.png';
import {
  FacebookShareCount,
} from "react-share";
import {
  FacebookShareButton,
  FacebookIcon,
} from 'react-share'

export default function ResultPage() {

  const psyState = usePsyStore( (state) => state );
  const [showModal, setShowModal] = useState(false);

  const playAgain = function(){
    window.location.reload();
  }

  return (
    <>
      <MobileFrame>
        <div className='w-full h-full relative flex flex-col justify-center items-center'>

          <Image className="w-[320px] h-[320px] absolute bottom-0 translate-y-1/2 pointer-events-none z-0" src={circle1Img} alt="circle1Img" />
          
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

          <div className='w-[260px] h-[22px] flex justify-center items-center mb-[36px]'>
            <Image src={star} alt="star" className="w-[22px] h-[22px]" />
            <div className="flex-1 w-full h-[1px] bg-black mx-1" />
            <div className='text-black text-[16px]'>長按或截圖可保存結果</div>
            <div className="flex-1 w-full h-[1px] bg-black mx-1" />
            <Image src={star} alt="star" className="w-[22px] h-[22px]" />
          </div>

          <div className='flex justify-center gap-[16px] z-10'>
            <div 
              className={`w-[122px] rounded-full text-black px-[26px] py-[10px]
                text-[16px] flex justify-center items-center border-[0.5px] font-light
                cursor-pointer hover:translate-y-0.5 transition`}
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,1.0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,1.0) 100%)'
              }}
              onClick={playAgain}
            > 再玩一次 </div>

            <div
              className="w-[122px] rounded-full text-black px-[26px] py-[10px]
              text-[16px] flex justify-center items-center border-[0.5px] font-light
              cursor-pointer hover:translate-y-0.5 transition"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(255,255,255,1.0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,1.0) 100%)',
              }}
              onClick={() => setShowModal(true)}
            >
              分享結果
            </div>
          </div>

          {/* Modal 遮罩與內容 */}
          {showModal && (
            <div
              className="fixed inset-0 flex justify-center items-center z-50"
              style={{ backgroundColor: 'rgba(250, 250, 250, 0.4)' }}
              onClick={() => setShowModal(false)}
            >
              <div
                className="bg-white p-6 rounded-xl flex gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 圓形 icon 佔位用
                <FacebookShareCount url={shareUrl}>
                  {(shareCount) => <span className="myShareCountWrapper">{shareCount}</span>}
                </FacebookShareCount> */}
                <FacebookShareButton
                   url={'https://pt-hw-dorothys-projects-0d99ad2e.vercel.app/share/result1'}
                   quote={'快來測試你的酒精形壓力人格！'}
                   hashtag={'#酒精形壓力心理測驗'}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>
            </div>
          )}
          
        </div>
      </MobileFrame>
    </>
  );
}