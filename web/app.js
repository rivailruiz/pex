const focusByArea = {
  tech: [
    "educacao",
    "inclusao digital",
    "eficiencia operacional",
    "dados e decisao",
    "acessibilidade"
  ],
  gestao: [
    "organizacao financeira",
    "marketing local",
    "processos internos",
    "empreendedorismo social",
    "captacao de recursos"
  ],
  humanidades: [
    "saude emocional",
    "direitos e cidadania",
    "mediacao de conflitos",
    "lideranca comunitaria",
    "educacao cultural"
  ]
};

const ideasByArea = {
  tech: [
    {
      id: "tech-1",
      titulo: "Painel de Doacoes para ONG",
      foco: "eficiencia operacional",
      ods: "ODS 10 e ODS 17",
      problema: "A ONG controla doacoes em planilhas soltas e perde rastreabilidade.",
      solucao: "Criar painel web simples para entrada, estoque e distribuicao de doacoes.",
      entregaveis: ["diagnostico", "prototipo", "manual rapido", "treinamento"]
    },
    {
      id: "tech-2",
      titulo: "Oficina de Seguranca Digital para Idosos",
      foco: "inclusao digital",
      ods: "ODS 4 e ODS 16",
      problema: "Idosos sofrem golpes por falta de letramento digital.",
      solucao: "Oficinas presenciais com roteiro pratico e cartilha de prevencao.",
      entregaveis: ["plano de oficina", "material didatico", "lista de presenca", "avaliacao"]
    },
    {
      id: "tech-3",
      titulo: "Agendamento para Clinica Comunitaria",
      foco: "eficiencia operacional",
      ods: "ODS 3 e ODS 9",
      problema: "Agendamento manual gera conflitos e faltas.",
      solucao: "Sistema basico de agendamento com lembrete e controle de horarios.",
      entregaveis: ["levantamento de requisitos", "prototipo", "teste piloto", "relatorio"]
    },
    {
      id: "tech-4",
      titulo: "Portal de Acessibilidade para Escola",
      foco: "acessibilidade",
      ods: "ODS 4 e ODS 10",
      problema: "Falta material digital acessivel para alunos com necessidades especificas.",
      solucao: "Repositorio de conteudos acessiveis e guia para professores.",
      entregaveis: ["auditoria", "modelo de conteudo", "guia de boas praticas", "oficina"]
    },
    {
      id: "tech-5",
      titulo: "Dashboard de Consumo de Agua e Energia",
      foco: "dados e decisao",
      ods: "ODS 11 e ODS 12",
      problema: "Instituicao nao monitora consumo e desperdicios.",
      solucao: "Painel simples com indicadores e metas de reducao.",
      entregaveis: ["coleta de dados", "dashboard", "meta de melhoria", "analise final"]
    },
    {
      id: "tech-6",
      titulo: "Cadastro de Voluntarios com QR Code",
      foco: "eficiencia operacional",
      ods: "ODS 16 e ODS 17",
      problema: "Controle de presenca em eventos sociais e manual.",
      solucao: "Sistema de check-in com QR e relatorio automatico.",
      entregaveis: ["mapa do processo", "MVP", "guia de uso", "relatorio de impacto"]
    }
  ],
  gestao: [
    {
      id: "gestao-1",
      titulo: "Plano de Caixa para MEI Local",
      foco: "organizacao financeira",
      ods: "ODS 8 e ODS 10",
      problema: "MEIs operam sem previsao financeira basica.",
      solucao: "Implementar rotina de fluxo de caixa e controle semanal.",
      entregaveis: ["diagnostico financeiro", "planilha modelo", "treinamento", "resultado"]
    },
    {
      id: "gestao-2",
      titulo: "Marketing de Bairro para Pequenos Comercios",
      foco: "marketing local",
      ods: "ODS 8",
      problema: "Comercios tem baixa presenca digital e pouco alcance.",
      solucao: "Plano de conteudo local, calendario e indicadores simples.",
      entregaveis: ["analise de perfil", "plano de conteudo", "execucao piloto", "metricas"]
    },
    {
      id: "gestao-3",
      titulo: "Mapeamento de Processos para Associacao",
      foco: "processos internos",
      ods: "ODS 16",
      problema: "Processos internos sao confusos e dependem de pessoas especificas.",
      solucao: "Mapear fluxo atual e definir padrao operacional minimo.",
      entregaveis: ["entrevistas", "fluxograma", "procedimento padrao", "avaliacao"]
    },
    {
      id: "gestao-4",
      titulo: "Capacitacao de Empreendedorismo Social",
      foco: "empreendedorismo social",
      ods: "ODS 4 e ODS 8",
      problema: "Jovens nao tem estrutura para tirar projetos do papel.",
      solucao: "Trilha curta de modelagem de negocio com mentoria.",
      entregaveis: ["plano do curso", "material", "evento", "feedback"]
    },
    {
      id: "gestao-5",
      titulo: "Plano de Captacao para ONG",
      foco: "captacao de recursos",
      ods: "ODS 17",
      problema: "ONG depende de doacoes pontuais e sem previsibilidade.",
      solucao: "Criar estrategia de campanhas, parcerias e recorrencia.",
      entregaveis: ["diagnostico", "plano de captacao", "kit institucional", "analise"]
    },
    {
      id: "gestao-6",
      titulo: "Controle de Estoque para Projeto Social",
      foco: "processos internos",
      ods: "ODS 12",
      problema: "Materiais entram e saem sem registro confiavel.",
      solucao: "Modelo de controle com classificacao e reposicao minima.",
      entregaveis: ["inventario", "modelo de controle", "treinamento", "relatorio"]
    }
  ],
  humanidades: [
    {
      id: "human-1",
      titulo: "Rodas de Conversa sobre Saude Emocional",
      foco: "saude emocional",
      ods: "ODS 3",
      problema: "Comunidade nao tem espaco seguro para dialogo emocional.",
      solucao: "Ciclo de encontros presenciais com roteiro e mediacao.",
      entregaveis: ["planejamento", "encontros", "registro", "avaliacao"]
    },
    {
      id: "human-2",
      titulo: "Oficina de Cidadania e Direitos",
      foco: "direitos e cidadania",
      ods: "ODS 16",
      problema: "Publico desconhece direitos basicos e canais de apoio.",
      solucao: "Oficinas praticas com casos reais e guia de servicos.",
      entregaveis: ["conteudo", "oficinas", "guia local", "impacto"]
    },
    {
      id: "human-3",
      titulo: "Programa de Mediacao Escolar",
      foco: "mediacao de conflitos",
      ods: "ODS 4 e ODS 16",
      problema: "Conflitos recorrentes sem metodo de resolucao.",
      solucao: "Capacitar liderancas escolares em escuta e mediacao.",
      entregaveis: ["diagnostico", "trilha formativa", "piloto", "resultado"]
    },
    {
      id: "human-4",
      titulo: "Formacao de Liderancas Comunitarias",
      foco: "lideranca comunitaria",
      ods: "ODS 11 e ODS 16",
      problema: "Baixa articulacao local para iniciativas coletivas.",
      solucao: "Programa de lideranca com modulos de planejamento e mobilizacao.",
      entregaveis: ["mapa de atores", "trilha", "encontros", "plano de continuidade"]
    },
    {
      id: "human-5",
      titulo: "Circuito de Leitura e Expressao",
      foco: "educacao cultural",
      ods: "ODS 4",
      problema: "Criancas e jovens com pouco acesso a praticas culturais.",
      solucao: "Oficinas de leitura e producao criativa em parceria com escola local.",
      entregaveis: ["curadoria", "oficinas", "mostra final", "registro"]
    },
    {
      id: "human-6",
      titulo: "Rede de Apoio para Cuidadores",
      foco: "saude emocional",
      ods: "ODS 3 e ODS 10",
      problema: "Cuidadores informais com sobrecarga e pouca rede de apoio.",
      solucao: "Grupo de apoio com encontros guiados e mapa de servicos locais.",
      entregaveis: ["diagnostico", "encontros", "guia", "avaliacao"]
    }
  ]
};

const faseGoal = {
  I: "compreender o formato do PEX e analisar referencia",
  II: "diagnosticar contexto e mapear desafios",
  III: "aprofundar analise e definir estrategia",
  IV: "coletar dados e consolidar evidencias",
  V: "estruturar plano completo e validar piloto",
  VI: "executar intervencao e monitorar progresso",
  VII: "avaliar resultados e propor melhorias"
};

const form = document.querySelector("#context-form");
const areaSelect = document.querySelector("#area");
const faseSelect = document.querySelector("#fase");
const focoSelect = document.querySelector("#foco");
const limiteSelect = document.querySelector("#limite");
const ideasRoot = document.querySelector("#ideas");
const planRoot = document.querySelector("#plan");
const planHint = document.querySelector("#plan-hint");

function updateFocusOptions() {
  const area = areaSelect.value;
  const options = focusByArea[area];

  focoSelect.innerHTML = "";
  for (const focus of options) {
    const option = document.createElement("option");
    option.value = focus;
    option.textContent = focus;
    focoSelect.appendChild(option);
  }
}

function sortIdeas(a, b, focus) {
  const aScore = a.foco === focus ? 1 : 0;
  const bScore = b.foco === focus ? 1 : 0;
  if (aScore !== bScore) return bScore - aScore;
  return a.titulo.localeCompare(b.titulo);
}

function createIdeaCard(idea, fase) {
  const article = document.createElement("article");
  article.className = "card";

  const tags = [idea.ods, `PEX ${fase}`, idea.foco]
    .map((item) => `<span class="tag">${item}</span>`)
    .join("");

  article.innerHTML = `
    <h3>${idea.titulo}</h3>
    <div class="tags">${tags}</div>
    <p><strong>Problema:</strong> ${idea.problema}</p>
    <p><strong>Solucao:</strong> ${idea.solucao}</p>
    <p><strong>Entregaveis sugeridos:</strong> ${idea.entregaveis.join(", ")}</p>
    <button type="button" class="btn" data-id="${idea.id}">Montar plano</button>
  `;

  article.querySelector("button").addEventListener("click", () => {
    renderPlan(idea, fase);
  });

  return article;
}

function weekTasks(idea, fase) {
  if (fase === "I") {
    return [
      "Selecionar artigo dos anais alinhado ao curso",
      "Analisar problema, metodologia e ODS do artigo",
      "Escrever conclusoes e aprendizados praticos",
      "Montar entrega final com PDF e resposta estruturada"
    ];
  }

  return [
    `Semana 1: Diagnostico inicial e alinhamento com parceiro (${faseGoal[fase]})`,
    "Semana 2: Coleta de dados e registro de evidencias presenciais",
    `Semana 3: Execucao da proposta (${idea.solucao.toLowerCase()})`,
    "Semana 4: Relatorio final, indicadores de impacto e licoes aprendidas"
  ];
}

function buildMarkdown(idea, fase) {
  const tasks = weekTasks(idea, fase);
  const now = new Date().toLocaleDateString("pt-BR");

  const md = [
    `# Plano de Projeto PEX - ${idea.titulo}`,
    "",
    `- Data de geracao: ${now}`,
    `- Fase: PEX ${fase}`,
    `- ODS: ${idea.ods}`,
    `- Foco: ${idea.foco}`,
    "",
    "## Problema",
    idea.problema,
    "",
    "## Solucao",
    idea.solucao,
    "",
    "## Entregaveis",
    ...idea.entregaveis.map((item) => `- ${item}`),
    "",
    "## Plano de 4 semanas",
    ...tasks.map((item) => `- ${item}`),
    "",
    "## Checklist final",
    "- Termo de autorizacao assinado",
    "- Evidencias de execucao (fotos/prints)",
    "- Relatorio com objetivos, metodologia, ODS e resultados",
    "- Autoavaliacao da experiencia"
  ].join("\n");

  return md;
}

function downloadPlan(filename, content) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}

function renderPlan(idea, fase) {
  const tasks = weekTasks(idea, fase);
  const markdown = buildMarkdown(idea, fase);

  planHint.textContent = "Plano gerado. Ajuste as tarefas com base no roteiro oficial da sua disciplina.";

  const ul = tasks.map((task) => `<li>${task}</li>`).join("");

  planRoot.innerHTML = `
    <article class="plan-card">
      <h3>${idea.titulo}</h3>
      <p><strong>Objetivo da fase:</strong> ${faseGoal[fase]}</p>
      <p><strong>ODS:</strong> ${idea.ods}</p>
      <h4>Plano de 4 semanas</h4>
      <ul>${ul}</ul>
      <h4>Checklist minimo</h4>
      <ul>
        <li>Termo de autorizacao assinado</li>
        <li>Evidencias de execucao (fotos/prints)</li>
        <li>Relatorio final com resultados</li>
      </ul>
      <button class="btn primary" type="button" id="download-plan">Baixar plano em .md</button>
    </article>
  `;

  document.querySelector("#download-plan").addEventListener("click", () => {
    const filename = `plano-${idea.id}-pex-${fase.toLowerCase()}.md`;
    downloadPlan(filename, markdown);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const area = areaSelect.value;
  const fase = faseSelect.value;
  const foco = focoSelect.value;
  const limit = Number(limiteSelect.value);

  const ideas = [...ideasByArea[area]].sort((a, b) => sortIdeas(a, b, foco)).slice(0, limit);

  ideasRoot.innerHTML = "";

  for (const idea of ideas) {
    ideasRoot.appendChild(createIdeaCard(idea, fase));
  }

  if (ideas.length === 0) {
    ideasRoot.innerHTML = "<p>Nenhuma ideia encontrada para esse filtro.</p>";
  }

  planRoot.innerHTML = "";
  planHint.textContent = "Selecione uma ideia para gerar o plano.";
});

updateFocusOptions();
areaSelect.addEventListener("change", updateFocusOptions);
