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
    sourceText: 'Plano do José ajustado a partir da ficha inicial: sem agachamento tradicional, mesa flexora e elevação pélvica; quarta com cardio + abdômen e sábado com superiores completo.',
    workouts: {
      A: {
        id: 'A',
        title: 'Pernas, Peito, Ombros e Tríceps',
        warmup: 'Faça 5–8 min de aquecimento e mobilidade de quadril/ombros antes de começar.',
        exercises: [
          { name: 'Leg Press 45°', sets: 3, reps: 15, rest: 90, video: 'youtube:c74ubBbL3zU', tip: 'Mantenha quadril e lombar apoiados no encosto; controle a descida e evite travar os joelhos no topo.' },
          { name: 'Cadeira Extensora', sets: 3, reps: 12, rest: 60, video: 'youtube:-duwMxZrzwc', tip: 'Ajuste o eixo do aparelho à linha do joelho e execute sem impulso.' },
          { name: 'Supino Inclinado com Halteres', sets: 3, reps: 12, rest: 90, video: 'youtube:Jtjfm0xAD7E', tip: 'Estabilize as escápulas e desça os halteres com controle.' },
          { name: 'Desenvolvimento de Ombros', sets: 3, reps: 12, rest: 90, video: 'youtube:74HRnJ6Sdxg', tip: 'Mantenha o tronco firme e não compense arqueando a lombar.' },
          { name: 'Tríceps na Polia', sets: 3, reps: 12, rest: 60, video: 'youtube:DdNmSGiYaAI', tip: 'Cotovelos próximos do corpo; mova principalmente os antebraços.' },
          { name: 'Panturrilha no Leg Press', sets: 3, reps: 15, rest: 60, search: 'panturrilha no leg press execução correta', tip: 'Use amplitude confortável e controle a volta do movimento.' }
        ]
      },
      B: {
        id: 'B',
        title: 'Posteriores, Costas, Bíceps e Ombros',
        warmup: 'Comece com mobilidade de quadril e ombros e 1 série leve dos primeiros exercícios.',
        exercises: [
          { name: 'Levantamento Terra Romeno com Halteres', sets: 3, reps: 12, rest: 90, search: 'levantamento terra romeno com halteres execução correta', tip: 'Leve o quadril para trás, mantenha a coluna neutra e os halteres próximos das pernas.' },
          { name: 'Cadeira Flexora', sets: 3, reps: 12, rest: 60, search: 'cadeira flexora execução correta', tip: 'Ajuste o aparelho ao joelho e faça a flexão sem tirar o quadril do encosto.' },
          { name: 'Puxada Alta Frontal', sets: 3, reps: 12, rest: 90, search: 'puxada alta frontal execução correta', tip: 'Puxe a barra em direção à parte alta do peito, sem jogar o tronco para trás.' },
          { name: 'Remada Baixa com Triângulo', sets: 3, reps: 12, rest: 90, video: 'youtube:Os_orWmhqxY', tip: 'Puxe o triângulo para o abdômen, mantendo o peito aberto e sem balanço.' },
          { name: 'Rosca Bíceps Direta', sets: 3, reps: 12, rest: 60, video: 'youtube:czTXht-bgyY', tip: 'Mantenha os cotovelos estáveis e evite usar o tronco para embalar.' },
          { name: 'Elevação Lateral', sets: 3, reps: 12, rest: 60, video: 'youtube:Tt8m9zlvNx8', tip: 'Use carga controlável e eleve os braços sem impulso.' }
        ]
      },
      CARDIO: {
        id: 'CARDIO',
        shortLabel: 'C+A',
        title: 'Cardio + Abdômen',
        warmup: 'Quarta é um dia mais leve: mantenha o cardio confortável e foque na execução do abdômen.',
        exercises: [
          { name: 'Esteira ou Bicicleta', sets: 1, reps: '20 min', scheme: '20 min • ritmo moderado', rest: 45, search: 'cardio esteira caminhada inclinada academia', tip: 'Mantenha um ritmo em que você consiga falar frases curtas sem ficar ofegante demais.' },
          { name: 'Abdominal na Máquina', sets: 3, reps: 15, rest: 60, search: 'abdominal máquina execução correta', tip: 'Faça a flexão do tronco com controle; evite puxar com os braços.' },
          { name: 'Prancha', sets: 3, reps: '40 s', rest: 60, search: 'prancha abdominal execução correta', tip: 'Contraia abdômen e glúteos e mantenha o corpo alinhado.' },
          { name: 'Elevação de Joelhos na Cadeira Romana', sets: 3, reps: 12, rest: 60, search: 'elevação joelhos cadeira romana abdominal execução', tip: 'Eleve os joelhos sem embalo e controle a descida.' },
          { name: 'Crunch na Polia', sets: 3, reps: 15, rest: 60, search: 'crunch na polia abdominal execução correta', tip: 'Pense em aproximar as costelas do quadril, sem puxar a corda apenas com os braços.' }
        ]
      },
      S: {
        id: 'S',
        title: 'Superiores Completo',
        warmup: 'Faça mobilidade de ombros e uma série leve de supino e puxada antes das séries válidas.',
        exercises: [
          { name: 'Supino Reto com Halteres', sets: 3, reps: 12, rest: 90, search: 'supino reto com halteres execução correta', tip: 'Mantenha os pés apoiados e as escápulas firmes no banco.' },
          { name: 'Puxada Alta Frontal', sets: 3, reps: 12, rest: 90, search: 'puxada alta frontal execução correta', tip: 'Conduza os cotovelos para baixo e evite puxar atrás da cabeça.' },
          { name: 'Remada Baixa com Triângulo', sets: 3, reps: 12, rest: 90, video: 'youtube:Os_orWmhqxY', tip: 'Puxe em direção ao abdômen e segure o tronco estável.' },
          { name: 'Desenvolvimento de Ombros', sets: 3, reps: 12, rest: 90, video: 'youtube:74HRnJ6Sdxg', tip: 'Não deixe a lombar compensar o movimento.' },
          { name: 'Bi-set: Rosca Martelo + Tríceps Corda', sets: 3, reps: '12 + 12', rest: 60, search: 'rosca martelo triceps corda bi set', tip: 'Faça 12 repetições de rosca martelo e, em seguida, 12 de tríceps corda; só então descanse.' }
        ]
      }
    },
    weekPlan: [
      { day: 'Seg', workout: 'A' },
      { day: 'Ter', workout: 'B' },
      { day: 'Qua', workout: 'CARDIO' },
      { day: 'Qui', workout: 'A' },
      { day: 'Sex', workout: 'B' },
      { day: 'Sáb', workout: 'S' },
      { day: 'Dom', workout: null }
    ]
  },

  Livia: {
    id: 'livia',
    name: 'Livia',
    initial: 'L',
    email: 'livia@maromba.com',
    passwordHash: '249a553992739e990453f86f016306d9cd7f504df5605645180a8610660aaf6e',
    accent: '#e20980',
    accentRgb: '255,111,179',
    greeting: 'Bora, Livia! ✨',
    heroEmoji: '🏋️‍♀️',
    sourceText: 'Seu plano usa como base a ficha intermediária A/B/C enviada. A quarta-feira foi adaptada para abdômen, sem cardio, e sábado e domingo ficaram como descanso.',
    workouts: {
      A: {
        id: 'A',
        title: 'Pernas e Glúteos',
        warmup: 'Mobilidade de quadril antes do treino. Faça a primeira série da extensora como aquecimento.',
        exercises: [
          { name: 'Cadeira Extensora', sets: 4, reps: '1×20 + 3×12', scheme: '1 série × 20 + 3 séries × 12', rest: 90, video: 'youtube:-duwMxZrzwc', tip: 'Comece leve na série de 20 e mantenha o movimento controlado nas séries de trabalho.' },
          { name: 'Agachamento com Barra', sets: 4, reps: 15, rest: 90, search: 'agachamento com barra execução correta', tip: 'Mantenha o tronco firme, joelhos acompanhando a linha dos pés e use amplitude confortável.' },
          { name: 'Agachamento Hack', sets: 4, reps: 12, rest: 120, search: 'agachamento hack execução correta', tip: 'Apoie bem as costas no encosto e controle a descida.' },
          { name: 'Agachamento Cálice', sets: 3, reps: 20, rest: 90, search: 'agachamento cálice goblet squat execução correta', tip: 'Segure o halter próximo ao peito e mantenha o tronco estável.' }
        ]
      },
      B: {
        id: 'B',
        title: 'Costas, Ombros e Braços',
        warmup: 'Faça mobilidade de ombros e uma série leve do primeiro exercício.',
        exercises: [
          { name: 'Supino Reto com Halteres', sets: 4, reps: 12, rest: 60, search: 'supino reto com halteres execução correta', tip: 'Escápulas firmes no banco e descida controlada.' },
          { name: 'Puxada Alta Frontal', sets: 4, reps: 12, rest: 60, search: 'puxada alta frontal execução correta', tip: 'Puxe em direção à parte alta do peito sem balançar o tronco.' },
          { name: 'Remada Unilateral (Serrote)', sets: 3, reps: 12, rest: 60, search: 'remada unilateral serrote execução correta', tip: 'Mantenha a coluna neutra e puxe o halter em direção ao quadril.' },
          { name: 'Desenvolvimento Arnold', sets: 4, reps: 12, rest: 60, search: 'desenvolvimento arnold execução correta', tip: 'Execute a rotação devagar e sem arquear a lombar.' },
          { name: 'Elevação Lateral', sets: 3, reps: 12, rest: 60, video: 'youtube:Tt8m9zlvNx8', tip: 'Controle a subida e a descida, evitando impulso.' },
          { name: 'Rosca Bíceps Direta', sets: 3, reps: 12, rest: 60, video: 'youtube:czTXht-bgyY', tip: 'Mantenha os cotovelos próximos do corpo e evite balanço.' },
          { name: 'Tríceps na Polia', sets: 3, reps: 12, rest: 60, video: 'youtube:DdNmSGiYaAI', tip: 'Cotovelos fixos junto ao corpo durante o movimento.' }
        ]
      },
      ABS: {
        id: 'ABS',
        title: 'Abdômen',
        warmup: 'Treino curto de core. Faça tudo com controle e sem pressa.',
        exercises: [
          { name: 'Dead Bug', sets: 3, reps: '10/lado', rest: 45, search: 'dead bug abdominal execução correta', tip: 'Mantenha a lombar apoiada e mova braços e pernas sem perder o controle do tronco.' },
          { name: 'Abdominal Infra no Banco', sets: 3, reps: 12, rest: 60, search: 'abdominal infra banco execução correta', tip: 'Evite embalar as pernas; pense em enrolar levemente a pelve.' },
          { name: 'Prancha', sets: 3, reps: '35–45 s', rest: 60, search: 'prancha abdominal execução correta', tip: 'Corpo alinhado, abdômen e glúteos contraídos.' },
          { name: 'Abdominal na Máquina', sets: 3, reps: 15, rest: 60, search: 'abdominal máquina execução correta', tip: 'Faça a flexão do tronco com controle, sem puxar a cabeça.' }
        ]
      },
      C: {
        id: 'C',
        title: 'Posteriores e Glúteos',
        warmup: 'Mobilidade de quadril e uma série leve de cadeira flexora antes das séries válidas.',
        exercises: [
          { name: 'Cadeira Flexora', sets: 4, reps: '1×20 + 3×12', scheme: '1 série × 20 + 3 séries × 12', rest: 60, search: 'cadeira flexora execução correta', tip: 'Mantenha o quadril apoiado e controle a volta.' },
          { name: 'Agachamento Sumô', sets: 4, reps: 15, rest: 60, search: 'agachamento sumô execução correta', tip: 'Pés mais abertos e joelhos acompanhando a direção das pontas dos pés.' },
          { name: 'Elevação Pélvica', sets: 4, reps: 15, rest: 90, video: 'youtube:-XjTnWCzYG4', tip: 'Suba contraindo os glúteos e evite hiperestender a lombar.' },
          { name: 'Agachamento Unilateral (Afundo)', sets: 3, reps: 15, rest: 90, video: 'youtube:XgWX-G6X5eY', tip: 'Mantenha o tronco estável e desça com controle.' },
          { name: 'Extensão de Glúteo na Polia', sets: 4, reps: 15, rest: 45, search: 'extensão glúteo na polia execução correta', tip: 'Movimente o quadril sem arquear a lombar e mantenha o tronco firme.' },
          { name: 'Cadeira Abdutora', sets: 4, reps: 15, rest: 45, video: 'youtube:50qHGus1TZk', tip: 'Abra as pernas de forma controlada e não deixe as placas baterem.' }
        ]
      }
    },
    weekPlan: [
      { day: 'Seg', workout: 'A' },
      { day: 'Ter', workout: 'B' },
      { day: 'Qua', workout: 'ABS' },
      { day: 'Qui', workout: 'C' },
      { day: 'Sex', workout: 'A' },
      { day: 'Sáb', workout: null },
      { day: 'Dom', workout: null }
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
function weekPlan() { return profile()?.weekPlan || []; }
function storageKey(name) { return `maromba_${state.profileId}_${name}`; }

function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[char]));
}

async function sha256(text) {
  const bytes = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
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

function getTodayPlan() {
  const jsDay = new Date().getDay();
  const map = [6,0,1,2,3,4,5];
  return weekPlan()[map[jsDay]];
}
function workoutLabel(id) {
  if (!id) return '—';
  const w = workouts()[id];
  return w?.shortLabel || id;
}

function renderHome() {
  const today = getTodayPlan();
  if (today?.workout) {
    const w = workouts()[today.workout];
    $('todayChip').textContent = `HOJE • ${w.id === 'CARDIO' ? 'CARDIO + ABS' : `TREINO ${w.id}`}`;
    $('todayWorkoutTitle').textContent = w.id === 'CARDIO' ? 'Cardio + Abs' : `Treino ${w.id}`;
    $('todayWorkoutSubtitle').textContent = w.title;
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
    ? 'A/B na semana, quarta mais leve e superiores no sábado.'
    : 'Divisão A/B/C da sua ficha, com abdômen na quarta.';
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
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active-screen', s.id===id));
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active', b.dataset.target===id));
  if (id==='historyScreen') renderHistory();
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
  $('sessionLabel').textContent = w.id === 'CARDIO' ? 'DIA LEVE' : `TREINO ${w.id}`;
  $('sessionTitle').textContent = w.title;
  $('warmupTitle').textContent = w.id === 'CARDIO' || w.id === 'ABS' ? 'Prepare o core' : 'Aquecimento primeiro';
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
        <div><div class="set-label">Marcar séries</div><div class="set-buttons">${Array.from({length:e.sets},(_,s)=>`<button class="set-button ${done.includes(s)?'done':''}" onclick="toggleSet(${i},${s})">${done.includes(s)?'✓':s+1}</button>`).join('')}</div></div>
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
  history.unshift({ id:Date.now(), workout:state.activeWorkout, title:w.title, date:new Date().toISOString(), duration, done, total });
  localStorage.setItem(storageKey('history'),JSON.stringify(history.slice(0,80)));
  toast(`Treino salvo, ${profile().name}! 💪`);
  endSession(true, true);
});

function getHistory(){ return JSON.parse(localStorage.getItem(storageKey('history')) || '[]'); }
function renderHistory(){
  const history=getHistory();
  if(!history.length){ $('historyList').innerHTML=`<div class="history-empty">Ainda não há treinos concluídos para ${escapeHtml(profile().name)}. Quando terminar o primeiro, ele aparece aqui. 💪</div>`; return; }
  $('historyList').innerHTML=history.map(h=>{
    const d=new Date(h.date); const pct=Math.round((h.done/h.total)*100);
    const label = h.title || `Treino ${h.workout}`;
    return `<article class="history-item"><div><h4>${escapeHtml(label)}</h4><p>${d.toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'})} • ${Math.max(1,Math.round(h.duration/60))} min • ${h.done}/${h.total} séries</p></div><div class="history-score">${pct}%</div></article>`;
  }).join('');
}

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

document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='visible' && state.timer.running) requestWakeLock(); });
['soundToggle','vibrationToggle','wakeToggle'].forEach(id=>$(id).addEventListener('change',saveSettings));

if ('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js').catch(()=>{}));
const loggedId = getLoggedProfileId();
if (loggedId) { state.profileId = loggedId; showApp(); } else showLogin();
