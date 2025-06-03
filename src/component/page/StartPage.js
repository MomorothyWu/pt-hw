'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import 'animate.css';
import Image from 'next/image';
import startBtn from '@/../public/0.start/startBtn.svg';
import ice from '@/../public/0.start/icecube1.png';
import ice2 from '@/../public/0.start/icecube2.png';
import WaveBackground from '@/component/others/WavyBackground';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className="relative w-full h-full bg-center bg-cover flex justify-center items-center flex-col gap-[60px] p-[52px]"
        >
          <WaveBackground/>
          <Image className='w-[120px] h-[120px] animate__animated animate__shakeY animate__infinite animate__slower'
          style={{
            position: 'absolute',
            top: '260px',
            left: '20px',
            zIndex: 10,
          }}
          src={ice} alt='ice' />

          <Image className='w-[120px] h-[120px] animate__animated animate__shakeY animate__infinite animate__slower'
          style={{
            position: 'absolute',
            top: '480px',
            left: '260px',
            zIndex: 10,
          }}
          src={ice2} alt='ice' />
          
          <div className='text-black font-[500] text-center text-[14px]
            leading-loose tracking-wide z-10'>
            你與壓力的關係是哪一種酒？
          </div>
          <div className='text-black font-[300] text-center text-[14px]
            leading-loose tracking-wide z-10'>
            每個人處理壓力的方式，都像一杯調酒
            ——有的冰涼微醺、有的濃烈直擊，
            有的清爽討喜，也有些溫吞耐人尋味。
            如果壓力是酒精，你會是那種一飲而盡的龍舌蘭，
            還是那杯氣泡四溢的Mojito？
            現在就讓我們替你「特調一杯」壓力風格之酒，
            看看你是哪一種紓壓系調酒人格！
          </div>
          <Image onClick={nextStep} className='w-[160px] h-[44px] z-10' src={startBtn} alt='startBtn' />
          
        </div>
      </MobileFrame>
    </>
  );
}
