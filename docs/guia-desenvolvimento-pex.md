# Guia de Desenvolvimento da PEX

## 1. Objetivo deste documento
Transformar o conteúdo do guia público da PEX em um plano de desenvolvimento executável para o projeto `pex`, com foco em:
- regras de negócio obrigatórias;
- jornada operacional do aluno ao longo dos semestres;
- requisitos de produto (MVP e evolução);
- arquitetura técnica inicial;
- plano de implementação.

## 2. Fonte analisada e premissas
- Fonte principal analisada: https://pexguiadefinitivo.vercel.app/ (README dinâmico do site).
- O próprio guia informa que é material de aluno para aluno (não oficial).
- Data de atualização informada no conteúdo: **12/11/2025**.
- Validações oficiais consultadas:
  - Artigo “O que é Projeto de Extensão” (Descomplica, atualizado em 23/07/2025): https://no.descomplica.com.br/migration/knowledge/o-que-%C3%A9-projeto-de-extens%C3%A3o
  - Artigo “Como solicitar suporte para o PEX” (Descomplica): https://no.descomplica.com.br/knowledge/como-solicitar-suporte-para-o-projeto-de-extens%C3%A3o-pex
  - Roteiro oficial da disciplina: `Roteiro_ADS_V_-_PEX.docx` (arquivo local recebido em **26/02/2026**), com foco em **PEX V de ADS (Construção e Execução Preliminar do Projeto)**.

### 2.1 Premissas operacionais (a validar a cada trimestre)
1. PEX é obrigatório para ingressantes a partir de **2023.3 (agosto/2023)**.
2. Entrega ocorre semestralmente (novo ciclo a cada 6 meses).
3. PEX I para ingressantes a partir de **2025.3 (agosto/2025)** tem caráter teórico.
4. Entregas acontecem no LMS (módulo de Projeto de Extensão).
5. O projeto prático exige presencialidade e evidências (fotos, termo, etc.).

### 2.2 Recorte obrigatório para ADS V (PEX V)
Com base no roteiro oficial de ADS V, esta fase exige dois blocos centrais:

1. **Documento de Estruturação Completa do Projeto**
   - Introdução e justificativa (contexto, lacunas tecnológicas, relevância).
   - Objetivo geral + objetivos específicos.
   - Público-alvo.
   - Metodologia e plano de ação (requisitos, modelagem, testes, treinamentos, documentação).
   - Recursos (materiais, humanos, orçamentários).
   - Cronograma, responsáveis e marcos.
   - Indicadores quantitativos e qualitativos + periodicidade de avaliação.
2. **Relatório de Execução Preliminar (Piloto)**
   - Seleção da funcionalidade/módulo piloto.
   - Implementação de versão reduzida.
   - Evidências de teste (prints, logs, feedbacks).
   - Conclusões, erros identificados e ajustes.
   - Revisão e refinamento final do plano.

Entregas opcionais da fase:
- Evidências de palestras/cursos/oficinas para a comunidade (material didático, presença, avaliações).

## 3. Escopo do produto PEX
O produto deve apoiar o estudante em toda a jornada de extensão, reduzindo reprovação por erro de processo e melhorando qualidade dos projetos.

### 3.1 Problemas que o produto resolve
- Falta de clareza sobre o que entregar em cada fase.
- Dificuldade de manter continuidade entre PEX II → VII.
- Entregas incompletas (sem evidências mínimas).
- Desalinhamento entre tema do projeto, área do curso e ODS.
- Perda de prazos por falta de acompanhamento.

### 3.2 Perfis de usuário
- Aluno (principal).
- Monitor/Tutor (suporte e revisão).
- Coordenador/gestão acadêmica (visão de progresso e risco).

## 4. Regras de negócio críticas (must-have)
1. **Elegibilidade**: aluno com ingresso >= 2023.3 entra em fluxo obrigatório.
2. **Sequencialidade**: cada fase deve herdar contexto da fase anterior.
3. **Trilha por área**: Tech, Gestão e Humanidades possuem roteiros diferentes.
4. **Presencialidade nas fases práticas**: bloquear submissão final sem evidências mínimas.
5. **Checklist de submissão**:
   - Termo de autorização;
   - Evidências presenciais (mín. 2 fotos, quando aplicável);
   - Relatório com objetivos, metodologia, ODS, resultados e autoavaliação.
6. **Conformidade por fase**: campos obrigatórios variam por PEX I, II, III... VII.
7. **Mudança de instituição parceira**: permitida, mas exige justificativa e ponte metodológica.
8. **Projeto em grupo**: participação individual obrigatória para cada membro.
9. **Risco de prazo**: sistema deve alertar antecedência e pendências de documentação.
10. **Conformidade ADS V**: submissão deve conter, no mínimo, Estruturação Completa + Execução Preliminar (Piloto) + Refinamento.
11. **Piloto obrigatório em ADS V**: deve existir funcionalidade-chave testada com evidências e feedback.

## 5. Fluxo funcional alvo (jornada)
1. **Onboarding**
   - Capturar curso, área, trimestre atual, data de ingresso.
   - Definir fase corrente da trilha automaticamente.
2. **Planejamento da fase**
   - Mostrar objetivo da fase + “o que fazer” + “o que entregar”.
   - Gerar checklist e cronograma sugerido.
3. **Execução guiada**
   - Registrar visitas, entrevistas, diagnósticos, ações e evidências.
   - Vincular cada atividade a entregáveis da fase.
4. **Construção do relatório**
   - Editor estruturado por seções obrigatórias.
   - Validador de campos faltantes e coerência mínima.
5. **Pré-submissão**
   - Auditoria automática (documentos, evidências, carga horária, ODS, continuidade).
6. **Submissão final**
   - Exportação (PDF/ZIP) + histórico versionado.
7. **Pós-ciclo**
   - Lições aprendidas + preparação da próxima fase com reaproveitamento de contexto.

## 6. Requisitos de produto

## 6.1 MVP (prioridade P0)
- Cadastro de aluno + definição automática da fase.
- Biblioteca de roteiros por área/fase.
- Checklist obrigatório por fase.
- Registro de atividades de campo.
- Upload e organização de evidências.
- Gerador de relatório final (template orientado).
- Painel de progresso com alertas de prazo.
- Exportação final para submissão.

## 6.2 Evolução (P1)
- Assistente de alinhamento com ODS.
- Rubrica de autoavaliação (simulação de banca).
- Colaboração em grupo com trilha individual.
- Gestão de instituições parceiras (histórico por aluno/grupo).
- Recomendações de melhoria entre fases.

## 6.3 Evolução (P2)
- Painel institucional (coordenação/monitoria).
- Métricas de impacto social por projeto.
- Benchmark com projetos de destaque (anais).
- Integração com canais oficiais de suporte/tutoria.

## 6.4 Aderência específica ADS V (implementado no MVP atual)
- Formulário de **Estruturação Completa do Projeto** com os campos exigidos no roteiro.
- Formulário de **Execução Preliminar (Piloto)** com registro de evidências, erros e ajustes.
- Exportação de relatório `.md` com seção alinhada ao formato de entrega da disciplina.
- Checklist de evidências com itens obrigatórios de ADS V.

## 7. Requisitos não funcionais
- Segurança e LGPD: consentimento, minimização de dados, trilha de auditoria.
- Disponibilidade: 99,5% no período de entregas.
- Desempenho: upload de evidências com feedback e retomada.
- Observabilidade: logs de submissão, falhas e pendências.
- Escalabilidade: picos no fechamento de trimestre.

## 8. Modelo de dados inicial (entidades)
- `Aluno`: id, curso, area, ingresso_trimestre, fase_atual.
- `Projeto`: id, aluno_id/grupo_id, instituicao, ods, status, fase.
- `PlanejamentoADSv`: projeto_id, contexto, lacunas, relevancia, objetivo_geral, objetivos_especificos, publico_alvo, metodologia, recursos, cronograma, marcos, indicadores.
- `PilotoADSv`: projeto_id, modulo_piloto, implementacao_reduzida, evidencias, erros_ajustes, conclusoes, revisao, refinamento_final.
- `Fase`: codigo (I..VII), area, objetivos, entregaveis.
- `Atividade`: projeto_id, tipo, data, descricao, carga_horaria.
- `Evidencia`: projeto_id, tipo (foto/print/termo/outro), arquivo, metadados.
- `Relatorio`: projeto_id, versao, secoes, status_validacao.
- `Submissao`: projeto_id, data, pacote, resultado_validacao.
- `Prazo`: fase, inicio, fim, lembretes.

## 9. Arquitetura técnica recomendada (início)
- Frontend: web responsiva (ex.: Next.js).
- Backend: API REST (ex.: Node.js + Nest/Fastify).
- Banco: PostgreSQL.
- Arquivos: armazenamento de objetos (S3 compatível).
- Auth: JWT + refresh token.
- Jobs: fila para validações, geração de PDF e notificações.

### 9.1 Módulos de backend
- `auth`
- `students`
- `projects`
- `phases`
- `activities`
- `evidences`
- `reports`
- `submissions`
- `deadlines-notifications`

## 10. Plano de implementação (90 dias)

### Fase A (Semanas 1-3) - Fundação
- Definir domínio de dados e regras por fase/área.
- Subir autenticação e cadastro de aluno.
- Implementar trilha de fase automática.

### Fase B (Semanas 4-6) - Execução
- Checklist por fase.
- Registro de atividades.
- Upload de evidências com validações básicas.

### Fase C (Semanas 7-9) - Entrega
- Gerador de relatório por template.
- Validação pré-submissão.
- Exportação de pacote final.

### Fase D (Semanas 10-12) - Qualidade
- Alertas de prazo.
- Observabilidade e auditoria.
- Testes E2E dos fluxos principais.

## 11. Critérios de aceite (Definition of Done)
1. Aluno consegue concluir fluxo completo da fase sem suporte manual.
2. Sistema impede submissão com pendências críticas.
3. Relatório exportado contém todas as seções obrigatórias da fase.
4. Evidências ficam rastreáveis por projeto e data.
5. Histórico da fase anterior é reutilizado automaticamente na fase seguinte.
6. Para ADS V, relatório exportado inclui Estruturação Completa, Piloto e Refinamento final.

## 12. Riscos e mitigação
- **Risco:** Mudança de regra institucional entre trimestres.
  - **Mitigação:** versionar roteiros por trimestre e manter feature flags.
- **Risco:** Baixa qualidade das evidências anexadas.
  - **Mitigação:** guia visual + validação mínima de presença/tipo.
- **Risco:** Usuário deixar para última semana.
  - **Mitigação:** alertas progressivos e painel de pendências.
- **Risco:** Dependência de fontes não oficiais.
  - **Mitigação:** rotina mensal de revisão com base em canais oficiais.

## 13. Próximos passos imediatos
1. Validar este documento com coordenação/tutoria.
2. Congelar escopo do MVP.
3. Especificar contratos de API (OpenAPI).
4. Criar backlog técnico (épicos/histórias/tarefas).
5. Iniciar implementação da Fase A.
