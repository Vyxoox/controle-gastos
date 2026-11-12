const SPREADSHEET_ID = '1JtMlngFxJIRslebjO0zr092jfVN_EfkMttq5U4eKOH0';
const SPREADSHEET_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`;

const BASE_MONTHS = [
  { key: '2026-11', label: 'Nov/2026', phase: 'Fase 0 — Fechamento 2026', salary: 2288.89, fixed: 228.79, mom: 0.00, moto: 450.00, unip: 376.63, cards: 1013.98, marginBudget: 219.49 },
  { key: '2026-12', label: 'Dez/2026', phase: 'Fase 0 — Fechamento 2026 (Fim Empréstimo)', salary: 2288.89, fixed: 228.79, mom: 0.00, moto: 450.00, unip: 0.00, cards: 1390.61, marginBudget: 219.49 },
  { key: '2027-01', label: 'Jan/2027', phase: 'Fase 1 — Saída dos Cartões (+Ajuda Mãe)', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 252.41, marginBudget: 281.06 },
  { key: '2027-02', label: 'Fev/2027', phase: 'Fase 1 — Saída dos Cartões', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 198.79, marginBudget: 284.68 },
  { key: '2027-03', label: 'Mar/2027', phase: 'Fase 1 — Fim Cartão 2', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 198.79, marginBudget: 284.68 },
  { key: '2027-04', label: 'Abr/2027', phase: 'Fase 1 — Última Kabum (Cartão 1)', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 81.19, marginBudget: 282.28 },
  { key: '2027-05', label: 'Mai/2027', phase: 'Fase 2 — Cartões Zerados!', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2027-06', label: 'Jun/2027', phase: 'Fase 2 — Cartões Zerados', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2027-07', label: 'Jul/2027', phase: 'Fase 2 — Cartões Zerados', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2027-08', label: 'Ago/2027', phase: 'Fase 2 — Cartões Zerados', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2027-09', label: 'Set/2027', phase: 'Fase 2 — Cartões Zerados', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2027-10', label: 'Out/2027', phase: 'Fase 2 — Cartões Zerados', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2027-11', label: 'Nov/2027', phase: 'Fase 2 — Cartões Zerados (ENEM 27)', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2027-12', label: 'Dez/2027', phase: 'Fase 2 — Cartões Zerados', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2028-01', label: 'Jan/2028', phase: 'Fase 2 — Reta Final Moto & ADS', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2028-02', label: 'Fev/2028', phase: 'Fase 2 — Reta Final Moto & ADS', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2028-03', label: 'Mar/2028', phase: 'Fase 2 — Parcela 24/24 da Moto!', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 450.00, unip: 376.63, cards: 0.00, marginBudget: 283.47 },
  { key: '2028-04', label: 'Abr/2028', phase: 'Fase 3 — Moto Quitada (+R$ 450 livres)', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 0.00, unip: 376.63, cards: 0.00, marginBudget: 333.47 },
  { key: '2028-05', label: 'Mai/2028', phase: 'Fase 3 — Moto Quitada', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 0.00, unip: 376.63, cards: 0.00, marginBudget: 333.47 },
  { key: '2028-06', label: 'Jun/2028', phase: 'Fase 3 — Formatura ADS UNIP!', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 0.00, unip: 376.63, cards: 0.00, marginBudget: 333.47 },
  { key: '2028-07', label: 'Jul/2028', phase: 'Fase 4 — UNIP Concluída (Sprint FUVEST)', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 0.00, unip: 0.00, cards: 0.00, marginBudget: 360.10 },
  { key: '2028-08', label: 'Ago/2028', phase: 'Fase 4 — Sprint Intensivo Vestibular', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 0.00, unip: 0.00, cards: 0.00, marginBudget: 360.10 },
  { key: '2028-09', label: 'Set/2028', phase: 'Fase 4 — Sprint Intensivo Vestibular', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 0.00, unip: 0.00, cards: 0.00, marginBudget: 360.10 },
  { key: '2028-10', label: 'Out/2028', phase: 'Fase 4 — Sprint Intensivo Vestibular', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 0.00, unip: 0.00, cards: 0.00, marginBudget: 360.10 },
  { key: '2028-11', label: 'Nov/2028', phase: 'Fase 4 — Provas ENEM & FUVEST 1ª Fase', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 0.00, unip: 0.00, cards: 0.00, marginBudget: 360.10 },
  { key: '2028-12', label: 'Dez/2028', phase: 'Fase 4 — FUVEST 2ª Fase & Mudança!', salary: 2288.89, fixed: 228.79, mom: 200.00, moto: 0.00, unip: 0.00, cards: 0.00, marginBudget: 360.10 }
];

const DEFAULT_EXTRAS = [
  { id: 'clt-1', monthKey: '2027-07', date: '2027-07-15', category: 'Extra CLT (Férias)', desc: '1/3 de Férias CLT 2027 (70% Reserva)', amount: 530.00 },
  { id: 'clt-2', monthKey: '2027-11', date: '2027-11-30', category: 'Extra CLT (13º)', desc: '13º Salário CLT 2027 (70% Reserva)', amount: 1600.00 },
  { id: 'clt-3', monthKey: '2028-07', date: '2028-07-15', category: 'Extra CLT (Férias)', desc: '1/3 de Férias CLT 2028 (70% Reserva)', amount: 530.00 },
  { id: 'clt-4', monthKey: '2028-11', date: '2028-11-30', category: 'Extra CLT (13º)', desc: '13º Salário CLT 2028 (70% Reserva)', amount: 1840.00 }
];

const SERVICE_MENU = [
  {
    title: 'Pacote "PC Novo de Novo"',
    area: 'Hardware & Suporte',
    time: '2h–3h (1 sábado)',
    price: 'R$ 150 – R$ 220',
    defaultVal: 180,
    desc: 'Diagnóstico, upgrade SSD/RAM, limpeza térmica, backup e instalação limpa do SO/drivers.',
    pitch: 'Olá! Tudo bem? Trabalho com manutenção e otimização de computadores aos sábados aqui em Rio Preto. Tenho o pacote "PC Novo de Novo" (limpeza térmica, upgrade de SSD/RAM, backup e formatação limpa) com entrega no mesmo sábado por valor fechado. Quer dar uma olhada sem compromisso?'
  },
  {
    title: 'Montagem de PC Custom',
    area: 'Hardware & Suporte',
    time: '3h–4h (1 sábado)',
    price: 'R$ 250 – R$ 350',
    defaultVal: 300,
    desc: 'Montagem completa, organização de cabos, atualização de BIOS, SO e testes de estresse.',
    pitch: 'Olá! Faço montagem profissional de PCs gamers e workstations aos sábados (cable management, atualização de BIOS, Windows e testes de estresse). Posso te ajudar na escolha das peças e deixar a máquina pronta no sábado!'
  },
  {
    title: 'Ajuste de Rede & Escritório',
    area: 'Hardware & Redes',
    time: '2h–3h (1 sábado)',
    price: 'R$ 180 – R$ 300',
    defaultVal: 240,
    desc: 'Configuração de roteador/mesh, impressora em rede, pasta compartilhada e backup.',
    pitch: 'Olá! Sou analista de TI aqui em Rio Preto e atendo escritórios aos sábados (sem parar sua operação na semana) para organizar rede Wi-Fi/Mesh, impressoras em rede e rotina de backup automático.'
  },
  {
    title: 'Automação de Planilhas em Python',
    area: 'Python & Dados',
    time: '4h–6h (1 sábado)',
    price: 'R$ 400 – R$ 700',
    defaultVal: 500,
    desc: 'Script Python que lê CSV/Excel bagunçados e gera relatórios prontos ou concilia dados em 1 clique.',
    pitch: 'Olá! Sou desenvolvedor Python aqui em Rio Preto. Vi que vocês lidam com bastante volume de atendimento/planilhas. Eu crio automações enxutas que cruzam planilhas e geram relatórios em 1 clique, entregues em 1 fim de semana com preço fechado. Posso te mostrar um exemplo?'
  },
  {
    title: 'Landing Page Rápida (WhatsApp)',
    area: 'Web Front-end',
    time: '6h–10h (2 sábados)',
    price: 'R$ 600 – R$ 1.000',
    defaultVal: 750,
    desc: 'Página rápida, responsiva, botão direto para WhatsApp e formulário para negócios locais.',
    pitch: 'Olá! Sou desenvolvedor web aqui em Rio Preto. Vi o perfil de vocês e notei que uma página rápida direcionando clientes direto para o orçamento no WhatsApp aumentaria bastante a conversão. Trabalho com pacotes enxutos de entrega rápida. Posso te mandar uma prévia?'
  },
  {
    title: 'Micro-sistema Interno (CRUD)',
    area: 'Python/Flask + MySQL',
    time: '10h–16h (2–3 sábados)',
    price: 'R$ 900 – R$ 1.500',
    defaultVal: 1200,
    desc: 'Cadastro de clientes, controle de estoque simples ou ordens de serviço sob medida.',
    pitch: 'Olá! Desenvolvo micro-sistemas sob medida (cadastro de clientes, ordens de serviço e estoque em Python/Web) para substituir planilhas manuais, com escopo e valor fechado.'
  }
];

const STORAGE_KEY = 'meta2029_state_v1';

let state = loadState();
let deferredInstallPrompt = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        selectedMonth: parsed.selectedMonth || '2026-11',
        expenses: Array.isArray(parsed.expenses) ? parsed.expenses : [],
        extras: Array.isArray(parsed.extras) ? parsed.extras : [...DEFAULT_EXTRAS]
      };
    }
  } catch (e) {
    console.error(e);
  }
  return {
    selectedMonth: '2026-11',
    expenses: [],
    extras: [...DEFAULT_EXTRAS]
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatBRL(val) {
  return Number(val || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function computeProjection() {
  let balance = 0;
  let totalSalarySaved = 0;
  let totalExtrasSaved = 0;
  let totalInterest = 0;

  const rows = BASE_MONTHS.map((m, idx) => {
    const monthVarExpenses = state.expenses
      .filter((e) => e.monthKey === m.key)
      .reduce((acc, item) => acc + Number(item.amount || 0), 0);

    // Se o usuário gastou além do orçamento de gasolina/lazer, o excesso reduz o aporte;
    // se gastou dentro do teto, considera o orçamento planejado (ou permite ver a folga no painel).
    const effectiveMarginUsed = Math.max(m.marginBudget, monthVarExpenses);
    const totalExpenses = m.fixed + m.mom + m.moto + m.unip + m.cards + effectiveMarginUsed;
    const baseAporte = Math.max(0, m.salary - totalExpenses);

    const monthExtras = state.extras
      .filter((x) => x.monthKey === m.key)
      .reduce((acc, item) => acc + Number(item.amount || 0), 0);

    const totalAporte = baseAporte + monthExtras;
    const interest = idx === 0 ? 0 : balance * 0.0085;
    balance = balance + totalAporte + interest;

    totalSalarySaved += baseAporte;
    totalExtrasSaved += monthExtras;
    totalInterest += interest;

    return {
      ...m,
      monthVarExpenses,
      marginRemaining: m.marginBudget - monthVarExpenses,
      totalExpenses,
      baseAporte,
      monthExtras,
      totalAporte,
      interest,
      balance
    };
  });

  return {
    rows,
    finalBalance: balance,
    totalSalarySaved,
    totalExtrasSaved,
    totalInterest
  };
}

function renderAll() {
  const proj = computeProjection();
  const current = proj.rows.find((r) => r.key === state.selectedMonth) || proj.rows[0];

  // Populate Month Select
  const select = document.getElementById('monthSelect');
  if (select.options.length === 0) {
    BASE_MONTHS.forEach((m) => {
      const opt = document.createElement('option');
      opt.value = m.key;
      opt.textContent = m.label;
      select.appendChild(opt);
    });
  }
  select.value = state.selectedMonth;

  // Phase Banner
  document.getElementById('currentPhaseName').textContent = current.phase;
  document.getElementById('currentMonthTitle').textContent = `Resumo de ${current.label}`;

  // Gasolina/Lazer Thermometer
  const spent = current.monthVarExpenses;
  const budget = current.marginBudget;
  const remaining = budget - spent;
  const pctUsed = budget > 0 ? Math.min(100, Math.round((spent / budget) * 100)) : 0;

  const remEl = document.getElementById('marginRemainingValue');
  remEl.textContent = formatBRL(remaining);
  remEl.className = 'metric-value ' + (remaining >= 0 ? 'emerald' : 'danger');

  document.getElementById('marginSubtext').textContent =
    `Gasto registrado: ${formatBRL(spent)} de ${formatBRL(budget)} previstos p/ gasolina e lazer`;
  document.getElementById('marginPctLabel').textContent = `${pctUsed}% usado`;

  const marginBar = document.getElementById('marginProgressFill');
  marginBar.style.width = `${pctUsed}%`;
  marginBar.className = 'progress-fill ' + (pctUsed < 75 ? '' : pctUsed < 100 ? 'amber' : 'danger');

  // Monthly Aporte Card
  document.getElementById('monthTotalAporte').textContent = formatBRL(current.totalAporte);
  document.getElementById('monthAporteSub').textContent =
    `Salário: ${formatBRL(current.baseAporte)} + Extras/Freelas: ${formatBRL(current.monthExtras)}`;

  // Breakdown of Current Month
  const breakdownContainer = document.getElementById('monthBreakdown');
  breakdownContainer.innerHTML = `
    <div class="breakdown-item">
      <span>💼 Salário Líquido (+ R$ 660 VA por fora)</span>
      <strong>${formatBRL(current.salary)}</strong>
    </div>
    <div class="breakdown-item">
      <span>🏠 Internet (R$ 130) + Dados (R$ 30) + Assinaturas</span>
      <span>${formatBRL(current.fixed)}</span>
    </div>
    <div class="breakdown-item">
      <span>❤️ Ajuda em Casa (Mãe)</span>
      <span class="badge ${current.mom > 0 ? 'badge-emerald' : 'badge-amber'}">${formatBRL(current.mom)}</span>
    </div>
    <div class="breakdown-item">
      <span>🏍️ Financiamento Moto (até Mar/28)</span>
      <span>${formatBRL(current.moto)}</span>
    </div>
    <div class="breakdown-item">
      <span>🎓 Mensalidade UNIP ADS (até Jun/28)</span>
      <span>${formatBRL(current.unip)}</span>
    </div>
    <div class="breakdown-item">
      <span>💳 Cartões 1 & 2 + Empréstimo</span>
      <span>${formatBRL(current.cards)}</span>
    </div>
    <div class="breakdown-item">
      <span>⛽ Margem Gasolina / Manutenção / Lazer</span>
      <span>${formatBRL(current.marginBudget)}</span>
    </div>
  `;

  // Goals Progress (Jan/2029)
  const finalBal = proj.finalBalance;
  const pctRep = Math.min(100, Math.round((finalBal / 25000) * 100));
  const pctKit = Math.min(100, Math.round((finalBal / 35000) * 100));
  const monthsGuaranteed = (finalBal / 1500).toFixed(1);

  document.getElementById('finalProjectedBalance').textContent = formatBRL(finalBal);
  document.getElementById('monthsGuaranteedBadge').textContent = `${monthsGuaranteed} meses de República garantidos`;
  document.getElementById('goal1Pct').textContent = `${ ((finalBal / 25000) * 100).toFixed(1) }% (${formatBRL(finalBal)} / R$ 25.000)`;
  document.getElementById('goal1Fill').style.width = `${pctRep}%`;

  const missingKit = Math.max(0, 35000 - finalBal);
  document.getElementById('goal2Pct').textContent =
    missingKit === 0
      ? `Meta Batida! (${formatBRL(finalBal)})`
      : `Faltam ${formatBRL(missingKit)} em freelas (~${formatBRL(missingKit / 24)}/mês)`;
  document.getElementById('goal2Fill').style.width = `${pctKit}%`;

  // Expenses List in Tab 2
  renderExpensesList();

  // Extras & Freelas List in Tab 3
  renderExtrasList();

  // Projection Table in Tab 4
  renderProjectionTable(proj);
}

function renderExpensesList() {
  const listEl = document.getElementById('expensesList');
  const items = state.expenses.filter((e) => e.monthKey === state.selectedMonth);
  if (items.length === 0) {
    listEl.innerHTML = `<p class="metric-sub">Nenhum gasto avulso registrado em ${state.selectedMonth}. Use o formulário acima para abater da sua margem de gasolina/lazer.</p>`;
    return;
  }
  listEl.innerHTML = items
    .map(
      (item) => `
      <div class="breakdown-item">
        <div>
          <strong>${item.desc}</strong>
          <div class="metric-sub">${item.category} • ${item.date || item.monthKey}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <strong style="color:#f87171;">- ${formatBRL(item.amount)}</strong>
          <button class="btn btn-outline btn-sm" onclick="removeExpense('${item.id}')">✕</button>
        </div>
      </div>
    `
    )
    .join('');
}

function renderExtrasList() {
  const listEl = document.getElementById('extrasList');
  const sorted = [...state.extras].sort((a, b) => a.monthKey.localeCompare(b.monthKey));
  listEl.innerHTML = sorted
    .map(
      (item) => `
      <div class="breakdown-item">
        <div>
          <strong>${item.desc}</strong>
          <div class="metric-sub"><span class="badge badge-emerald">${item.monthKey}</span> ${item.category}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <strong style="color:#34d399;">+ ${formatBRL(item.amount)}</strong>
          <button class="btn btn-outline btn-sm" onclick="removeExtra('${item.id}')">✕</button>
        </div>
      </div>
    `
    )
    .join('');
}

function renderProjectionTable(proj) {
  const tbody = document.getElementById('projectionTableBody');
  tbody.innerHTML = proj.rows
    .map(
      (r) => `
      <tr class="${r.key === state.selectedMonth ? 'current-row' : ''}">
        <td><strong>${r.label}</strong></td>
        <td>${formatBRL(r.totalExpenses)}</td>
        <td>${formatBRL(r.baseAporte)}</td>
        <td style="color:#34d399;">${formatBRL(r.monthExtras)}</td>
        <td><strong>${formatBRL(r.totalAporte)}</strong></td>
        <td style="color:#60a5fa;">${formatBRL(r.interest)}</td>
        <td><strong>${formatBRL(r.balance)}</strong></td>
      </tr>
    `
    )
    .join('');
}

function renderServiceMenu() {
  const container = document.getElementById('serviceMenuContainer');
  container.innerHTML = SERVICE_MENU.map(
    (s, idx) => `
    <div class="service-card">
      <div class="service-header">
        <div>
          <span class="badge badge-blue">${s.area} • ${s.time}</span>
          <div class="service-title" style="margin-top:4px;">${s.title}</div>
        </div>
        <div class="service-price">${s.price}</div>
      </div>
      <div class="service-desc">${s.desc}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-secondary btn-sm" onclick="copyPitch(${idx})">📋 Copiar Abordagem WhatsApp</button>
        <button class="btn btn-primary btn-sm" onclick="prefillFreela(${idx})">⚡ Registrar Pix Recebido</button>
      </div>
    </div>
  `
  ).join('');
}

window.copyPitch = function (idx) {
  const s = SERVICE_MENU[idx];
  navigator.clipboard.writeText(s.pitch).then(() => {
    showToast('Mensagem copiada! Cole no WhatsApp do cliente.');
  });
};

window.prefillFreela = function (idx) {
  const s = SERVICE_MENU[idx];
  document.getElementById('extraCategory').value = `Freelance (${s.area})`;
  document.getElementById('extraDesc').value = s.title;
  document.getElementById('extraAmount').value = s.defaultVal;
  document.getElementById('extraDesc').focus();
  showToast('Preenchido no formulário acima! Confirme o valor e salve.');
};

window.removeExpense = function (id) {
  state.expenses = state.expenses.filter((e) => e.id !== id);
  saveState();
  renderAll();
  showToast('Gasto removido.');
};

window.removeExtra = function (id) {
  state.extras = state.extras.filter((x) => x.id !== id);
  saveState();
  renderAll();
  showToast('Lançamento removido.');
};

async function syncToGoogleSheets(entry) {
  try {
    const res = await fetch('/api/sync-freela', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    });
    if (res.ok) {
      const data = await res.json();
      if (data.ok) {
        showToast('⚡ Salvo no App e sincronizado na Planilha Google Sheets!');
        return;
      }
    }
  } catch (_) {
    // Modo estático/offline
  }
  showToast(`💰 Pix de ${formatBRL(entry.amount)} salvo! Transfira agora p/ a Conta Invisível (Selic).`);
}

document.addEventListener('DOMContentLoaded', () => {
  // Links to Google Sheets
  document.querySelectorAll('.sheets-link').forEach((el) => {
    el.href = SPREADSHEET_URL;
  });

  // Month Selector
  document.getElementById('monthSelect').addEventListener('change', (e) => {
    state.selectedMonth = e.target.value;
    saveState();
    renderAll();
  });

  // Bottom Navigation
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Add Variable Expense Form
  document.getElementById('expenseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const category = document.getElementById('expenseCategory').value;
    const desc = document.getElementById('expenseDesc').value.trim();
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    if (!desc || isNaN(amount) || amount <= 0) return;

    state.expenses.push({
      id: 'exp-' + Date.now(),
      monthKey: state.selectedMonth,
      date: new Date().toLocaleDateString('pt-BR'),
      category,
      desc,
      amount
    });
    saveState();
    e.target.reset();
    renderAll();
    showToast(`Gasto de ${formatBRL(amount)} registrado em ${state.selectedMonth}.`);
  });

  // Card Installment Anti-Bottleneck Simulator
  document.getElementById('simForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const total = parseFloat(document.getElementById('simTotal').value);
    const parcels = parseInt(document.getElementById('simParcels').value, 10);
    if (isNaN(total) || total <= 0 || isNaN(parcels) || parcels < 1) return;

    const monthlyParcel = total / parcels;
    const currentObj = BASE_MONTHS.find((m) => m.key === state.selectedMonth) || BASE_MONTHS[0];
    const safeLimit = currentObj.marginBudget * 0.35;
    const resultEl = document.getElementById('simResult');

    if (monthlyParcel > safeLimit) {
      resultEl.innerHTML = `
        <div class="service-card" style="border-color:#ef4444;background:rgba(239,68,68,0.12);margin-top:10px;">
          <strong style="color:#f87171;">⚠️ Alerta de Gargalo: ${parcels}x de ${formatBRL(monthlyParcel)}/mês</strong>
          <p class="metric-sub" style="color:#f8fafc;margin-top:4px;">
            Essa parcela consome <strong>${Math.round((monthlyParcel / currentObj.marginBudget) * 100)}%</strong> da sua margem mensal de gasolina/lazer (${formatBRL(currentObj.marginBudget)}) e pode reduzir seu aporte rumo a São Carlos. Recomendado aguardar ou pagar à vista com 1 freela de sábado!
          </p>
        </div>
      `;
    } else {
      resultEl.innerHTML = `
        <div class="service-card" style="border-color:#10b981;background:rgba(16,185,129,0.12);margin-top:10px;">
          <strong style="color:#34d399;">✅ Cabe no Orçamento: ${parcels}x de ${formatBRL(monthlyParcel)}/mês</strong>
          <p class="metric-sub" style="color:#f8fafc;margin-top:4px;">
            Compromete apenas ${Math.round((monthlyParcel / currentObj.marginBudget) * 100)}% da sua margem livre de ${currentObj.label} sem afetar seu aporte da mudança.
          </p>
        </div>
      `;
    }
  });

  // Add Extra / Freelance Form
  document.getElementById('extraForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const monthKey = document.getElementById('extraMonthKey').value || state.selectedMonth;
    const category = document.getElementById('extraCategory').value;
    const desc = document.getElementById('extraDesc').value.trim();
    const amount = parseFloat(document.getElementById('extraAmount').value);
    if (!desc || isNaN(amount) || amount <= 0) return;

    const entry = {
      id: 'ext-' + Date.now(),
      monthKey,
      date: new Date().toLocaleDateString('pt-BR'),
      category,
      desc,
      amount
    };

    state.extras.push(entry);
    saveState();
    e.target.reset();
    document.getElementById('extraMonthKey').value = state.selectedMonth;
    renderAll();
    syncToGoogleSheets(entry);
  });

  // Populate extraMonthKey select
  const extraMonthSelect = document.getElementById('extraMonthKey');
  BASE_MONTHS.forEach((m) => {
    const opt = document.createElement('option');
    opt.value = m.key;
    opt.textContent = m.label;
    extraMonthSelect.appendChild(opt);
  });
  extraMonthSelect.value = state.selectedMonth;

  renderServiceMenu();
  renderAll();

  // Register Service Worker for Android PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  // Android Install Banner
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const btn = document.getElementById('installPwaBtn');
    if (btn) btn.style.display = 'inline-flex';
  });

  const installBtn = document.getElementById('installPwaBtn');
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      installBtn.style.display = 'none';
    });
  }
});
