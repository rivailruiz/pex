# PEX - Painel de Doacoes (ADS V)

Aplicacao enxuta do projeto atual: controle de entradas, saidas e estoque para ONG, com formularios de estruturacao e piloto do roteiro ADS V.

## Como rodar

```bash
cd /Users/ruiz/projects/pex/web
python3 -m http.server 8080
```

Abra `http://localhost:8080`.

## Estrutura

- `web/index.html`: interface principal do painel
- `web/painel.css`: estilos da aplicacao
- `web/painel.js`: logica de dados, validacoes e persistencia local
- `docs/relatorios/relatorio-ads-v-ong-painel-doacoes.md`: relatorio base em markdown
- `docs/relatorios/relatorio-ads-v-ong-painel-doacoes-final.pdf`: relatorio final em PDF para envio
- `docs/ads-v-roteiro-aplicado.md`: mapeamento do roteiro oficial ADS V
- `docs/guia-desenvolvimento-pex.md`: guia de produto e arquitetura
