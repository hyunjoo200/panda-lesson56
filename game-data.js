/* =====================================================================
   중국어 탐험대 · 5·6차시 「판다의 생일 파티」 — 설정 파일 (game-data.js)
   ---------------------------------------------------------------------
   선생님이 고쳐도 되는 곳은 이 파일뿐입니다. (온라인 연결은 firebase-config.js)
   - 따옴표(' ') 안의 글자와 숫자만 바꾸고, 쉼표(,)와 괄호는 지우지 마세요.
   - GitHub에서 연필(✏️) 버튼으로 고친 뒤 Commit changes 하면 반영됩니다.
   ===================================================================== */

window.GAME_DATA = {

  /* ---------- 1. 이름과 문구 ---------- */
  lessonId: 'lesson6',               // 결과 저장 이름 (선생님 화면 '차시' 칸에 이 글자를 써요)
  saveKey: 'panda-lesson56',         // 이 기기에 저장할 때 쓰는 이름
  stageLabel: '5·6차시 복습',
  title: '판다의 생일 파티',
  subtitle: '你的生日是几月几号？',
  nextStage: '다음 모험',
  nextStageLine: '다음 시간에도 숫자와 생일 문장을 써 먹어요!',
  story: [
    '오늘은 판다 친구 퐁퐁이의 생일이에요! 🎂',
    '파티장까지 말판을 따라가요. 주사위는 중국 손숫자로 나와요. 손 모양을 보고 몇 칸인지 맞혀 봐요!',
    '? 칸에서는 문제를 풀어야 지나갈 수 있어요. 선물·별·손 칸에서는 보너스 별이 쏟아져요!'
  ],

  /* ---------- 2. 점수 ---------- */
  points: {
    firstTry: 100, retry: 60,       // ? 칸 문제: 처음에 맞히면 100, 다시 해서 맞히면 60
    diceHand: 5,                    // 주사위 손숫자를 맞히면 별 +5
    star: 10, gift: [20, 30],       // ⭐ 칸, 🎁 칸 (둘 중 하나가 무작위)
    hand: 20, code520: 20,          // 🖐️ 손숫자 칸, 520 암호 칸
    speedHand: 5, speedMax: 10      // 끝난 뒤 '손숫자 스피드 도전' 한 문제당 별 (최대 문제 수)
  },

  /* ---------- 3. 말판 ----------
     칸 순서입니다. Q는 문제 칸(아래 zones의 문제가 차례대로 들어가요), 마지막 칸은 파티장.
     star ⭐ 별 / gift 🎁 선물 / hand 🖐️ 손숫자 / noodle 🍜 장수면(앞으로 2칸) / clock ⏰ 시계(뒤로 2칸) / code520 💌 숫자 암호 */
  board: [
    'start', 'star', 'gift', 'Q',
    'hand', 'noodle', 'Q',
    'star', 'clock', 'hand', 'Q',
    'gift', 'code520', 'Q',
    'star', 'hand', 'noodle', 'Q',
    'gift', 'clock', 'Q',
    'star', 'hand', 'Q',
    'gift', 'noodle', 'star', 'Q',
    'hand', 'clock', 'Q',
    'gift', 'star', 'Q'
  ],

  /* ---------- 4. 중국어 음성 ----------
     audio 폴더에 같은 이름의 MP3가 있으면 그 파일을 먼저 씁니다.
     없으면 온라인 자동 음성 → 기기 내장 음성 순서로 씁니다. (검수 전 임시 음성) */
  audio: {
    useLocalFiles: true,
    useOnlineVoice: true,
    onlineVoiceUrl: 'https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=',
    slowRate: 0.7,
    sounds: {
      // 1·2차시 복습
      ma1: { text: '妈', pinyin: 'mā', tone: 1 },
      ma2: { text: '麻', pinyin: 'má', tone: 2 },
      ma3: { text: '马', pinyin: 'mǎ', tone: 3 },
      ma4: { text: '骂', pinyin: 'mà', tone: 4 },
      duibuqi:   { text: '对不起', pinyin: 'duìbuqǐ' },
      meiguanxi: { text: '没关系', pinyin: 'méi guānxi' },
      bukeqi:    { text: '不客气', pinyin: 'bú kèqi' },
      xiexie:    { text: '谢谢',   pinyin: 'xièxie' },
      // 5차시: 숫자 0~10 (hand = 손숫자 사진 번호)
      n0:  { text: '零', pinyin: 'líng', num: 0 },
      n1:  { text: '一', pinyin: 'yī',   num: 1 },
      n2:  { text: '二', pinyin: 'èr',   num: 2 },
      n3:  { text: '三', pinyin: 'sān',  num: 3 },
      n4:  { text: '四', pinyin: 'sì',   num: 4, pic: '4' },
      n5:  { text: '五', pinyin: 'wǔ',   num: 5 },
      n6:  { text: '六', pinyin: 'liù',  num: 6 },
      n7:  { text: '七', pinyin: 'qī',   num: 7, pic: '7' },
      n8:  { text: '八', pinyin: 'bā',   num: 8 },
      n9:  { text: '九', pinyin: 'jiǔ',  num: 9 },
      n10: { text: '十', pinyin: 'shí',  num: 10, pic: '10' },
      sanshiliu: { text: '三十六', pinyin: 'sān shí liù' },
      wuerling:  { text: '五二零', pinyin: 'wǔ èr líng' },
      woaini:    { text: '我爱你', pinyin: 'wǒ ài nǐ' },
      // 6차시: 생일
      shengri:   { text: '生日', pinyin: 'shēngrì' },
      liwu:      { text: '礼物', pinyin: 'lǐwù' },
      zhong:     { text: '钟', pinyin: 'zhōng' },
      changshoumian: { text: '长寿面', pinyin: 'chángshòumiàn' },
      d1109: { text: '十一月九号', pinyin: 'shí yī yuè jiǔ hào' },
      d0911: { text: '九月十一号', pinyin: 'jiǔ yuè shí yī hào' },
      d0119: { text: '一月十九号', pinyin: 'yī yuè shí jiǔ hào' },
      nideshengri: { text: '你的生日是几月几号？', pinyin: 'Nǐ de shēngrì shì jǐ yuè jǐ hào?' },
      wode1230:    { text: '我的生日是十二月三十号。', pinyin: 'Wǒ de shēngrì shì shí èr yuè sān shí hào.' },
      wode0521:    { text: '我的生日是五月二十一号。', pinyin: 'Wǒ de shēngrì shì wǔ yuè èr shí yī hào.' },
      card_panda:  { text: '3月8号',   pinyin: 'sān yuè bā hào',        pic: '🐼' },
      card_rabbit: { text: '8月17号',  pinyin: 'bā yuè shí qī hào',     pic: '🐰' },
      card_bear:   { text: '12月30号', pinyin: 'shí èr yuè sān shí hào', pic: '🐻' },
      shengrikuaile: { text: '生日快乐！', pinyin: 'Shēngrì kuàilè!' },
      zhuni:     { text: '祝你生日快乐！', pinyin: 'Zhù nǐ shēngrì kuàilè!' },
      zaijian:   { text: '再见', pinyin: 'zàijiàn' }
    }
  },

  /* ---------- 5. 문제 (말판의 ? 칸에 차례대로 들어가요) ----------
     review: '1차시' 처럼 쓰면 '복습' 표시가 붙어요. */
  zones: [
    { id: 'review', name: '복습 오솔길', missions: [
      { id: 'q1', type: 'numberCode', place: '성조 암호', review: '1차시',
        question: '판다가 세 글자를 말해요. 성조 번호를 차례대로 눌러 암호를 풀어요!',
        sets: [['ma2', 'ma4', 'ma1'], ['ma3', 'ma1', 'ma4'], ['ma4', 'ma2', 'ma3']],
        hint: '1성 높고 평평 · 2성 올라감 · 3성 내려갔다 올라옴 · 4성 뚝 떨어짐. 🐢 천천히로 한 글자씩 들어 봐요.' },
      { id: 'q2', type: 'choiceText', place: '짝꿍 대답', review: '2차시',
        scene: '🐰 💦 对不起!', sound: 'duibuqi',
        question: '토끼가 부딪혀서 "对不起"라고 했어요. 뭐라고 대답할까요?',
        options: [
          { text: '没关系', sub: 'méi guānxi', sound: 'meiguanxi', correct: true },
          { text: '不客气', sub: 'bú kèqi', sound: 'bukeqi' },
          { text: '谢谢', sub: 'xièxie', sound: 'xiexie' } ],
        hint: '对不起(미안해) ↔ 没关系(괜찮아), 谢谢(고마워) ↔ 不客气(천만에)' }
    ]},
    { id: 'numbers', name: '숫자 언덕', missions: [
      { id: 'q3', type: 'digitCode', place: '비밀 암호',
        question: '숫자를 한 자리씩 말해요. 들은 숫자 세 개를 차례대로 눌러요!',
        sets: [['n7', 'n0', 'n4'], ['n9', 'n3', 'n6'], ['n1', 'n8', 'n2']],
        hint: '암호는 한 자리씩 읽어요. 零 líng 0 · 七 qī 7 · 九 jiǔ 9 · 八 bā 8. 🐢 천천히로 다시 들어 봐요.' },
      { id: 'q4', type: 'hearPick', place: '四일까 十일까', sound: 'n10', answer: 'n10', options: ['n4', 'n10', 'n7'],
        question: '판다가 숫자 하나를 말해요. 어떤 숫자일까요?',
        hint: '四 sì(4)는 뚝 떨어지는 4성, 十 shí(10)는 올라가는 2성이에요.' },
      { id: 'q5', type: 'digitCode', place: '손가락 암호', hands: true,
        question: '세 손이 숫자를 보여 줘요. 왼쪽부터 숫자 세 개를 눌러요!',
        sets: [[8, 0, 6], [7, 2, 9], [6, 9, 3]],
        hint: '6 엄지·새끼 / 7 세 손끝 모으기 / 8 엄지·검지 / 9 검지 구부리기 / 0 주먹' },
      { id: 'q6', type: 'choiceText', place: '두 자리 수', sound: 'sanshiliu',
        question: '판다가 두 자리 수를 말해요. 어떤 수일까요?',
        options: [ { text: '36', correct: true }, { text: '63' }, { text: '16' } ],
        hint: '십의 자리 + 十 + 일의 자리! 三十六 = 3 × 10 + 6' }
    ]},
    { id: 'birthday', name: '생일 골목', missions: [
      { id: 'q7', type: 'choiceText', place: '날짜 읽기',
        scene: '📅 11월 9일',
        question: '달력의 날짜를 중국어로 어떻게 읽을까요? ▶ 듣기로 하나씩 들어 봐요.',
        options: [
          { text: '十一月九号', sub: 'shí yī yuè jiǔ hào', sound: 'd1109', correct: true },
          { text: '九月十一号', sub: 'jiǔ yuè shí yī hào', sound: 'd0911' },
          { text: '一月十九号', sub: 'yī yuè shí jiǔ hào', sound: 'd0119' } ],
        hint: '한국어처럼 월(月) 먼저, 일(号)은 뒤에! 11 = 十一' },
      { id: 'q8', type: 'wordOrder', place: '생일 묻기', sound: 'nideshengri',
        question: '"네 생일은 몇 월 며칠이야?" 낱말을 순서대로 눌러 질문을 만들어요.',
        tiles: ['你的', '生日', '是', '几月', '几号'], extra: ['我的'], ending: '？',
        hint: '你的生日(네 생일은) / 是(~이야) / 几月几号(몇 월 며칠)' },
      { id: 'q9', type: 'hearPick', place: '누구의 생일?', sound: 'wode1230', answer: 'card_bear',
        options: ['card_panda', 'card_rabbit', 'card_bear'],
        question: '친구가 자기 생일을 말해요. 누구의 생일 카드일까요?',
        hint: '十二月 = 12월, 三十号 = 30일' }
    ]},
    { id: 'party', name: '파티장', missions: [
      { id: 'q10', type: 'wordOrder', place: '퐁퐁이의 질문', sound: 'nideshengri', party: true,
        scene: '🎂 내 생일 카드: 5월 21일',
        question: '퐁퐁이가 "你的生日是几月几号？" 하고 물어요. 카드의 날짜로 대답을 만들어요!',
        tiles: ['我的', '生日', '是', '五月', '二十一号'], extra: ['二月', '十一号'], ending: '。',
        hint: '我的生日是 + 五月(5월) + 二十一号(21일). 21 = 二十一' }
    ]}
  ],

  /* 마지막 축하 (점수 없음) */
  party: {
    host: '퐁퐁이',
    hello: '와! 내 파티에 와 줘서 고마워! 그런데 너는 생일이 언제야?',
    thanks: '谢谢! 오늘 정말 행복해!',
    sing: '모두 함께 축하해 줄래요? 버튼을 눌러 말해요!'
  },

  /* 말판 칸 설명 (도움말과 칸 위 글자) */
  tileText: {
    star:    ['⭐', '별', '별 +10!'],
    gift:    ['🎁', '선물', '礼物 lǐwù — 선물 상자에서 별이 쏟아져요!'],
    hand:    ['🖐️', '손', '손숫자 퀴즈! 맞히면 별 +20'],
    noodle:  ['🍜', '장수면', '长寿面 chángshòumiàn — 긴 국수처럼 오래오래 건강하게! 앞으로 2칸'],
    clock:   ['⏰', '시계', '钟 zhōng — 시계는 생일 선물로 피하는 경우가 있대요. 뒤로 2칸!'],
    code520: ['💌', '520', '520 = 五二零 wǔ èr líng. 중국 온라인에서 我爱你(사랑해)를 뜻하는 숫자 암호예요!']
  }
};
