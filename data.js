      
 /*
     '박새',0 
     '후투티',1 
     '어치',2 
     '딱새',3 
     '꾀꼬리',4 
     '바다직박구리',5 
     '제비갈매기',6 
     '물수리',7 
     '대백로',8 
     '물꿩',9 
     '따오기',10 
     '할미새',11 
*/

const qnaList = [
  {
    q: '새를 관찰한 서식지는 어디였나요?',
    a: [
      { answer: '도시', type: ['0', '1', '2', '3', '4'] },
      { answer: '바다', type: ['5', '6', '7'] },
      { answer: '습지', type: ['8', '9', '10', '11' ] }, 
    ]
  },
  {
    q: '새의 크기는 어땠나요?',
    a: [
      { answer: '참새', type: ['0', '3', '11'] },
      { answer: '직박구리', type: ['1', '2', '4', '5'] },
      { answer: '비둘기', type: ['6'] },
      { answer: '까마귀', type: ['7', '9'] },
      { answer: '거위', type: [] },
      { answer: '독수리', type: ['8', '10'] },
    ]
  },
  {
    q: '거의 다 왔어요! 새의 부리 모양은 어땠나요?',
    a: [
      { answer: '작고 세모난 부리', type: ['0', '2', '3', '4', '5', '11'] },
      { answer: '짧은 갈고리모양 부리', type: ['7'] },
      { answer: '길고 뾰족한 부리', type: ['1', '6', '8', '9'] },
      { answer: '길고 휘어진 부리', type: ['10'] },
      { answer: '넓적하고 큰 부리', type: [] }
    ]
  },
  {
    q: '마지막 질문입니다! 새의 주요 색상은 뭐였나요?',
    a: [
      { answer: '회색', type: ['11'] },
      { answer: '흰색', type: ['0','3', '6', '7', '8', '9', '10', '11'] },
      { answer: '노란색', type: ['4','8','9' ] },
      { answer: '주황색', type: ['1', '3', '5' ] },
      { answer: '갈색', type: ['2', '7', '9' ] },
      { answer: '검은색', type: ['0', '1', '2', '3', '4', '6', '10', '11' ] },
      { answer: '파란색', type: ['2', '5' ] },
      { answer: '붉은색', type: ['10' ] },

    ]
  },

]

const infoList = [
  {
    name: '0',
  },
  {
    name: '1',
   },
  {
    name: '2',
  },
  {
    name: '3',
 },
  {
    name: '4',
 },
  {
    name: '5',
},
  {
    name: '6',
},
  {
    name: '7',
},
  {
    name: '8',
  },
  {
    name: '9',
},
  {
    name: '10',
},
  {
    name: '11',
  },
]
