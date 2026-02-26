# RELATORIO - PROJETO DE EXTENSAO V (ADS)

## Identificacao
- Curso: Analise e Desenvolvimento de Sistemas
- Disciplina: Projeto de Extensao V - Construcao e Execucao Preliminar do Projeto
- Aluno(a): Alexander Rivail Ruiz Martins
- Matricula: 2424742
- Polo/Cidade: Arsenal, Sao Goncalo (SG-RJ)
- Instituicao parceira: Instituto Comunitario Ponte Verde
- Periodo letivo: 2026.1

## Projeto escolhido
- Titulo: Painel de Doacoes para ONG
- Tema: Sistema web para controle de entradas, saidas e estoque de doacoes
- ODS escolhido: **Fome zero e agricultura sustentavel**

---

## 1. Estruturacao Completa do Projeto

### 1.1 Introducao e Justificativa
A instituicao parceira realiza distribuicao de itens essenciais para familias em vulnerabilidade, porem o controle de doacoes era feito manualmente (anotacoes em papel e planilhas sem padrao). Esse processo gerava dificuldade para acompanhar saldo de estoque, historico de distribuicao e previsao de reposicao.

A lacuna tecnologica identificada foi a ausencia de um sistema simples, acessivel e padronizado para registrar movimentacoes, consultar saldos por item e apoiar a tomada de decisao.

A proposta de intervencao se mostra relevante por melhorar a organizacao operacional da ONG, reduzir erros de controle e dar mais confiabilidade ao processo de distribuicao de doacoes. O projeto tambem se alinha aos objetivos do curso de ADS ao aplicar requisitos, modelagem, desenvolvimento web, testes e validacao com usuarios.

### 1.2 Objetivo Geral e Objetivos Especificos
**Objetivo geral**
Desenvolver e validar preliminarmente um sistema web de controle de doacoes para apoiar a gestao de estoque e distribuicao de itens da instituicao parceira.

**Objetivos especificos**
1. Levantar requisitos funcionais e nao funcionais junto a instituicao.
2. Modelar um fluxo minimo para cadastro de entradas, saidas e consulta de estoque.
3. Implementar um prototipo funcional (versao piloto) com foco em usabilidade.
4. Testar o piloto com usuarios da instituicao e coletar feedback.
5. Registrar ajustes necessarios para refinamento da versao seguinte.

### 1.3 Publico-Alvo e Comunidade Envolvida
O publico direto e composto por voluntarios e equipe administrativa da ONG responsaveis por recebimento e distribuicao de doacoes. O publico indireto e formado pelas familias atendidas pela instituicao.

Quanto ao nivel de conhecimento tecnologico, os usuarios diretos possuem conhecimento basico de uso de celular e navegador, exigindo interface objetiva e de facil aprendizado.

### 1.4 Metodologia e Plano de Acao
**Coleta de requisitos**
- Conversa inicial com responsavel da ONG.
- Levantamento do fluxo atual de doacoes.
- Registro das dores operacionais e necessidades prioritarias.

**Modelagem e desenvolvimento**
- Definicao de entidades principais: item, movimentacao (entrada/saida), parceiro e relatorio.
- Prototipacao da interface web.
- Implementacao do MVP em HTML, CSS e JavaScript.

**Testes e validacao**
- Testes funcionais dos fluxos principais (cadastrar entrada, cadastrar saida, consultar estoque, exportar relatorio).
- Validacao com usuarios da ONG em ambiente de homologacao.
- Registro de problemas de usabilidade e melhorias solicitadas.

**Treinamentos**
- Orientacao breve de uso para os voluntarios.
- Simulacao de cadastros reais durante o piloto.

**Documentacao**
- Registro de requisitos levantados.
- Registro de testes e feedbacks.
- Relatorio tecnico com conclusoes da execucao preliminar.

### 1.5 Recursos Necessarios
**Materiais/tecnicos**
- Notebook para desenvolvimento
- Navegador web
- Ambiente local para execucao do sistema
- Ferramenta de edicao de codigo

**Humanos**
- Aluno responsavel pelo projeto
- 1 responsavel da instituicao parceira
- Voluntarios para validacao do piloto

**Orcamentarios**
- Nao houve custo direto relevante na fase piloto.

### 1.6 Cronograma de Execucao
| Etapa | Periodo | Responsavel | Entrega |
|---|---|---|---|
| Levantamento de requisitos | Semana 1 | Aluno + ONG | Lista de necessidades |
| Modelagem e prototipo | Semana 2 | Aluno | Fluxo definido e interface inicial |
| Implementacao piloto | Semana 3 | Aluno | MVP funcional |
| Testes com usuarios | Semana 4 | Aluno + ONG | Feedback consolidado |
| Ajustes e relatorio | Semana 5 | Aluno | Relatorio de execucao preliminar |

### 1.7 Indicadores e Avaliacao
**Indicadores quantitativos**
- Numero de funcionalidades implementadas no piloto.
- Numero de registros de entrada e saida realizados no teste.
- Tempo medio para registrar uma movimentacao.

**Indicadores qualitativos**
- Clareza da interface para usuarios nao tecnicos.
- Percepcao de utilidade da ferramenta para organizacao da ONG.
- Confianca no controle do estoque apos uso do piloto.

**Periodicidade**
Avaliacao semanal durante a fase de desenvolvimento e validacao final apos execucao preliminar com usuarios.

---

## 2. Execucao Preliminar (Piloto)

### 2.1 Selecao e Planejamento do Piloto
Foi selecionado o modulo central de controle operacional da ONG:
- cadastro de entradas de doacoes;
- cadastro de saidas/distribuicoes;
- consulta de estoque atual por item;
- exportacao de relatorio em markdown.

### 2.2 Implementacao da Versao Reduzida
A versao piloto foi disponibilizada em ambiente local para validacao com a equipe da instituicao.

Funcionalidades testadas:
1. Cadastro de entrada (item, categoria, quantidade, doador, data).
2. Cadastro de saida com validacao de saldo disponivel.
3. Visualizacao de estoque e alerta de estoque baixo.
4. Exportacao de relatorio com dados do projeto.

### 2.3 Coleta de Evidencias (Piloto)
- Print `evidencias/print-entrada-ponte-verde-01.png` da tela de cadastro de entradas.
- Print `evidencias/print-saida-ponte-verde-01.png` da tela de cadastro de saidas.
- Print `evidencias/print-estoque-ponte-verde-01.png` do painel de estoque.
- Print `evidencias/print-export-relatorio-ponte-verde-01.png` da exportacao de relatorio.
- Registro de feedback da instituicao (reuniao de 20/02/2026) com Carla Regina Tavares (coordenadora) e Danilo Freitas (voluntario lider).

### 2.4 Avaliacao e Ajustes
**Pontos positivos observados**
- Fluxo simples de uso para operacao basica.
- Melhor visibilidade de saldo por item.
- Reducao de risco de saidas acima do estoque disponivel.

**Problemas identificados no piloto**
- Necessidade de padronizar melhor nomes de itens.
- Desejo de incluir anexos de evidencia direto no sistema.
- Necessidade de melhorar filtro de busca por periodo.

**Ajustes planejados**
1. Criar padrao de cadastro de itens.
2. Adicionar modulo de upload de evidencias.
3. Incluir filtros por data e tipo de movimentacao no relatorio final.

---

## 3. Documentacao e Reflexao sobre o Processo

### 3.1 Relatorio de Execucao Preliminar
A execucao preliminar cumpriu o objetivo de validar a viabilidade da solucao proposta. O piloto mostrou que a digitalizacao do controle de doacoes melhora organizacao e rastreabilidade, reduzindo falhas comuns do processo manual.

### 3.2 Revisao do Projeto
A revisao apos piloto indicou que o projeto e viavel para continuidade, com ajustes de usabilidade e evolucao tecnica para suportar evidencias e filtros mais completos.

### 3.3 Planejamento das Proximas Etapas
1. Refinar UX e padroes de cadastro.
2. Implementar upload de evidencias (fotos/prints).
3. Consolidar versao para uso recorrente na instituicao.
4. Validar novamente com usuarios apos melhorias.

---

## 4. Palestras, Cursos ou Treinamentos (Opcional)
Nesta etapa foi realizada orientacao pratica com os usuarios sobre cadastro de entradas e saidas, leitura do estoque e boas praticas de registro.

- Material utilizado: `Treinamento_Painel_Doacoes_PonteVerde_v1.pdf` (slides) e roteiro de operacao rapida em 1 pagina.
- Registro: lista de presenca com 6 participantes (equipe administrativa e voluntarios) e 4 fotos do treinamento em `evidencias/treinamento-ponte-verde/`.
- Percepcao dos participantes: avaliacao positiva; o grupo destacou facilidade de uso no cadastro e ganho de controle na distribuicao semanal.

---

## 5. Refinamento Final do Projeto
A versao atualizada do plano incorpora os aprendizados da execucao preliminar, priorizando confiabilidade de dados, simplicidade operacional e aderencia ao contexto da instituicao. O proximo ciclo focara na consolidacao da ferramenta para uso continuo e no fortalecimento da coleta de evidencias para as proximas fases da extensao.

---

## 6. Checklist de envio no LMS
- [ ] Documento de Estruturacao Completa do Projeto
- [ ] Relatorio de Execucao Preliminar (Piloto)
- [ ] Evidencias (prints/fotos/feedbacks)
- [ ] Refinamento final e proximos passos
- [ ] Termo de autorizacao assinado
