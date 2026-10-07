const PROFILES = {
  jose: {
    id: 'jose',
    name: 'José',
    initial: 'J',
    email: 'jose@gostoso.com',
    passwordHash: 'c96ca3f7cdbdd1049791c01676b5b59267dd4ad1a8cbe772802b721d2388e800',
    accent: '#c8ff35',
    accentRgb: '200,255,53',
    greeting: 'Vai pra cima, José!',
    heroEmoji: '💪',
    sourceText: 'Rotina atual: peito/ombros/tríceps; costas/bíceps; inferior; core + cardio leve; superior completo; inferior completo; domingo descanso. Exercícios de força em 3×6–10, conforme a ficha enviada.',
    workouts: {
      PUSH: {
        id: 'PUSH', shortLabel: 'PUSH', title: 'Peito, Ombros e Tríceps',
        warmup: 'Faça mobilidade de ombros e 1–2 séries leves antes do primeiro exercício.',
        exercises: [
          { name:'Crucifixo na Máquina', sets:3, reps:'6–10', rest:60, search:'crucifixo máquina peck deck execução correta', tip:'Mantenha as escápulas apoiadas e controle a volta.' },
          { name:'Supino Inclinado', sets:3, reps:'6–10', rest:90, search:'supino inclinado execução correta', tip:'Mantenha os pés firmes e as escápulas estáveis no banco.' },
          { name:'Elevação Frontal', sets:3, reps:'6–10', rest:60, search:'elevação frontal halteres execução correta', tip:'Eleve sem embalo e não ultrapasse uma amplitude confortável.' },
          { name:'Elevação Lateral', sets:3, reps:'6–10', rest:60, video:'youtube:Tt8m9zlvNx8', tip:'Use carga controlável e evite impulso do tronco.' },
          { name:'Tríceps Corda', sets:3, reps:'6–10', rest:60, search:'triceps corda execução correta', tip:'Mantenha os cotovelos próximos ao corpo e abra a corda no final.' },
          { name:'Tríceps Francês', sets:3, reps:'6–10', rest:60, search:'triceps francês halter execução correta', tip:'Mantenha os cotovelos apontados para frente e o tronco firme.' },
          { name:'Cardio', sets:1, reps:'20–30 min', scheme:'20–30 min • intensidade moderada', rest:45, search:'cardio esteira bicicleta academia', tip:'Escolha esteira ou bicicleta e mantenha um ritmo sustentável.' }
        ]
      },
      PULL: {
        id:'PULL', shortLabel:'PULL', title:'Costas e Bíceps',
        warmup:'Mobilidade de ombros e uma série leve de puxada/remada antes das séries válidas.',
        exercises:[
          { name:'Remada Unilateral', sets:3, reps:'6–10', rest:90, search:'remada unilateral serrote execução correta', tip:'Mantenha a coluna neutra e puxe o cotovelo em direção ao quadril.' },
          { name:'Puxada Supinada', sets:3, reps:'6–10', rest:90, search:'puxada supinada execução correta', tip:'Puxe até a parte alta do peito sem jogar o tronco para trás.' },
          { name:'Remada Baixa com Barra', sets:3, reps:'6–10', rest:90, search:'remada baixa barra execução correta', tip:'Mantenha o peito aberto e controle a fase de retorno.' },
          { name:'Encolhimento', sets:3, reps:'6–10', rest:60, search:'encolhimento trapézio halteres execução correta', tip:'Eleve os ombros sem girá-los e controle a descida.' },
          { name:'Rosca Martelo', sets:3, reps:'6–10', rest:60, search:'rosca martelo execução correta', tip:'Mantenha os cotovelos estáveis ao lado do corpo.' },
          { name:'Rosca Scott', sets:3, reps:'6–10', rest:60, search:'rosca scott execução correta', tip:'Evite estender o cotovelo com impacto no fim da descida.' },
          { name:'Cardio', sets:1, reps:'20–30 min', scheme:'20–30 min • intensidade moderada', rest:45, search:'cardio esteira bicicleta academia', tip:'Mantenha um ritmo sustentável.' }
        ]
      },
      LOWER1: {
        id:'LOWER1', shortLabel:'INF 1', title:'Inferior Completo',
        warmup:'Faça mobilidade de quadril/tornozelo e séries leves do RDL e leg press.',
        exercises:[
          { name:'RDL', sets:3, reps:'6–10', rest:120, search:'rdl levantamento terra romeno execução correta', tip:'Leve o quadril para trás, coluna neutra e carga próxima das pernas.' },
          { name:'Leg Press', sets:3, reps:'6–10', rest:120, video:'youtube:c74ubBbL3zU', tip:'Mantenha quadril e lombar apoiados e controle a descida.' },
          { name:'Cadeira Flexora', sets:3, reps:'6–10', rest:60, search:'cadeira flexora execução correta', tip:'Ajuste o equipamento ao joelho e controle o retorno.' },
          { name:'Cadeira Extensora', sets:3, reps:'6–10', rest:60, video:'youtube:-duwMxZrzwc', tip:'Execute sem impulso e sem bater as placas.' },
          { name:'Elevação Pélvica', sets:3, reps:'6–10', rest:120, video:'youtube:-XjTnWCzYG4', tip:'Suba contraindo os glúteos sem hiperestender a lombar.' },
          { name:'Panturrilha Sentado', sets:3, reps:'6–10', rest:60, search:'panturrilha sentado máquina execução correta', tip:'Use amplitude confortável e segure brevemente no topo.' },
          { name:'Cardio', sets:1, reps:'20–30 min', scheme:'20–30 min • intensidade moderada', rest:45, search:'cardio esteira bicicleta academia', tip:'Mantenha um ritmo sustentável.' }
        ]
      },
      CORE: {
        id:'CORE', shortLabel:'CORE', title:'Core + Cardio Leve',
        warmup:'Dia mais leve. O objetivo é movimentar o corpo sem transformar a quinta em outro treino pesado.',
        exercises:[
          { name:'Abdominal', sets:3, reps:'10–15', rest:60, search:'abdominal máquina execução correta', tip:'Faça a flexão do tronco de forma controlada.' },
          { name:'Prancha', sets:3, reps:'30–45 s', rest:60, search:'prancha abdominal execução correta', tip:'Mantenha abdômen e glúteos contraídos e o corpo alinhado.' },
          { name:'Cardio', sets:1, reps:'20–30 min', scheme:'20–30 min • leve a moderado', rest:45, search:'cardio leve esteira bicicleta academia', tip:'Use como recuperação ativa; reduza a intensidade se estiver muito cansado.' }
        ]
      },
      UPPER: {
        id:'UPPER', shortLabel:'SUP', title:'Superior Completo',
        warmup:'Mobilidade de ombros e uma série leve de supino e puxada.',
        exercises:[
          { name:'Supino Reto', sets:3, reps:'6–10', rest:90, search:'supino reto execução correta', tip:'Escápulas firmes e pés bem apoiados.' },
          { name:'Desenvolvimento', sets:3, reps:'6–10', rest:90, video:'youtube:74HRnJ6Sdxg', tip:'Mantenha o tronco firme e evite compensar com a lombar.' },
          { name:'Puxada Aberta', sets:3, reps:'6–10', rest:90, search:'puxada aberta frontal execução correta', tip:'Puxe pela frente, em direção ao peito.' },
          { name:'Rosca no Banco Inclinado', sets:3, reps:'6–10', rest:60, search:'rosca banco inclinado execução correta', tip:'Mantenha os braços para trás sem projetar os cotovelos para frente.' },
          { name:'Tríceps Testa', sets:3, reps:'6–10', rest:60, search:'triceps testa execução correta', tip:'Mantenha os cotovelos estáveis e controle a descida.' },
          { name:'Elevação Lateral na Polia', sets:3, reps:'6–10', rest:60, search:'elevação lateral polia execução correta', tip:'Mantenha tensão contínua e não use impulso.' },
          { name:'Cardio', sets:1, reps:'20–30 min', scheme:'20–30 min • intensidade moderada', rest:45, search:'cardio esteira bicicleta academia', tip:'Mantenha um ritmo sustentável.' }
        ]
      },
      LOWER2: {
        id:'LOWER2', shortLabel:'INF 2', title:'Inferior Completo II',
        warmup:'Mobilidade de quadril/tornozelo e uma série leve dos primeiros movimentos.',
        exercises:[
          { name:'Cadeira Abdutora', sets:3, reps:'6–10', rest:60, video:'youtube:50qHGus1TZk', tip:'Abra com controle, sem deixar as placas baterem.' },
          { name:'Cadeira Adutora', sets:3, reps:'6–10', rest:60, search:'cadeira adutora execução correta', tip:'Controle a aproximação das pernas e o retorno.' },
          { name:'Afundo no Smith', sets:3, reps:'6–10', rest:90, search:'afundo smith execução correta', tip:'Mantenha o pé da frente firme e desça de forma controlada.' },
          { name:'Stiff', sets:3, reps:'6–10', rest:120, search:'stiff execução correta', tip:'Quadril para trás, coluna neutra e joelhos levemente flexionados.' },
          { name:'Agachamento Frontal com Calcanhar Elevado', sets:3, reps:'6–10', rest:120, search:'agachamento frontal calcanhar elevado execução correta', tip:'Mantenha o tronco alto e os joelhos acompanhando a direção dos pés.' },
          { name:'Panturrilha com Perna Esticada', sets:3, reps:'6–10', rest:60, search:'panturrilha em pé execução correta', tip:'Controle a descida e alcance boa amplitude.' },
          { name:'Cardio', sets:1, reps:'20–30 min', scheme:'20–30 min • intensidade moderada', rest:45, search:'cardio esteira bicicleta academia', tip:'Mantenha um ritmo sustentável.' }
        ]
      }
    },
    weekPlan:[
      {day:'Seg',workout:'PUSH'}, {day:'Ter',workout:'PULL'}, {day:'Qua',workout:'LOWER1'},
      {day:'Qui',workout:'CORE'}, {day:'Sex',workout:'UPPER'}, {day:'Sáb',workout:'LOWER2'}, {day:'Dom',workout:null}
    ]
  },

  livia: {
    id:'livia', name:'Livia', initial:'L', email:'livia@maromba.com',
    passwordHash:'249a553992739e990453f86f016306d9cd7f504df5605645180a8610660aaf6e',
    accent:'#e20980', accentRgb:'226,9,128', greeting:'Bora, Livia! ✨', heroEmoji:'🏋️‍♀️',
    sourceText:'Plano alternado por semana: uma semana começa com inferiores e a seguinte com superiores. Dois treinos diferentes de superiores, dois de inferiores e um condicionamento funcional leve. O treino de braços ajuda a fortalecer e dar forma, mas a redução de gordura acontece de forma geral, não apenas em bíceps ou tríceps.',
    workouts:{
      GLUTE: {
        id:'GLUTE', shortLabel:'GLÚT', title:'Glúteos',
        warmup:'Comece com mobilidade de quadril e use as séries de aquecimento indicadas antes das séries válidas.',
        exercises:[
          { name:'Cadeira Abdutora', sets:6, warmupSets:2, reps:'2×20 aquecimento + 4×15', scheme:'2 séries de aquecimento × 20 + 4 séries × 15', rest:60, video:'youtube:50qHGus1TZk', tip:'Controle a abertura e não deixe as placas baterem.' },
          { name:'Elevação Pélvica', sets:4, warmupSets:1, reps:'1 aquecimento + 3×12', scheme:'1 série de aquecimento + 3 séries × 12', rest:120, video:'youtube:-XjTnWCzYG4', tip:'Contraia os glúteos no topo sem hiperestender a lombar.' },
          { name:'Leg Press Unilateral', sets:3, reps:12, rest:90, search:'leg press unilateral execução correta', tip:'Alternativa mais estável ao búlgaro/afundo: mantenha quadril apoiado e controle a descida.' },
          { name:'Extensão de Glúteo na Polia', sets:3, reps:12, rest:60, search:'extensão glúteo polia execução correta', tip:'Mantenha o tronco firme e evite arquear a lombar.' },
          { name:'Stiff', sets:4, warmupSets:1, reps:'1 aquecimento + 3×12', scheme:'1 série de aquecimento + 3 séries × 12', rest:90, search:'stiff execução correta', tip:'Leve o quadril para trás, mantenha a coluna neutra e controle a descida.' }
        ]
      },
      UPA: {
        id:'UPA', shortLabel:'BRAÇO A', title:'Superiores A — Costas, Bíceps e Tríceps',
        warmup:'Mobilidade de ombros e uma série leve de puxada.',
        exercises:[
          { name:'Puxada Alta Frontal', sets:3, reps:'10–12', rest:75, search:'puxada alta frontal execução correta', tip:'Puxe em direção ao peito sem balançar o tronco.' },
          { name:'Remada Baixa', sets:3, reps:'10–12', rest:75, video:'youtube:Os_orWmhqxY', tip:'Puxe em direção ao abdômen mantendo o peito aberto.' },
          { name:'Rosca Direta na Polia', sets:3, reps:'10–12', rest:60, search:'rosca direta polia execução correta', tip:'Mantenha os cotovelos fixos e evite embalo.' },
          { name:'Rosca Martelo', sets:3, reps:'10–12', rest:60, search:'rosca martelo execução correta', tip:'Punhos neutros e cotovelos próximos do corpo.' },
          { name:'Tríceps Corda', sets:3, reps:'10–12', rest:60, search:'triceps corda execução correta', tip:'Abra a corda no final mantendo os cotovelos fixos.' },
          { name:'Elevação Lateral', sets:3, reps:'12–15', rest:60, video:'youtube:Tt8m9zlvNx8', tip:'Suba com controle e sem impulso.' }
        ]
      },
      HYROX: {
        id:'HYROX', shortLabel:'FUNC', title:'Funcional Leve — estilo HYROX',
        warmup:'Versão mais curta e controlada, sem foco competitivo. Ajuste o ritmo para terminar se sentindo bem, não exausta.',
        exercises:[
          { name:'Caminhada Inclinada', sets:1, reps:'8 min', scheme:'8 min • ritmo confortável', rest:45, search:'caminhada inclinada esteira', tip:'Use inclinação confortável e mantenha respiração controlada.' },
          { name:'Remo ou Bicicleta', sets:1, reps:'5 min', scheme:'5 min • moderado', rest:60, search:'remo ergométrico bicicleta academia cardio', tip:'Escolha o aparelho disponível e mantenha intensidade moderada.' },
          { name:'Farmer Carry', sets:3, reps:'30 m', rest:60, search:'farmer carry execução correta', tip:'Caminhe ereta, abdômen firme e passos controlados.' },
          { name:'Step-up Baixo', sets:3, reps:'10/lado', rest:60, search:'step up banco baixo execução correta', tip:'Use um apoio baixo e suba empurrando o chão com o pé de apoio.' },
          { name:'Wall Ball Leve', sets:3, reps:10, rest:60, search:'wall ball execução correta', tip:'Use carga leve e mantenha o movimento fluido; se não houver bola, faça agachamento com halter leve.' },
          { name:'Prancha', sets:3, reps:'30 s', rest:60, search:'prancha abdominal execução correta', tip:'Mantenha o corpo alinhado e o abdômen ativo.' }
        ]
      },
      LOWER: {
        id:'LOWER', shortLabel:'PERNA', title:'Pernas — Quadríceps e Posteriores',
        warmup:'Mobilidade de quadril/tornozelo e uma série leve dos primeiros exercícios.',
        exercises:[
          { name:'Leg Press 45°', sets:3, reps:12, rest:90, video:'youtube:c74ubBbL3zU', tip:'Mantenha lombar apoiada e controle a amplitude.' },
          { name:'Cadeira Extensora', sets:3, reps:12, rest:60, video:'youtube:-duwMxZrzwc', tip:'Execute sem impulso e controle a volta.' },
          { name:'Cadeira Flexora', sets:3, reps:12, rest:60, search:'cadeira flexora execução correta', tip:'Mantenha o quadril apoiado e controle o retorno.' },
          { name:'Agachamento no Hack', sets:3, reps:12, rest:90, search:'agachamento hack execução correta', tip:'Apoie bem as costas e mantenha os joelhos acompanhando os pés.' },
          { name:'Panturrilha no Leg Press', sets:3, reps:15, rest:60, search:'panturrilha leg press execução correta', tip:'Controle a descida e use amplitude confortável.' }
        ]
      },
      UPB: {
        id:'UPB', shortLabel:'BRAÇO B', title:'Superiores B — Peito, Ombros e Braços',
        warmup:'Mobilidade de ombros e uma série leve de supino/desenvolvimento.',
        exercises:[
          { name:'Supino na Máquina ou Halteres', sets:3, reps:'10–12', rest:75, search:'supino máquina execução correta', tip:'Escápulas firmes e movimento controlado.' },
          { name:'Desenvolvimento de Ombros', sets:3, reps:'10–12', rest:75, video:'youtube:74HRnJ6Sdxg', tip:'Evite arquear a lombar e use carga controlável.' },
          { name:'Face Pull', sets:3, reps:'12–15', rest:60, search:'face pull execução correta', tip:'Puxe a corda em direção ao rosto mantendo os cotovelos altos.' },
          { name:'Rosca Scott', sets:3, reps:'10–12', rest:60, search:'rosca scott execução correta', tip:'Controle a descida e não trave o cotovelo com impacto.' },
          { name:'Tríceps Testa', sets:3, reps:'10–12', rest:60, search:'triceps testa execução correta', tip:'Mantenha os cotovelos estáveis durante o movimento.' },
          { name:'Tríceps Francês', sets:3, reps:'10–12', rest:60, search:'triceps francês execução correta', tip:'Mantenha o tronco firme e os cotovelos apontados para frente.' }
        ]
      }
    },
    alternatingWeek:true,
    weekPlanA:[
      {day:'Seg',workout:'GLUTE'}, {day:'Ter',workout:'UPA'}, {day:'Qua',workout:'HYROX'},
      {day:'Qui',workout:'LOWER'}, {day:'Sex',workout:'UPB'}, {day:'Sáb',workout:null}, {day:'Dom',workout:null}
    ],
    weekPlanB:[
      {day:'Seg',workout:'UPA'}, {day:'Ter',workout:'GLUTE'}, {day:'Qua',workout:'HYROX'},
      {day:'Qui',workout:'UPB'}, {day:'Sex',workout:'LOWER'}, {day:'Sáb',workout:null}, {day:'Dom',workout:null}
    ]
  }
};

const $ = (id) => document.getElementById(id);
const state = {
  profileId: null,
  activeWorkout: null,
  sessionStart: null,
  sessionTicker: null,
  completedSets: {},
  timer: { running: false, total: 90, remaining: 90, interval: null, exerciseName: '' },
  wakeLock: null
};

function profile() { return PROFILES[state.profileId]; }
function workouts() { return profile()?.workouts || {}; }
function isoWeekNumber(date=new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}
function weekPlan(date=new Date()) {
  const p=profile();
  if (!p) return [];
  if (p.alternatingWeek) return isoWeekNumber(date)%2===0 ? p.weekPlanA : p.weekPlanB;
  return p.weekPlan || [];
}
function storageKey(name) { return `maromba_${state.profileId}_${name}`; }

function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[char]));
}

async function sha256(text) {
  if (globalThis.crypto?.subtle) {
    const bytes = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest('SHA-256', bytes);
    return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
  }
  // Fallback para WebView/file:// do APK, onde Web Crypto pode não estar disponível.
  let utf8 = unescape(encodeURIComponent(text));
  const rightRotate=(v,a)=>(v>>>a)|(v<<(32-a));
  let mathPow=Math.pow, maxWord=mathPow(2,32), lengthProperty='length', i,j,result='', words=[], asciiBitLength=utf8[lengthProperty]*8;
  let hash=sha256.h=sha256.h||[]; const k=sha256.k=sha256.k||[]; let primeCounter=k[lengthProperty], isComposite={};
  for(let candidate=2; primeCounter<64; candidate++){ if(!isComposite[candidate]){ for(i=0;i<313;i+=candidate) isComposite[i]=candidate; hash[primeCounter]=(mathPow(candidate,.5)*maxWord)|0; k[primeCounter++]=(mathPow(candidate,1/3)*maxWord)|0; } }
  utf8+='\x80'; while(utf8[lengthProperty]%64-56) utf8+='\x00';
  for(i=0;i<utf8[lengthProperty];i++){ j=utf8.charCodeAt(i); words[i>>2]|=j<<((3-i)%4)*8; }
  words[words[lengthProperty]]=((asciiBitLength/maxWord)|0); words[words[lengthProperty]]=asciiBitLength;
  for(j=0;j<words[lengthProperty];){ const w=words.slice(j,j+=16), oldHash=hash.slice(0); for(i=0;i<64;i++){ const w15=w[i-15], w2=w[i-2]; const a=hash[0], e=hash[4]; const temp1=hash[7]+(rightRotate(e,6)^rightRotate(e,11)^rightRotate(e,25))+((e&hash[5])^((~e)&hash[6]))+k[i]+(w[i]=(i<16)?w[i]:(w[i-16]+(rightRotate(w15,7)^rightRotate(w15,18)^(w15>>>3))+w[i-7]+(rightRotate(w2,17)^rightRotate(w2,19)^(w2>>>10)))|0); const temp2=(rightRotate(a,2)^rightRotate(a,13)^rightRotate(a,22))+((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); hash=[(temp1+temp2)|0].concat(hash); hash[4]=(hash[4]+temp1)|0; hash.pop(); } for(i=0;i<8;i++) hash[i]=(hash[i]+oldHash[i])|0; }
  for(i=0;i<8;i++) for(j=3;j+1;j--){ const b=(hash[i]>>(j*8))&255; result+=(b<16?'0':'')+b.toString(16); }
  return result;
}

function applyProfileTheme() {
  const p = profile();
  if (!p) return;
  document.documentElement.style.setProperty('--accent', p.accent);
  document.documentElement.style.setProperty('--accent-rgb', p.accentRgb);
  $('helloTitle').textContent = p.greeting;
  $('avatarButtonText').textContent = p.initial;
  $('profileName').textContent = p.name;
  $('profileEmail').textContent = p.email;
  $('sourceText').textContent = p.sourceText;
  $('heroEmoji').textContent = p.heroEmoji;
  document.title = `${p.name} Maromba`;
  const healthBtn = $('healthNavBtn');
  if (healthBtn) {
    const isLivia = p.id === 'livia';
    healthBtn.classList.toggle('hidden', !isLivia);
    document.querySelector('.bottom-nav')?.classList.toggle('five-items', isLivia);
    if (isLivia) renderHealth();
  }
}


function migrateLegacyJoseData() {
  if (state.profileId !== 'jose') return;
  const migrations = [
    ['jm_history', storageKey('history')],
    ['jm_weights', storageKey('weights')],
    ['jm_settings', storageKey('settings')]
  ];
  migrations.forEach(([oldKey,newKey]) => {
    if (!localStorage.getItem(newKey) && localStorage.getItem(oldKey)) {
      localStorage.setItem(newKey, localStorage.getItem(oldKey));
    }
  });
}

function saveSettings() {
  if (!state.profileId) return;
  localStorage.setItem(storageKey('settings'), JSON.stringify({
    sound: $('soundToggle').checked,
    vibration: $('vibrationToggle').checked,
    wake: $('wakeToggle').checked
  }));
}
function loadSettings() {
  const s = JSON.parse(localStorage.getItem(storageKey('settings')) || '{}');
  $('soundToggle').checked = s.sound ?? true;
  $('vibrationToggle').checked = s.vibration ?? true;
  $('wakeToggle').checked = s.wake ?? true;
}

function toast(message) {
  const el = $('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 2300);
}

function getLoggedProfileId() {
  const id = sessionStorage.getItem('maromba_auth');
  return id && PROFILES[id] ? id : null;
}
function showApp() {
  migrateLegacyJoseData();
  applyProfileTheme();
  $('loginView').classList.add('hidden');
  $('appView').classList.remove('hidden');
  $('sessionView').classList.add('hidden');
  switchScreen('homeScreen', false);
  renderHome(); renderWorkouts(); renderHistory(); loadSettings();
}
function showLogin() {
  state.profileId = null;
  document.documentElement.style.setProperty('--accent', '#c8ff35');
  document.documentElement.style.setProperty('--accent-rgb', '200,255,53');
  document.title = 'Maromba Duo';
  $('appView').classList.add('hidden');
  $('sessionView').classList.add('hidden');
  $('loginView').classList.remove('hidden');
}

$('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  $('loginError').textContent = '';
  const email = $('emailInput').value.trim().toLowerCase();
  const hash = await sha256($('passwordInput').value);
  const match = Object.values(PROFILES).find(p => p.email === email && p.passwordHash === hash);
  if (match) {
    state.profileId = match.id;
    sessionStorage.setItem('maromba_auth', match.id);
    $('passwordInput').value = '';
    showApp();
  } else {
    $('loginError').textContent = 'E-mail ou senha incorretos.';
  }
});
$('togglePassword').addEventListener('click', () => {
  const p = $('passwordInput');
  p.type = p.type === 'password' ? 'text' : 'password';
});
$('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem('maromba_auth');
  endSession(false);
  showLogin();
});

function getPlanForDate(date=new Date()) {
  const jsDay=date.getDay();
  const map=[6,0,1,2,3,4,5];
  return weekPlan(date)[map[jsDay]];
}
function getTodayPlan() { return getPlanForDate(new Date()); }
function workoutLabel(id) {
  if (!id) return '—';
  const w = workouts()[id];
  return w?.shortLabel || id;
}

function renderHome() {
  const today = getTodayPlan();
  if (today?.workout) {
    const w = workouts()[today.workout];
    $('todayChip').textContent = `HOJE • ${escapeHtml(w.shortLabel || w.id)}`;
    $('todayWorkoutTitle').textContent = w.title;
    $('todayWorkoutSubtitle').textContent = `${w.exercises.length} exercícios/blocos • ${restRangeForWorkout(w)}`;
    $('startTodayBtn').textContent = 'Começar treino';
    $('startTodayBtn').disabled = false;
    $('startTodayBtn').onclick = () => startWorkout(w.id);
  } else {
    $('todayChip').textContent = 'HOJE • DESCANSO';
    $('todayWorkoutTitle').textContent = 'Recuperação';
    $('todayWorkoutSubtitle').textContent = 'Dia de descanso. Hidrate-se, durma bem e recupere.';
    $('startTodayBtn').textContent = 'Ver treinos';
    $('startTodayBtn').disabled = false;
    $('startTodayBtn').onclick = () => switchScreen('workoutsScreen');
  }
  const todayIndex = [6,0,1,2,3,4,5][new Date().getDay()];
  $('weekGrid').innerHTML = weekPlan().map((d,i) => `<div class="day-card ${d.workout ? 'training':''} ${i===todayIndex?'today':''}"><small>${d.day}</small><strong>${escapeHtml(workoutLabel(d.workout))}</strong></div>`).join('');
  const history = getHistory();
  $('completedCount').textContent = history.length;
  const totalSec = history.reduce((sum,h)=>sum+(h.duration||0),0);
  $('totalMinutes').textContent = Math.round(totalSec/60);
}

function restRangeForWorkout(w) {
  const values = [...new Set(w.exercises.map(e => e.rest).filter(Boolean))].sort((a,b)=>a-b);
  if (!values.length) return 'intervalo livre';
  if (values.length === 1) return `${formatRest(values[0])} de intervalo`;
  return `${formatRest(values[0])}–${formatRest(values[values.length-1])}`;
}
function renderWorkouts() {
  $('workoutsIntro').textContent = state.profileId === 'jose'
    ? 'Seis dias organizados por grupamento, com quinta de core + cardio leve e domingo de descanso.'
    : 'Semana alternada: uma começa com pernas, a seguinte com superiores; dois treinos de braços e um funcional leve.';
  $('workoutCards').innerHTML = Object.values(workouts()).map(w => `
    <article class="workout-card">
      <div class="workout-card-top">
        <div class="workout-badge">${escapeHtml(w.shortLabel || w.id)}</div>
        <div style="flex:1"><span class="eyebrow">${w.id === 'CARDIO' ? 'DIA LEVE' : `TREINO ${escapeHtml(w.id)}`}</span><h3>${escapeHtml(w.title)}</h3><p>${w.exercises.length} exercícios cadastrados</p></div>
      </div>
      <div class="workout-meta"><span>${w.exercises.reduce((s,e)=>s+e.sets,0)} séries/blocos</span><span>${escapeHtml(restRangeForWorkout(w))}</span><span>vídeos de execução</span></div>
      <button class="primary-button wide" onclick="startWorkout('${w.id}')">Abrir ${w.id === 'CARDIO' ? 'treino' : `treino ${w.id}`}</button>
    </article>`).join('');
}

function switchScreen(id, scroll=true) {
  if (id === 'healthScreen' && state.profileId !== 'livia') id = 'homeScreen';
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active-screen', s.id===id));
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active', b.dataset.target===id));
  if (id==='historyScreen') renderHistory();
  if (id==='healthScreen') renderHealth();
  if (scroll) window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>switchScreen(btn.dataset.target)));

function startWorkout(id) {
  const w = workouts()[id];
  if (!w) return;
  state.activeWorkout = id;
  state.sessionStart = Date.now();
  state.completedSets = {};
  $('appView').classList.add('hidden');
  $('sessionView').classList.remove('hidden');
  $('sessionLabel').textContent = w.shortLabel || `TREINO ${w.id}`;
  $('sessionTitle').textContent = w.title;
  $('warmupTitle').textContent = ['CORE','HYROX'].includes(w.id) ? 'Prepare o corpo' : 'Aquecimento primeiro';
  $('warmupText').textContent = w.warmup;
  renderExercises();
  updateSessionProgress();
  clearInterval(state.sessionTicker);
  state.sessionTicker = setInterval(updateElapsed, 1000);
  updateElapsed();
  window.scrollTo(0,0);
}
window.startWorkout = startWorkout;

function exerciseScheme(e) {
  if (e.scheme) return e.scheme;
  return `${e.sets} ${e.sets === 1 ? 'série' : 'séries'} × ${e.reps} ${String(e.reps).includes('min') || String(e.reps).includes('s') ? '' : 'repetições'}`.trim();
}
function renderExercises() {
  const w = workouts()[state.activeWorkout];
  const weights = JSON.parse(localStorage.getItem(storageKey('weights')) || '{}');
  $('exerciseList').innerHTML = w.exercises.map((e,i)=>{
    const key = `${w.id}-${i}`;
    const done = state.completedSets[key] || [];
    return `<article class="exercise-card ${done.length===e.sets?'completed':''}" id="exercise-${i}">
      <div class="exercise-head">
        <div><span class="exercise-number">EXERCÍCIO ${String(i+1).padStart(2,'0')}</span><h3>${escapeHtml(e.name)}</h3><p>${escapeHtml(exerciseScheme(e))}</p></div>
        <button class="video-button" onclick="openVideo(${i})">▶ Vídeo</button>
      </div>
      <div class="exercise-body">
        <div><div class="set-label">Marcar séries</div><div class="set-buttons">${Array.from({length:e.sets},(_,s)=>{ const isWarm=s<(e.warmupSets||0); const label=isWarm?`A${s+1}`:(s+1-(e.warmupSets||0)); return `<button class="set-button ${isWarm?'warmup-set':''} ${done.includes(s)?'done':''}" onclick="toggleSet(${i},${s})">${done.includes(s)?'✓':label}</button>`; }).join('')}</div></div>
        <div class="weight-input-wrap"><div class="set-label">${e.name.includes('Esteira') || e.name.includes('Bicicleta') ? 'Observação' : 'Carga (kg)'}</div><input class="weight-input" ${e.name.includes('Esteira') || e.name.includes('Bicicleta') ? 'type="text" inputmode="text" placeholder="ritmo"' : 'inputmode="decimal" type="number" min="0" step="0.5" placeholder="0"'} value="${escapeHtml(weights[key] ?? '')}" onchange="saveWeight('${key}', this.value)"></div>
      </div>
      <div class="rest-note"><span>Intervalo padrão</span><strong>${formatRest(e.rest)}</strong></div>
    </article>`;
  }).join('');
}

function saveWeight(key,value) {
  const weights = JSON.parse(localStorage.getItem(storageKey('weights')) || '{}');
  if (value === '') delete weights[key]; else weights[key] = value;
  localStorage.setItem(storageKey('weights'), JSON.stringify(weights));
}
window.saveWeight = saveWeight;

function toggleSet(exIndex,setIndex) {
  const key = `${state.activeWorkout}-${exIndex}`;
  const w = workouts()[state.activeWorkout];
  state.completedSets[key] ||= [];
  const pos = state.completedSets[key].indexOf(setIndex);
  if (pos >= 0) {
    state.completedSets[key].splice(pos,1);
  } else {
    state.completedSets[key].push(setIndex);
    const e = w.exercises[exIndex];
    if (state.completedSets[key].length < e.sets) startTimer(e.rest, e.name);
    else toast(`${e.name}: exercício concluído ✓`);
  }
  renderExercises();
  updateSessionProgress();
}
window.toggleSet = toggleSet;

function updateSessionProgress() {
  const w = workouts()[state.activeWorkout];
  const total = w.exercises.reduce((sum,e)=>sum+e.sets,0);
  const done = Object.values(state.completedSets).reduce((sum,a)=>sum+a.length,0);
  const pct = total ? Math.round((done/total)*100) : 0;
  $('sessionProgressText').textContent = `${pct}%`;
  $('sessionProgressBar').style.width = `${pct}%`;
}
function updateElapsed() {
  if (!state.sessionStart) return;
  const sec = Math.floor((Date.now()-state.sessionStart)/1000);
  $('sessionElapsed').textContent = formatClock(sec);
}
function formatClock(sec) { const m=Math.floor(sec/60), s=sec%60; return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }
function formatRest(sec) { return sec===45?'45 s':sec===60?'1 min':sec===90?'1 min 30 s':sec===120?'2 min':`${sec} s`; }

$('closeSessionBtn').addEventListener('click',()=>{
  if (confirm('Sair do treino atual? As séries marcadas desta sessão não serão registradas no histórico.')) endSession(false, true);
});
function endSession(showHome=true, keepProfile=true) {
  clearInterval(state.sessionTicker); stopTimer();
  state.activeWorkout=null; state.sessionStart=null; state.completedSets={};
  $('sessionView').classList.add('hidden');
  if (keepProfile && state.profileId) $('appView').classList.remove('hidden');
  if (showHome && state.profileId) { switchScreen('homeScreen'); renderHome(); }
}

$('finishWorkoutBtn').addEventListener('click',()=>{
  const w = workouts()[state.activeWorkout];
  const total = w.exercises.reduce((sum,e)=>sum+e.sets,0);
  const done = Object.values(state.completedSets).reduce((sum,a)=>sum+a.length,0);
  if (done < total && !confirm(`Você marcou ${done} de ${total} séries/blocos. Concluir mesmo assim?`)) return;
  const duration = Math.max(1,Math.floor((Date.now()-state.sessionStart)/1000));
  const history = getHistory();
  const now=new Date();
  history.unshift({ id:Date.now(), workout:state.activeWorkout, title:w.title, date:now.toISOString(), localDate:localIsoDate(now), duration, done, total });
  localStorage.setItem(storageKey('history'),JSON.stringify(history.slice(0,80)));
  toast(`Treino salvo, ${profile().name}! 💪`);
  endSession(true, true);
});

function getHistory(){ return JSON.parse(localStorage.getItem(storageKey('history')) || '[]'); }
function localIsoDate(d=new Date()){ const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0'); return `${y}-${m}-${day}`; }
function historyLocalDate(h){ return h.localDate || localIsoDate(new Date(h.date)); }
let calendarCursor = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
function monthName(d){ return d.toLocaleDateString('pt-BR',{month:'long',year:'numeric'}).replace(/^./,c=>c.toUpperCase()); }
function renderCalendar(){
  if(!$('calendarGrid')) return;
  const year=calendarCursor.getFullYear(), month=calendarCursor.getMonth();
  $('calendarMonth').textContent=monthName(calendarCursor);
  const history=getHistory();
  const byDate={}; history.forEach(h=>{ const k=historyLocalDate(h); (byDate[k] ||= []).push(h); });
  const first=new Date(year,month,1); const last=new Date(year,month+1,0); const mondayIndex=(first.getDay()+6)%7;
  const cells=[];
  for(let i=0;i<mondayIndex;i++) cells.push('<div class="calendar-day empty"></div>');
  const today=localIsoDate(); let planned=0, done=0, missed=0, minutes=0;
  for(let day=1;day<=last.getDate();day++){
    const d=new Date(year,month,day); const iso=localIsoDate(d); const plan=getPlanForDate(d); const sessions=byDate[iso]||[];
    const isFuture=d>new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
    const scheduled=!!plan?.workout; const completed=sessions.length>0;
    let status='rest', label='Descanso';
    if(completed){ status='done'; label='Foi'; }
    else if(scheduled && !isFuture){ status='missed'; label='Faltou'; }
    else if(scheduled){ status='planned'; label=workoutLabelForDate(plan.workout,d); }
    if(iso===today) status += ' today';
    if(scheduled && !isFuture){ planned++; if(completed) done++; else missed++; }
    sessions.forEach(h=>minutes+=Math.round((h.duration||0)/60));
    const sessionMin=sessions.reduce((a,h)=>a+Math.round((h.duration||0)/60),0);
    cells.push(`<div class="calendar-day ${status}" title="${escapeHtml(label)}${sessionMin?` • ${sessionMin} min`:''}"><strong>${day}</strong><span>${completed?'✓':scheduled&&!isFuture?'×':scheduled?'•':'—'}</span>${sessionMin?`<small>${sessionMin}m</small>`:''}</div>`);
  }
  $('calendarGrid').innerHTML=cells.join('');
  const monthSessions=history.filter(h=>{const dt=new Date(h.date);return dt.getFullYear()===year&&dt.getMonth()===month;});
  const avg=monthSessions.length?Math.round(monthSessions.reduce((a,h)=>a+(h.duration||0),0)/monthSessions.length/60):0;
  $('calendarSummary').innerHTML=`<div><strong>${done}/${planned||0}</strong><span>presenças previstas</span></div><div><strong>${missed}</strong><span>faltas</span></div><div><strong>${avg} min</strong><span>tempo médio</span></div>`;
}
function workoutLabelForDate(id,date){ if(!id) return 'Descanso'; const p=profile(); const w=p?.workouts?.[id]; return w?.shortLabel||id; }
function renderHistory(){
  renderCalendar();
  const history=getHistory();
  if(!history.length){ $('historyList').innerHTML=`<div class="history-empty">Ainda não há treinos concluídos para ${escapeHtml(profile().name)}. Quando terminar o primeiro, ele aparece aqui. 💪</div>`; return; }
  $('historyList').innerHTML=history.map(h=>{
    const d=new Date(h.date); const pct=Math.round((h.done/h.total)*100);
    const label=h.title||`Treino ${h.workout}`;
    return `<article class="history-item"><div><h4>${escapeHtml(label)}</h4><p>${d.toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'})} • ${Math.max(1,Math.round(h.duration/60))} min • ${h.done}/${h.total} séries</p></div><div class="history-score">${pct}%</div></article>`;
  }).join('');
}
$('calendarPrev')?.addEventListener('click',()=>{ calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()-1,1); renderCalendar(); });
$('calendarNext')?.addEventListener('click',()=>{ calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+1,1); renderCalendar(); });
$('calendarToday')?.addEventListener('click',()=>{ calendarCursor=new Date(new Date().getFullYear(),new Date().getMonth(),1); renderCalendar(); });

async function requestWakeLock(){
  if(!$('wakeToggle').checked || !('wakeLock' in navigator)) return;
  try { state.wakeLock = await navigator.wakeLock.request('screen'); } catch(e) {}
}
function releaseWakeLock(){ try { state.wakeLock?.release(); } catch(e){} state.wakeLock=null; }

function startTimer(seconds, exerciseName='Próxima série') {
  stopTimer(false);
  state.timer.total=seconds; state.timer.remaining=seconds; state.timer.exerciseName=exerciseName; state.timer.running=true;
  $('timerExerciseName').textContent=exerciseName;
  $('timerPanel').classList.remove('hidden');
  $('pauseTimerBtn').textContent='Pausar';
  setPresetActive(seconds); updateTimerUI(); requestWakeLock();
  state.timer.interval=setInterval(()=>{
    if(!state.timer.running) return;
    state.timer.remaining--;
    updateTimerUI();
    if(state.timer.remaining<=0){ timerFinished(); }
  },1000);
}
function stopTimer(hide=true){ clearInterval(state.timer.interval); state.timer.interval=null; state.timer.running=false; releaseWakeLock(); if(hide) $('timerPanel').classList.add('hidden'); }
function timerFinished(){
  clearInterval(state.timer.interval); state.timer.interval=null; state.timer.running=false; state.timer.remaining=0; updateTimerUI(); releaseWakeLock();
  if($('vibrationToggle').checked && navigator.vibrate) navigator.vibrate([180,90,180]);
  if($('soundToggle').checked) beep();
  $('pauseTimerBtn').textContent='Fechar'; toast('Intervalo concluído. Próxima série!');
}
function beep(){
  try { const ctx=new (window.AudioContext||window.webkitAudioContext)(); const o=ctx.createOscillator(); const g=ctx.createGain(); o.frequency.value=880; g.gain.setValueAtTime(.18,ctx.currentTime); g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.35); o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime+.35); } catch(e){}
}
function updateTimerUI(){
  $('timerText').textContent=formatClock(state.timer.remaining);
  const progress=state.timer.total ? (1-state.timer.remaining/state.timer.total)*360 : 360;
  $('timerRing').style.setProperty('--progress',`${Math.max(0,Math.min(360,progress))}deg`);
}
function setPresetActive(sec){ document.querySelectorAll('.timer-presets button').forEach(b=>b.classList.toggle('active',Number(b.dataset.seconds)===sec)); }

document.querySelectorAll('.timer-presets button').forEach(btn=>btn.addEventListener('click',()=>startTimer(Number(btn.dataset.seconds),state.timer.exerciseName)));
$('pauseTimerBtn').addEventListener('click',()=>{
  if(state.timer.remaining<=0){ stopTimer(); $('pauseTimerBtn').textContent='Pausar'; return; }
  state.timer.running=!state.timer.running;
  $('pauseTimerBtn').textContent=state.timer.running?'Pausar':'Continuar';
});
$('resetTimerBtn').addEventListener('click',()=>startTimer(state.timer.total,state.timer.exerciseName));
$('skipTimerBtn').addEventListener('click',()=>{ stopTimer(); $('pauseTimerBtn').textContent='Pausar'; });
$('closeTimerBtn').addEventListener('click',()=>{ stopTimer(); $('pauseTimerBtn').textContent='Pausar'; });

function openVideo(index){
  const e=workouts()[state.activeWorkout].exercises[index];
  $('videoTitle').textContent=e.name;
  let html='';
  if(e.video?.startsWith('youtube:')){
    const id=e.video.split(':')[1];
    html=`<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0" title="${escapeHtml(e.name)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  } else if(e.video?.startsWith('vimeo:')){
    const id=e.video.split(':')[1];
    html=`<iframe src="https://player.vimeo.com/video/${encodeURIComponent(id)}?title=0&byline=0&portrait=0" title="${escapeHtml(e.name)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  } else {
    const q=encodeURIComponent(e.search || `${e.name} execução correta musculação`);
    html=`<div class="video-fallback"><span>🎥</span><strong>Demonstração do exercício</strong><p>Abra a busca pronta no YouTube e escolha uma demonstração de um profissional de sua confiança.</p><a class="youtube-link" href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener">Pesquisar vídeo</a></div>`;
  }
  $('videoBox').innerHTML=html;
  $('videoTips').innerHTML=`<strong>Dica de execução:</strong> ${escapeHtml(e.tip)}<br><br><span style="color:#89958f">Vídeos servem como apoio visual e não substituem a correção presencial de um profissional.</span>`;
  $('videoModal').classList.remove('hidden');
}
window.openVideo=openVideo;
function closeVideo(){ $('videoModal').classList.add('hidden'); $('videoBox').innerHTML=''; }
$('closeVideoBtn').addEventListener('click',closeVideo);
$('videoModal').addEventListener('click',(e)=>{ if(e.target===$('videoModal')) closeVideo(); });



// ===== Acompanhamento pessoal da Livia =====
function healthKey(name){ return `maromba_livia_health_${name}`; }
function getHealth(name){ try { return JSON.parse(localStorage.getItem(healthKey(name)) || '[]'); } catch(e){ return []; } }
function setHealth(name,value){ localStorage.setItem(healthKey(name), JSON.stringify(value)); }
function brDate(iso){ if(!iso) return '—'; const [y,m,d]=iso.split('-'); return `${d}/${m}/${y}`; }
function todayIso(){ return new Date().toISOString().slice(0,10); }

function renderHealth(){
  if(state.profileId !== 'livia') return;
  const doseDate=$('doseDate'), measureDate=$('measureDate');
  if(doseDate && !doseDate.value) doseDate.value=todayIso();
  if(measureDate && !measureDate.value) measureDate.value=todayIso();
  const doses=getHealth('doses').sort((a,b)=>b.date.localeCompare(a.date));
  const measures=getHealth('measures').sort((a,b)=>b.date.localeCompare(a.date));
  if($('doseSummary')){
    const last=doses[0], prev=doses[1];
    const delta=last&&prev ? Number(last.weight)-Number(prev.weight) : null;
    $('doseSummary').innerHTML=`<div class="summary-pill"><small>Último peso</small><strong>${last ? `${Number(last.weight).toFixed(1)} kg` : '—'}</strong></div><div class="summary-pill"><small>Variação semanal</small><strong>${delta===null?'—':`${delta>0?'+':''}${delta.toFixed(1)} kg`}</strong></div>`;
  }
  if($('doseHistory')) $('doseHistory').innerHTML=doses.slice(0,8).map((d,i)=>`<div class="health-row"><div><strong>${brDate(d.date)} • ${escapeHtml(String(d.dose))} mg</strong><p>${Number(d.weight).toFixed(1)} kg${d.note?` • ${escapeHtml(d.note)}`:''}</p></div><button type="button" onclick="deleteHealth('doses',${i})" aria-label="Excluir">×</button></div>`).join('') || '<div class="history-empty">Ainda não há semanas registradas.</div>';
  if($('measureHistory')) $('measureHistory').innerHTML=measures.slice(0,6).map((m,i)=>`<div class="health-row"><div><strong>${brDate(m.date)}</strong><p>Cintura ${fmtMeasure(m.waist)} • Quadril ${fmtMeasure(m.hip)} • Abdômen ${fmtMeasure(m.abdomen)}<br>Braços E/D ${fmtMeasure(m.armL)} / ${fmtMeasure(m.armR)} • Coxas E/D ${fmtMeasure(m.thighL)} / ${fmtMeasure(m.thighR)} • Panturrilha ${fmtMeasure(m.calf)}</p></div><button type="button" onclick="deleteHealth('measures',${i})" aria-label="Excluir">×</button></div>`).join('') || '<div class="history-empty">Ainda não há medidas mensais registradas.</div>';
  updatePdfStatus();
}
function fmtMeasure(v){ return v!==undefined && v!=='' && v!==null ? `${Number(v).toFixed(1)} cm` : '—'; }
function deleteHealth(kind,index){
  if(state.profileId!=='livia') return;
  const arr=getHealth(kind).sort((a,b)=>b.date.localeCompare(a.date));
  if(!confirm('Excluir este registro?')) return;
  arr.splice(index,1); setHealth(kind,arr); renderHealth();
}
window.deleteHealth=deleteHealth;

$('doseForm')?.addEventListener('submit',e=>{
  e.preventDefault(); if(state.profileId!=='livia') return;
  const record={date:$('doseDate').value,dose:Number($('doseMg').value),weight:Number($('weeklyWeight').value),note:$('doseNote').value.trim()};
  const arr=getHealth('doses');
  const idx=arr.findIndex(x=>x.date===record.date); if(idx>=0) arr[idx]=record; else arr.push(record);
  setHealth('doses',arr); e.target.reset(); $('doseDate').value=todayIso(); renderHealth(); toast('Semana salva no seu acompanhamento ♡');
});

$('measureForm')?.addEventListener('submit',e=>{
  e.preventDefault(); if(state.profileId!=='livia') return;
  const record={date:$('measureDate').value};
  document.querySelectorAll('[data-measure]').forEach(inp=>record[inp.dataset.measure]=inp.value===''?'':Number(inp.value));
  const arr=getHealth('measures'); const idx=arr.findIndex(x=>x.date===record.date); if(idx>=0) arr[idx]=record; else arr.push(record);
  setHealth('measures',arr); e.target.reset(); $('measureDate').value=todayIso(); renderHealth(); toast('Medidas mensais salvas ♡');
});

function openHealthDb(){
  return new Promise((resolve,reject)=>{ const req=indexedDB.open('maromba-duo-private',1); req.onupgradeneeded=()=>{ if(!req.result.objectStoreNames.contains('files')) req.result.createObjectStore('files'); }; req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error); });
}
async function storePdf(file){ const db=await openHealthDb(); await new Promise((resolve,reject)=>{ const tx=db.transaction('files','readwrite'); tx.objectStore('files').put(file,'livia-latest-pdf'); tx.oncomplete=resolve; tx.onerror=()=>reject(tx.error); }); localStorage.setItem(healthKey('pdfMeta'),JSON.stringify({name:file.name,size:file.size,updated:new Date().toISOString()})); }
async function loadPdf(){ const db=await openHealthDb(); return await new Promise((resolve,reject)=>{ const tx=db.transaction('files','readonly'); const req=tx.objectStore('files').get('livia-latest-pdf'); req.onsuccess=()=>resolve(req.result||null); req.onerror=()=>reject(req.error); }); }
async function updatePdfStatus(){ if(!$('pdfStatus')||state.profileId!=='livia') return; const meta=JSON.parse(localStorage.getItem(healthKey('pdfMeta'))||'null'); $('pdfStatus').textContent=meta?`Último PDF: ${meta.name} • salvo em ${new Date(meta.updated).toLocaleDateString('pt-BR')}.`:'Nenhum PDF importado neste dispositivo.'; }

async function getPdfJs(){
  if(window.pdfjsLib) return window.pdfjsLib;
  const mod=await import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs');
  mod.GlobalWorkerOptions.workerSrc='https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
  return mod;
}
function numFromText(s){ const m=String(s).replace(',','.').match(/-?\d+(?:\.\d+)?/); return m?Number(m[0]):null; }
function normalizeLabel(s){ return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim(); }
async function parseAssessmentPdf(file){
  const pdfjs=await getPdfJs(); const data=await file.arrayBuffer(); const doc=await pdfjs.getDocument({data}).promise;
  const pages=[];
  for(let p=1;p<=doc.numPages;p++){
    const page=await doc.getPage(p); const tc=await page.getTextContent();
    const rows=[];
    tc.items.filter(i=>i.str?.trim()).forEach(i=>{ const x=i.transform[4], y=i.transform[5], text=i.str.trim(); let row=rows.find(r=>Math.abs(r.y-y)<2); if(!row){row={y,items:[]}; rows.push(row);} row.items.push({x,text}); });
    rows.forEach(r=>r.items.sort((a,b)=>a.x-b.x)); pages.push(rows);
  }
  const allRows=pages.flat();
  const dateItems=[]; allRows.forEach(r=>r.items.forEach(i=>{ if(/^\d{2}\/\d{2}\/\d{4}$/.test(i.text)) dateItems.push({x:i.x,date:i.text}); }));
  const unique=[]; dateItems.forEach(d=>{ if(!unique.some(u=>u.date===d.date)) unique.push(d); });
  const dates=unique.slice(0,6);
  if(!dates.length) throw new Error('Não encontrei as datas da avaliação.');
  const aliases={
    weight:['peso atual (kg)','peso atual'], neck:['circunferencia do pescoco'], waist:['circunferencia da cintura'], hip:['circunferencia do quadril'], abdomen:['circunferencia do abdomen'], armL:['braco esq. relaxado','braco esq relaxado'], armR:['braco dir. relaxado','braco dir relaxado'], thighL:['coxa esq.','coxa esq'], thighR:['coxa dir.','coxa dir'], calf:['panturrilha']
  };
  const out={dates:dates.map(d=>d.date), values:{}};
  for(const [key,keys] of Object.entries(aliases)){
    const row=allRows.find(r=>{const t=normalizeLabel(r.items.map(i=>i.text).join(' ')); return keys.some(k=>t.includes(k));});
    if(!row) continue;
    out.values[key]=dates.map(d=>{
      const candidates=row.items.map(i=>({dist:Math.abs(i.x-d.x),v:numFromText(i.text),x:i.x,text:i.text})).filter(c=>c.v!==null && c.x>d.x-18 && c.x<d.x+55).sort((a,b)=>a.dist-b.dist);
      return candidates[0]?.v ?? null;
    });
  }
  return out;
}
function dateToIso(br){ const [d,m,y]=br.split('/'); return `${y}-${m}-${d}`; }
function mergePdfData(parsed){
  const measures=getHealth('measures'); const doses=getHealth('doses');
  parsed.dates.forEach((d,idx)=>{
    const date=dateToIso(d); const m={date}; let has=false;
    ['neck','waist','hip','abdomen','armL','armR','thighL','thighR','calf'].forEach(k=>{const v=parsed.values[k]?.[idx]; if(v!==null&&v!==undefined){m[k]=v;has=true;}});
    if(has){const mi=measures.findIndex(x=>x.date===date); if(mi>=0) measures[mi]={...measures[mi],...m}; else measures.push(m);}
    const w=parsed.values.weight?.[idx];
    if(w!==null&&w!==undefined){ const di=doses.findIndex(x=>x.date===date); if(di>=0) doses[di].weight=w; else doses.push({date,dose:'',weight:w,note:'Peso importado da avaliação PDF'}); }
  });
  setHealth('measures',measures); setHealth('doses',doses);
}

$('importPdfBtn')?.addEventListener('click',async()=>{
  if(state.profileId!=='livia') return; const file=$('pdfInput')?.files?.[0]; if(!file){toast('Selecione um PDF primeiro.');return;}
  $('pdfStatus').textContent='Lendo o PDF...';
  try{ const parsed=await parseAssessmentPdf(file); mergePdfData(parsed); await storePdf(file); $('pdfStatus').textContent=`PDF importado. Encontrei ${parsed.dates.length} data(s) de avaliação e atualizei peso/medidas disponíveis.`; renderHealth(); toast('PDF importado e evolução atualizada ♡'); }
  catch(err){ console.error(err); $('pdfStatus').textContent='Não consegui ler automaticamente este formato. O PDF foi mantido no seu aparelho e você pode registrar os valores manualmente.'; try{await storePdf(file);}catch(e){} }
});
$('openSavedPdfBtn')?.addEventListener('click',async()=>{ if(state.profileId!=='livia') return; const file=await loadPdf(); if(!file){toast('Nenhum PDF salvo neste dispositivo.');return;} const url=URL.createObjectURL(file); window.open(url,'_blank','noopener'); setTimeout(()=>URL.revokeObjectURL(url),60000); });

document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='visible' && state.timer.running) requestWakeLock(); });
['soundToggle','vibrationToggle','wakeToggle'].forEach(id=>$(id).addEventListener('change',saveSettings));

if ('serviceWorker' in navigator) window.addEventListener('load',async()=>{
  const local=['localhost','127.0.0.1'].includes(location.hostname) || location.protocol==='file:';
  if(local){ const regs=await navigator.serviceWorker.getRegistrations().catch(()=>[]); regs.forEach(r=>r.unregister()); return; }
  navigator.serviceWorker.register('service-worker.js').catch(()=>{});
});
const loggedId = getLoggedProfileId();
if (loggedId) { state.profileId = loggedId; showApp(); } else showLogin();
