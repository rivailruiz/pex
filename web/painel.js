const STORAGE_KEY = "pex_donations_panel_v1";

const ODS_OPTIONS = [
  "Ação contra a mudança global do clima",
  "Água potável e saneamento",
  "Cidades e comunidades sustentáveis",
  "Consumo e produção responsáveis",
  "Educação de qualidade",
  "Energia limpa e acessível",
  "Erradicação da pobreza",
  "Fome zero e agricultura sustentável",
  "Igualdade de gênero",
  "Indústria, inovação e infraestrutura",
  "Parcerias e meios de implementação",
  "Paz, justiça e instituições eficazes",
  "Redução das desigualdades",
  "Saúde e bem-estar",
  "Trabalho decente e crescimento econômico",
  "Vida na água",
  "Vida terrestre"
];

function defaultProjectConfig() {
  return {
    name: "Painel de Doacoes para ONG",
    partner: "",
    objective: "Fome zero e agricultura sustentável"
  };
}

function defaultPlanningData() {
  return {
    introContext: "",
    introGaps: "",
    introRelevance: "",
    objectiveGeneral: "",
    objectiveSpecific: "",
    targetAudience: "",
    requirementsCollection: "",
    modelingDevelopment: "",
    testsValidation: "",
    trainingPlan: "",
    documentationPlan: "",
    resourcesMaterials: "",
    resourcesHuman: "",
    resourcesBudget: "",
    schedule: "",
    milestonesResponsibles: "",
    indicatorsQuant: "",
    indicatorsQual: "",
    indicatorsPeriodicity: ""
  };
}

function defaultPilotData() {
  return {
    pilotSelectionPlanning: "",
    pilotImplementation: "",
    pilotEvidence: "",
    pilotErrorsAdjustments: "",
    pilotExecutionReport: "",
    projectReview: "",
    optionalTraining: "",
    optionalTrainingEvidence: "",
    finalRefinement: ""
  };
}

const state = {
  lowStockThreshold: 10,
  project: defaultProjectConfig(),
  planning: defaultPlanningData(),
  pilot: defaultPilotData(),
  items: [],
  movements: []
};

const els = {
  kpis: document.querySelector("#kpis"),
  kpiTemplate: document.querySelector("#kpi-template"),
  projectForm: document.querySelector("#project-form"),
  projectName: document.querySelector("#project-name"),
  projectPartner: document.querySelector("#project-partner"),
  projectObjective: document.querySelector("#project-objective"),
  projectSummary: document.querySelector("#project-summary"),
  planningForm: document.querySelector("#planning-form"),
  planningSummary: document.querySelector("#planning-summary"),
  pilotForm: document.querySelector("#pilot-form"),
  pilotSummary: document.querySelector("#pilot-summary"),
  entryForm: document.querySelector("#entry-form"),
  outForm: document.querySelector("#out-form"),
  outItemId: document.querySelector("#out-item-id"),
  stockTableBody: document.querySelector("#stock-table-body"),
  movementTableBody: document.querySelector("#movement-table-body"),
  lowStockAlert: document.querySelector("#low-stock-alert"),
  lowStockThreshold: document.querySelector("#low-stock-threshold"),
  search: document.querySelector("#search"),
  movementTypeFilter: document.querySelector("#movement-type-filter"),
  seedData: document.querySelector("#seed-data"),
  exportJson: document.querySelector("#export-json"),
  importJson: document.querySelector("#import-json"),
  clearData: document.querySelector("#clear-data")
};

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function uid() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function toNumber(value) {
  return Number.parseFloat(value);
}

function safeText(value) {
  return String(value ?? "").trim();
}

function normalizeKey(itemName, unit) {
  return `${itemName.toLowerCase()}::${unit.toLowerCase()}`;
}

function formatQty(value) {
  return Number(value).toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
}

function formatDate(isoDate) {
  if (!isoDate) return "-";
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}

function setInitialDates() {
  const today = todayISO();
  document.querySelector("#entry-date").value = today;
  document.querySelector("#out-date").value = today;
}

function mergeWithDefaults(defaultFactory, value) {
  return {
    ...defaultFactory(),
    ...(value && typeof value === "object" ? value : {})
  };
}

function setFormValues(form, values) {
  for (const [name, value] of Object.entries(values)) {
    const field = form.elements.namedItem(name);
    if (!field) continue;
    field.value = value;
  }
}

function extractFormValues(form) {
  const data = {};
  const fd = new FormData(form);
  for (const [key, value] of fd.entries()) {
    data[key] = safeText(value);
  }
  return data;
}

function filledCount(obj) {
  return Object.values(obj).filter((value) => safeText(value).length > 0).length;
}

function populateObjectiveOptions() {
  els.projectObjective.innerHTML = "";

  for (const objective of ODS_OPTIONS) {
    const option = document.createElement("option");
    option.value = objective;
    option.textContent = objective;
    els.projectObjective.appendChild(option);
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") return;

    state.lowStockThreshold = Number.isFinite(data.lowStockThreshold)
      ? Number(data.lowStockThreshold)
      : 10;

    state.project = mergeWithDefaults(defaultProjectConfig, data.project);
    state.planning = mergeWithDefaults(defaultPlanningData, data.planning);
    state.pilot = mergeWithDefaults(defaultPilotData, data.pilot);

    state.items = Array.isArray(data.items) ? data.items : [];
    state.movements = Array.isArray(data.movements) ? data.movements : [];
  } catch {
    // Ignore parse error and keep defaults.
  }
}

function renderProjectSummary() {
  const projectName = safeText(state.project.name) || "Projeto sem nome";
  const partner = safeText(state.project.partner) || "Instituicao nao informada";
  const objective = safeText(state.project.objective) || "Objetivo nao selecionado";
  els.projectSummary.textContent = `Projeto: ${projectName} | Parceiro: ${partner} | Objetivo: ${objective}`;
}

function renderPlanningSummary() {
  const count = filledCount(state.planning);
  const total = Object.keys(defaultPlanningData()).length;
  const goal = safeText(state.planning.objectiveGeneral) || "Objetivo geral ainda nao informado.";
  els.planningSummary.textContent = `Estruturacao ADS V preenchida: ${count}/${total} campos. Objetivo geral: ${goal}`;
}

function renderPilotSummary() {
  const count = filledCount(state.pilot);
  const total = Object.keys(defaultPilotData()).length;
  const moduleInfo =
    safeText(state.pilot.pilotSelectionPlanning) || "Piloto ainda nao detalhado.";
  els.pilotSummary.textContent = `Piloto ADS V preenchido: ${count}/${total} campos. Selecao do piloto: ${moduleInfo}`;
}

function ensureItem({ name, category, unit }) {
  const key = normalizeKey(name, unit);
  const existing = state.items.find((item) => item.key === key);
  if (existing) {
    if (category && !existing.category) {
      existing.category = category;
    }
    return existing;
  }

  const item = {
    id: uid(),
    key,
    name,
    category,
    unit,
    createdAt: todayISO()
  };

  state.items.push(item);
  return item;
}

function totalForItem(itemId, type) {
  return state.movements
    .filter((movement) => movement.itemId === itemId && movement.type === type)
    .reduce((sum, movement) => sum + movement.quantity, 0);
}

function currentStock(itemId) {
  return totalForItem(itemId, "entrada") - totalForItem(itemId, "saida");
}

function lastMovementDate(itemId) {
  const dates = state.movements
    .filter((movement) => movement.itemId === itemId)
    .map((movement) => movement.date)
    .sort();

  return dates.length ? dates[dates.length - 1] : "";
}

function currentStockRows() {
  return state.items
    .map((item) => ({
      ...item,
      stock: currentStock(item.id),
      lastDate: lastMovementDate(item.id)
    }))
    .filter((item) => item.stock > 0)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function movementMatchesFilter(movement, search, typeFilter) {
  if (typeFilter !== "all" && movement.type !== typeFilter) return false;

  if (!search) return true;

  const item = state.items.find((candidate) => candidate.id === movement.itemId);
  const haystack = [
    movement.type,
    movement.originOrTarget,
    movement.responsible,
    movement.notes,
    movement.date,
    item?.name,
    item?.category
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(search);
}

function renderKpis() {
  const totalEntradas = state.movements
    .filter((movement) => movement.type === "entrada")
    .reduce((sum, movement) => sum + movement.quantity, 0);

  const totalSaidas = state.movements
    .filter((movement) => movement.type === "saida")
    .reduce((sum, movement) => sum + movement.quantity, 0);

  const saldoAtual = currentStockRows().reduce((sum, row) => sum + row.stock, 0);
  const itensAtivos = currentStockRows().length;
  const estoqueBaixo = currentStockRows().filter(
    (row) => row.stock <= state.lowStockThreshold
  ).length;

  const cards = [
    { label: "Entradas acumuladas", value: formatQty(totalEntradas) },
    { label: "Saidas acumuladas", value: formatQty(totalSaidas) },
    { label: "Saldo atual", value: formatQty(saldoAtual) },
    { label: "Itens em estoque", value: String(itensAtivos) },
    { label: "Itens com estoque baixo", value: String(estoqueBaixo) }
  ];

  els.kpis.innerHTML = "";
  for (const card of cards) {
    const fragment = els.kpiTemplate.content.cloneNode(true);
    fragment.querySelector(".kpi-label").textContent = card.label;
    fragment.querySelector(".kpi-value").textContent = card.value;
    els.kpis.appendChild(fragment);
  }
}

function renderOutItemsSelect() {
  const rows = currentStockRows();
  els.outItemId.innerHTML = "";

  if (!rows.length) {
    const option = document.createElement("option");
    option.textContent = "Sem itens em estoque";
    option.value = "";
    els.outItemId.appendChild(option);
    els.outItemId.disabled = true;
    return;
  }

  els.outItemId.disabled = false;

  for (const row of rows) {
    const option = document.createElement("option");
    option.value = row.id;
    option.textContent = `${row.name} (${formatQty(row.stock)} ${row.unit})`;
    els.outItemId.appendChild(option);
  }
}

function renderStockTable() {
  const rows = currentStockRows();
  els.stockTableBody.innerHTML = "";

  if (!rows.length) {
    els.stockTableBody.innerHTML = '<tr><td colspan="5">Nenhum item em estoque.</td></tr>';
    return;
  }

  for (const row of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.category}</td>
      <td>${formatQty(row.stock)}</td>
      <td>${row.unit}</td>
      <td>${formatDate(row.lastDate)}</td>
    `;
    els.stockTableBody.appendChild(tr);
  }
}

function renderLowStockAlert() {
  const rows = currentStockRows().filter((row) => row.stock <= state.lowStockThreshold);

  if (!rows.length) {
    els.lowStockAlert.classList.add("hidden");
    els.lowStockAlert.textContent = "";
    return;
  }

  const detail = rows
    .map((row) => `${row.name}: ${formatQty(row.stock)} ${row.unit}`)
    .join(" | ");

  els.lowStockAlert.textContent = `Alerta: estoque baixo para ${rows.length} item(ns). ${detail}`;
  els.lowStockAlert.classList.remove("hidden");
}

function renderMovements() {
  const search = safeText(els.search.value).toLowerCase();
  const typeFilter = els.movementTypeFilter.value;

  const rows = [...state.movements]
    .sort((a, b) => {
      if (a.date === b.date) return b.createdAt.localeCompare(a.createdAt);
      return b.date.localeCompare(a.date);
    })
    .filter((movement) => movementMatchesFilter(movement, search, typeFilter));

  els.movementTableBody.innerHTML = "";

  if (!rows.length) {
    els.movementTableBody.innerHTML =
      '<tr><td colspan="7">Nenhuma movimentacao encontrada.</td></tr>';
    return;
  }

  for (const movement of rows) {
    const item = state.items.find((candidate) => candidate.id === movement.itemId);
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${formatDate(movement.date)}</td>
      <td>${movement.type}</td>
      <td>${item ? item.name : "Item removido"}</td>
      <td>${formatQty(movement.quantity)} ${movement.unit}</td>
      <td>${movement.originOrTarget}</td>
      <td>${movement.responsible}</td>
      <td>${movement.notes || "-"}</td>
    `;

    els.movementTableBody.appendChild(tr);
  }
}

function renderAll() {
  renderProjectSummary();
  renderPlanningSummary();
  renderPilotSummary();
  renderKpis();
  renderOutItemsSelect();
  renderStockTable();
  renderLowStockAlert();
  renderMovements();
}

function addEntry(formData) {
  const itemName = safeText(formData.get("item"));
  const category = safeText(formData.get("category"));
  const quantity = toNumber(formData.get("quantity"));
  const unit = safeText(formData.get("unit"));
  const donor = safeText(formData.get("donor"));
  const date = safeText(formData.get("date"));
  const notes = safeText(formData.get("notes"));

  if (!itemName || !category || !unit || !donor || !date || !Number.isFinite(quantity) || quantity <= 0) {
    alert("Preencha todos os campos obrigatorios da entrada.");
    return;
  }

  const item = ensureItem({ name: itemName, category, unit });

  state.movements.push({
    id: uid(),
    type: "entrada",
    itemId: item.id,
    quantity,
    unit,
    date,
    originOrTarget: donor,
    responsible: donor,
    notes,
    createdAt: new Date().toISOString()
  });

  persistState();
  renderAll();
}

function addOut(formData) {
  const itemId = safeText(formData.get("itemId"));
  const quantity = toNumber(formData.get("quantity"));
  const target = safeText(formData.get("target"));
  const responsible = safeText(formData.get("responsible"));
  const date = safeText(formData.get("date"));
  const notes = safeText(formData.get("notes"));

  if (!itemId || !target || !responsible || !date || !Number.isFinite(quantity) || quantity <= 0) {
    alert("Preencha todos os campos obrigatorios da saida.");
    return;
  }

  const item = state.items.find((candidate) => candidate.id === itemId);
  if (!item) {
    alert("Item nao encontrado no estoque.");
    return;
  }

  const available = currentStock(itemId);
  if (quantity > available) {
    alert(`Saida invalida. Estoque disponivel: ${formatQty(available)} ${item.unit}.`);
    return;
  }

  state.movements.push({
    id: uid(),
    type: "saida",
    itemId,
    quantity,
    unit: item.unit,
    date,
    originOrTarget: target,
    responsible,
    notes,
    createdAt: new Date().toISOString()
  });

  persistState();
  renderAll();
}

function exportState() {
  const payload = {
    exportedAt: new Date().toISOString(),
    schemaVersion: 1,
    data: state
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const fileDate = todayISO();
  a.href = url;
  a.download = `painel-doacoes-${fileDate}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importState(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const imported = parsed?.data;

      if (!imported || !Array.isArray(imported.items) || !Array.isArray(imported.movements)) {
        throw new Error("Formato invalido");
      }

      state.items = imported.items;
      state.movements = imported.movements;
      state.lowStockThreshold = Number.isFinite(imported.lowStockThreshold)
        ? Number(imported.lowStockThreshold)
        : 10;
      state.project = mergeWithDefaults(defaultProjectConfig, imported.project);
      state.planning = mergeWithDefaults(defaultPlanningData, imported.planning);
      state.pilot = mergeWithDefaults(defaultPilotData, imported.pilot);

      els.lowStockThreshold.value = String(state.lowStockThreshold);
      els.projectName.value = state.project.name;
      els.projectPartner.value = state.project.partner;
      els.projectObjective.value = ODS_OPTIONS.includes(state.project.objective)
        ? state.project.objective
        : defaultProjectConfig().objective;
      state.project.objective = els.projectObjective.value;
      setFormValues(els.planningForm, state.planning);
      setFormValues(els.pilotForm, state.pilot);

      persistState();
      renderAll();
      alert("Dados importados com sucesso.");
    } catch {
      alert("Falha ao importar arquivo. Verifique o formato JSON.");
    }
  };

  reader.readAsText(file);
}

function seedData() {
  const hasData = state.items.length > 0 || state.movements.length > 0;
  if (hasData) {
    const proceed = confirm("Ja existem dados salvos. Deseja adicionar exemplos mesmo assim?");
    if (!proceed) return;
  }

  const today = todayISO();
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  const examples = [
    {
      itemName: "Cesta Basica",
      category: "Alimentos",
      unit: "un",
      donor: "Mercado Esperanca",
      quantity: 20,
      date: yesterday,
      notes: "Doacao mensal"
    },
    {
      itemName: "Sabonete",
      category: "Higiene",
      unit: "un",
      donor: "Farmacia Central",
      quantity: 60,
      date: yesterday,
      notes: "Kit higiene"
    },
    {
      itemName: "Leite",
      category: "Alimentos",
      unit: "l",
      donor: "Cooperativa Vale",
      quantity: 30,
      date: today,
      notes: "Lote semanal"
    }
  ];

  for (const entry of examples) {
    const item = ensureItem({
      name: entry.itemName,
      category: entry.category,
      unit: entry.unit
    });

    state.movements.push({
      id: uid(),
      type: "entrada",
      itemId: item.id,
      quantity: entry.quantity,
      unit: entry.unit,
      date: entry.date,
      originOrTarget: entry.donor,
      responsible: entry.donor,
      notes: entry.notes,
      createdAt: new Date().toISOString()
    });
  }

  if (!safeText(state.project.partner)) {
    state.project.partner = "ONG Esperanca";
  }

  if (!safeText(state.project.objective)) {
    state.project.objective = "Fome zero e agricultura sustentável";
  }

  const basket = state.items.find((item) => item.name.toLowerCase() === "cesta basica");
  if (basket) {
    state.movements.push({
      id: uid(),
      type: "saida",
      itemId: basket.id,
      quantity: 8,
      unit: basket.unit,
      date: today,
      originOrTarget: "Comunidade Jardim Norte",
      responsible: "Equipe social",
      notes: "Acao de distribuicao",
      createdAt: new Date().toISOString()
    });
  }

  persistState();
  renderAll();
}

function clearAllData() {
  const confirmed = confirm("Tem certeza que deseja apagar todos os dados do painel?");
  if (!confirmed) return;

  state.items = [];
  state.movements = [];
  state.lowStockThreshold = 10;
  state.project = defaultProjectConfig();
  state.planning = defaultPlanningData();
  state.pilot = defaultPilotData();
  els.lowStockThreshold.value = "10";
  els.projectName.value = state.project.name;
  els.projectPartner.value = state.project.partner;
  els.projectObjective.value = state.project.objective;
  setFormValues(els.planningForm, state.planning);
  setFormValues(els.pilotForm, state.pilot);

  persistState();
  renderAll();
}

function bindEvents() {
  els.projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = safeText(els.projectName.value);
    const partner = safeText(els.projectPartner.value);
    const objective = safeText(els.projectObjective.value);

    if (!name || !partner || !objective) {
      alert("Preencha nome do projeto, instituicao parceira e objetivo.");
      return;
    }

    state.project = { name, partner, objective };
    persistState();
    renderProjectSummary();
  });

  els.planningForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.planning = mergeWithDefaults(defaultPlanningData, extractFormValues(els.planningForm));
    persistState();
    renderPlanningSummary();
  });

  els.pilotForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.pilot = mergeWithDefaults(defaultPilotData, extractFormValues(els.pilotForm));
    persistState();
    renderPilotSummary();
  });

  els.entryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addEntry(new FormData(els.entryForm));
    els.entryForm.reset();
    document.querySelector("#entry-date").value = todayISO();
  });

  els.outForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addOut(new FormData(els.outForm));
    els.outForm.reset();
    document.querySelector("#out-date").value = todayISO();
  });

  els.search.addEventListener("input", renderMovements);
  els.movementTypeFilter.addEventListener("change", renderMovements);

  els.lowStockThreshold.addEventListener("change", () => {
    const threshold = toNumber(els.lowStockThreshold.value);
    state.lowStockThreshold = Number.isFinite(threshold) ? Math.max(threshold, 0) : 10;
    els.lowStockThreshold.value = String(state.lowStockThreshold);
    persistState();
    renderAll();
  });

  els.seedData.addEventListener("click", seedData);
  els.exportJson.addEventListener("click", exportState);

  els.importJson.addEventListener("change", (event) => {
    const [file] = event.target.files;
    importState(file);
    event.target.value = "";
  });

  els.clearData.addEventListener("click", clearAllData);
}

function hydrate() {
  loadState();
  populateObjectiveOptions();
  state.project = mergeWithDefaults(defaultProjectConfig, state.project);
  state.planning = mergeWithDefaults(defaultPlanningData, state.planning);
  state.pilot = mergeWithDefaults(defaultPilotData, state.pilot);
  els.lowStockThreshold.value = String(state.lowStockThreshold);
  els.projectName.value = state.project.name;
  els.projectPartner.value = state.project.partner;
  els.projectObjective.value = ODS_OPTIONS.includes(state.project.objective)
    ? state.project.objective
    : defaultProjectConfig().objective;
  state.project.objective = els.projectObjective.value;
  setFormValues(els.planningForm, state.planning);
  setFormValues(els.pilotForm, state.pilot);
  setInitialDates();
  bindEvents();
  renderAll();
}

hydrate();
