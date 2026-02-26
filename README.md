# PEX - Painel de Doacoes + Ideias

MVP do projeto 1 (`Painel de Doacoes para ONG`) com controle de entradas, saidas, estoque e relatorios, mais o gerador inicial de ideias.

Inclui configuracao de objetivo ODS com as 17 opcoes oficiais (dropdown de objetivo).
Inclui blocos especificos do roteiro **ADS V (PEX V)**: estruturacao completa do projeto e execucao preliminar (piloto).
Inclui exportacao de relatorio em `.md` pronto para anexar no fluxo de entrega do PEX, com seções alinhadas ao roteiro ADS V.

## Como rodar

Opcao 1:

```bash
cd /Users/ruiz/projects/pex/web
python3 -m http.server 8080
```

Abra: `http://localhost:8080`

Opcao 2:

- Abra direto o arquivo `index.html` no navegador.

## Telas

- `http://localhost:8080/`: Painel de Doacoes (MVP principal)
- `http://localhost:8080/ideias.html`: Gerador de ideias e plano rapido

## Estrutura

- `web/index.html`: tela do Painel de Doacoes
- `web/painel.css`: estilos do painel
- `web/painel.js`: logica de estoque, entradas e saidas
- `web/ideias.html`: tela de ideias (versao anterior)
- `web/styles.css`: estilos da tela de ideias
- `web/app.js`: base de ideias + geracao de plano
- `docs/guia-desenvolvimento-pex.md`: guia de produto e arquitetura
- `docs/ads-v-roteiro-aplicado.md`: mapeamento do roteiro oficial ADS V para o MVP
