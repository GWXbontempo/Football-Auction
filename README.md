# ⚽ Football Auction

Um jogo web de leilão de jogadores de futebol contra IA. Gerencie um orçamento fictício, lance em jogadores reais e monte um time estratégico.

*Jogue Agora!!*
*https://gwxbontempo.github.io/Football-Auction/*

---

## 📖 Sobre o Projeto

Football Auction é um jogo baseado em leilão onde você compra jogadores de futebol com um orçamento limitado. O objetivo é montar o time mais forte possível dentro da sua formação, competindo contra adversários com IA e personalidades distintas.

Inspirado em simuladores de transferências e em dinâmicas de draft, o jogo oferece:
- **Leilão em tempo real** com IA inteligente
- **8 formações balanceadas** com regras de encaixe de posições
- **Funções híbridas** (ala e segundo atacante) para maior profundidade estratégica
- **5 personalidades de IA** com dificuldades ajustáveis
- **108 jogadores reais** dos principais times europeus e brasileiros
- **Persistência em navegador** — salve seu progresso automaticamente

---

## 🎮 Como Jogar

### Setup
1. Abra `index.html` no navegador (funciona offline)
2. Configure na tela inicial:
   - **Nome do seu time**
   - **Formação** (4-3-3, 4-4-2, 3-5-2, etc.)
   - **Número de adversários** (1–3)
   - **Dificuldade** (Fácil, Normal, Difícil)
   - **Orçamento** (padrão: 185M)

### Leilão
- Cada rodada, um novo jogador entra em leilão
- **Você tem 15-30 segundos** para fazer a melhor oferta ou passar
- Bots ofertam com base em:
  - Encaixe do jogador na formação
  - Orçamento disponível
  - Estratégia da personalidade
- **Quem oferta mais alto ganha o jogador**

### Posições e Encaixes
- **Posição primária** = 100% do overall
- **Posição secundária** = 95% do overall
- **Funções híbridas:**
  - **Ala (AE/AD):** Lateral → 97%, Ponta → 90%
  - **Segundo Atacante (SA):** Atacante → 97%, Meia-atacante → 95%, Ponta → 90%

### Resultado
- **Score final** = 85% do overall médio + 15% do equilíbrio setorial
- Veja qual setor ficou mais forte e qual mais fraco
- Compare seu time com os adversários

---

## 🤖 Personalidades de IA

Cada adversário tem uma estratégia única:

| Personalidade | Descrição | Dificuldade |
|---|---|---|
| **Econômico** | Evita lances altos, paga preço justo | ⭐ |
| **Equilibrado** | Gasta de forma uniforme, sem picos | ⭐⭐ |
| **Imprevisível** | Muda de humor, ofertas erráticas | ⭐⭐ |
| **Agressivo** | Vai atrás dos craques, paga caro | ⭐⭐⭐ |
| **Tático** | Só quer o que falta, estratégico | ⭐⭐⭐ |

---

## 🏗️ Arquitetura

```
football-auction/
├── index.html          # Página principal (lógica + UI)
├── database.js         # Base de jogadores e países
└── README.md          # Este arquivo
```

**Stack técnico:**
- **Linguagem:** JavaScript puro (ES6+)
- **Renderização:** DOM direto (sem frameworks)
- **Persistência:** LocalStorage
- **Compatibilidade:** Funciona offline

---

## 📦 Como Usar

### Localmente (sem servidor)
```bash
git clone https://github.com/seu-usuario/football-auction.git
cd football-auction
# Abra index.html no navegador
# Ou inicie um servidor local:
python3 -m http.server 8000
# Acesse http://localhost:8000
```
---

## 📊 Formações Disponíveis

| Formação | Estrutura | Funções Híbridas |
|---|---|---|
| 4-3-3 | 4 Def, 3 Meio, 3 Ata | — |
| 4-4-2 | 4 Def, 4 Meio, 2 Ata | 🔄 Ala, SA |
| 4-2-3-1 | 4 Def, 2 Vol, 3 Meio, 1 Ata | — |
| 4-2-4 | 4 Def, 2 Vol, 4 Ata | — |
| 3-5-2 | 3 Def, 5 Meio, 2 Ata | 🔄 Ala, SA |
| 3-4-3 | 3 Def, 4 Meio, 3 Ata | 🔄 Ala |
| 3-4-2-1 | 3 Def, 4 Meio, 2 Ata, 1 Ata | — |
| 5-3-2 | 5 Def, 3 Meio, 2 Ata | 🔄 SA |

---

## 👥 Base de Jogadores

**108 jogadores** dos principais clubes europeus:
- Goleiros, Zagueiros, Laterais
- Volantes, Meias, Meia-atacantes
- Pontas, Atacantes

Balanceados por posição e com overall ajustado à vida real (2024–2025).

**Atualizar jogadores:**
1. Edite `database.js`
2. Siga o formato: `Nome|País|AnoNasc|Clube|Posição|Secundária|Velocidade,Finalização,Passe,Drible,Defesa,Físico`
3. Salve e recarregue

---

## 🚀 Roadmap

- [x] **v1** — Núcleo jogável (leilão, IA, pontuação)
- [x] **v2** — Posições secundárias, funções híbridas
- [x] **v3** — Rebalanceamento, UI aprimorada, BD separada
- [ ] **v4** — Modo Futsal e Futebol 7, expansão do número de jogadores
- [ ] **v5** — Simulação de partidas (com variantes táticas)
- [ ] **v6** — Multiplayer online

---

## 🎨 Customização

### Alterar cor principal
No `index.html`, procure por `--g:#22c55e` (a cor verde) em `:root` e troque pelo código hexadecimal que quiser.

### Ajustar orçamento padrão
Em `index.html`, procure por `budget:185` e altere o número.

### Adicionar/remover formações
Edite a constante `FORM` em `index.html` com a nova estrutura de vagas.

---

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Você pode:
- Reportar bugs criando uma issue
- Sugerir novos jogadores ou formações
- Melhorar a UI ou o balanceamento

---

## 📜 Licença

Este projeto é de código aberto sob a licença **CC BY-NC-SA 4.0**.

---

## 📧 Contato
goodtimeswilliam@gmail.com

**Perguntas?** Abra uma issue no GitHub ou entre em contato.

---

**Versão:** beta 0.3.1  
**Última atualização:** 20 de outubro de 2026

*Jogue Agora!!*
*https://gwxbontempo.github.io/Football-Auction/*

---

## ⚠️ Aviso Legal

Este é um **projeto fã independente** e não é afiliado, endossado ou 
patrocinado pela FIFA, UEFA, Premier League ou qualquer clube/confederação.

- Nomes de jogadores e times são usados apenas para fins educacionais
- Este não é um produto oficial
- Dados de jogadores são aproximações não-oficiais

**Football Auction é um jogo de estratégia, não um simulador oficial.**
