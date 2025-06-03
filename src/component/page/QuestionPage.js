'use client';

import React from 'react';
import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import bgq from '@/../public/1.question/qbgimage.png';
import star from '@/../public/1.question/star.png';
import bar1 from '@/../public/1.question/bar1.svg';
import bar2 from '@/../public/1.question/bar2.svg';
import bar3 from '@/../public/1.question/bar3.svg';
import { usePsyStore, useQuestionStore } from '@/app/store/store';


export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore( (state)=> state );
  const psyData = usePsyStore( (state)=> state );


  const clickAnswer = function(option){
    nextStep();

    psyData.updateScore(psyData.score + option.value );

    console.log(option.title, option.value);
  }

  const getMainColor = () => {
    if (questionIndex === 0) return 'text-[#90B62A]';
    if (questionIndex === 1) return 'text-[#DD3E3E]';
    return 'text-[#1098EC]';
  };

  const questionImages = {
    q1: {
      up: "/1.question/q1-up.png",
      down: "/1.question/q1-down.png"
    },
    q2: {
      up: "/1.question/q2-up.png",
      down: "/1.question/q2-down.png"
    },
    q3: {
      up: "/1.question/q3-up.png",
      down: "/1.question/q3-down.png"
    },
  };  


  return (
    <>
      <MobileFrame>

        <div className='w-full h-full bg-center bg-cover flex flex-col items-center gap-[26px] p-[30px] overflow-auto'
        style={{ backgroundImage: `url(${bgq.src})` }}>

          {questionIndex === 0 && (
            <Image className="w-full" src={bar1} alt="bar1" />
          )}
          {questionIndex === 1 && (
            <Image className="w-full" src={bar2} alt="bar2" />
          )}
          {questionIndex === 2 && (
            <Image className="w-full" src={bar3} alt="bar3" />
          )}

          {/* 問題區 */}
          <div className="w-full h-full flex flex-col items-center gap-[26px] px-[20px] py-[14px] border rounded-xl"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>

            {/* 裝飾 */}
            <div className="w-full h-[22px] flex items-center justify-between">
              <Image src={star} alt="star" className="w-[22px] h-[22px]" />
              <div className="flex-1 h-[1px] bg-black mx-4" />
              <Image src={star} alt="star" className="w-[22px] h-[22px]" />
            </div>

            {/* 問題編號 */}
            <div className='text-black w-[48px] h-[48px] font-petit
              flex justify-center items-center font-regular text-2xl '>
              0{questionIndex + 1}
            </div>

            {/* 問題標題 */}
            <div className="text-center font-medium text-xl text-black">
              {questionData.questions[questionIndex + 1].title}
            </div>

            {/* 選項按鈕 */}
            {
              questionData.questions[questionIndex + 1].options.map((option, index) => (
                <div
                  className="w-full rounded-full text-black border-[0.5px]
                    py-[16px] text-sm flex justify-center items-center font-light 
                    shadow-md cursor-pointer hover:translate-y-0.5 transition"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255,255,255,1.0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,1.0) 100%)'
                    }}                
                  onClick={() => clickAnswer(option)}
                  key={option.title + index}
                >
                  {option.title}
                </div>
              ))
            }

            {/* 裝飾 */}
            <div className="w-full h-[22px] flex items-center justify-between">
              <Image src={star} alt="star" className="w-[22px] h-[22px]" />
              <div className="flex-1 h-[1px] bg-black mx-4" />
              <Image src={star} alt="star" className="w-[22px] h-[22px]" />
            </div>
          </div>

        </div>
      </MobileFrame>
    </>
  );
}