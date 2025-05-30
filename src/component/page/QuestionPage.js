'use client';

import React from 'react';
import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import { usePsyStore, useQuestionStore } from '@/app/store/store'


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

        <div className='flex flex-col items-center gap-[26px]'>

          {/* 問題編號圓圈 */}
          <div className='text-black border-2 border-black rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl '>
            Q{questionIndex + 1}
          </div>

          {/* 問題標題 */}
          <div className="text-center font-bold text-3xl text-black mb-[60px]">
            {questionData.questions[questionIndex + 1].title}
          </div>

          {/* 選項按鈕 */}
          {
            questionData.questions[questionIndex + 1].options.map((option, index) => (
              <div
                className="bg-gray-400 w-full rounded-full text-white 
                  py-[16px] text-sm flex justify-center items-center font-medium 
                  shadow-md cursor-pointer hover:translate-y-0.5 transition"
                onClick={() => clickAnswer(option)}
                key={option.title + index}
              >
                {option.title}
              </div>
            ))
          }

        </div>
      </MobileFrame>
    </>
  );
}