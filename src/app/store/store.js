import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 4,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: [
    {
      title: "下列哪一句話最貼近你面對壓力時的態度？",
      options: [
        {title: "管他的，先玩再說！", value: 1},
        {title: "不處理的話會更焦慮！", value: 2},
        {title: "時間過了，壓力就會淡", value: 3},
        {title: "我需要有人陪我撐過去", value: 4}
      ]
    },
    {
      title: "壓力突然來襲，好需要酒精的洗禮，你會⋯⋯？",
      options: [
        {title: "在KTV邊喝邊嗨三小時", value: 1},
        {title: "規定自己要克制，只能喝一杯", value: 2},
        {title: "在房間點香氛蠟燭，有儀式感地享受酒精", value: 3},
        {title: "和朋友邊喝邊聊彼此的鳥事", value: 4}
      ]
    },
    {
      title: "如果壓力化作一杯特調，你會怎麼處理它？",
      options: [
        {title: "一飲而盡，不管後勁多強！", value: 1},
        {title: "加冰、攪拌、慢飲——掌控整體節奏", value: 2},
        {title: "先放著，等到心靜了再啜一口", value: 3},
        {title: "分一半給朋友，一起承擔比較輕鬆", value: 4}
      ]
    },
    {
      title: "當你喝了一點酒後，通常會⋯⋯？",
      options: [
        {title: "情緒湧現，一個人爆哭也沒關係", value: 1},
        {title: "列清單、想方法，酒精反而讓我更冷靜", value: 2},
        {title: "腦袋開始打結，決定什麼都不想了", value: 3},
        {title: "想打給朋友問問他們的意見", value: 4}
      ]
    },
  ],
}))

export { usePsyStore, useQuestionStore }