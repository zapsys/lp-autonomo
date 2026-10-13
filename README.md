# LP Autônomo

## Crie landing pages profissionais em minutos.

Um construtor visual desenvolvido com Vue 3, Vite e Tailwind CSS para confeiteiras, pequenos empreendedores e profissionais autônomos.

![Vue](https://img.shields.io/badge/Vue_3-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-Animate_On_Scroll-8B5CF6?style=for-the-badge)
![Adm-zip](https://img.shields.io/badge/Adm--Zip-2563EB?style=for-the-badge)
![MIT LICENSE](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)
![Versão 1.1.0](https://img.shields.io/badge/Version-1.1.0-2563EB?style=for-the-badge)
![Em Desenvolvimento](https://img.shields.io/badge/Status-Em_Desenvolvimento-F59E0B?style=for-the-badge)

---

# 📖 Sobre o Projeto

O **LP Autônomo** é um construtor de landing pages que permite criar sites profissionais sem necessidade de programação.

A aplicação oferece um assistente passo-a-passo para coleta de informações do negócio, exibindo uma pré-visualização em tempo real enquanto o usuário personaliza:

- Identidade visual
- Logotipo
- Cores e tema
- Produtos
- Galeria
- Diferenciais
- Informações de contato
- Localização

Ao final do processo, o sistema gera automaticamente uma versão otimizada do site pronta para hospedagem.

---

# ✨ Funcionalidades

## Landing Page

- ✅ Preview em tempo real
- ✅ Edição por etapas
- ✅ Atualização automática de conteúdo
- ✅ Responsividade para mobile e desktop

## Dados do Negócio

- ✅ Nome da empresa
- ✅ Cidade
- ✅ Slogan
- ✅ Hero Banner
- ✅ Conteúdo institucional

## Logotipo

- ✅ Upload de logo
- ✅ Compressão automática
- ✅ Atualização automática do favicon

## Contato

- ✅ WhatsApp
- ✅ Instagram
- ✅ Google Maps incorporado
- ✅ Texto personalizado

## Produtos

- ✅ Produtos ilimitados
- ✅ Preço formatado
- ✅ Imagem por produto

## Diferenciais

- ✅ Cadastro ilimitado
- ✅ Imagem por diferencial
- ✅ Organização automática

## Galeria

- ✅ Upload múltiplo
- ✅ Compressão automática
- ✅ Pré-visualização imediata

## SEO

- ✅ Title dinâmico
- ✅ Description
- ✅ Keywords
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ Favicon dinâmico

## Exportação

- ✅ Geração automática do `business.json`
- ✅ Build automática usando Vite
- ✅ Geração de arquivo ZIP
- ✅ Download pronto para hospedagem

---

# 🛠 Tecnologias

## Front-end

- Vue 3
- Vue Router
- Vite
- Tailwind CSS

## Back-end

- Node.js
- Express

## Bibliotecas

- adm-zip
- cors
- AOS

---

# 📂 Estrutura do Projeto

```text
lp-autonomo/
│
├── public/
│
├── server/
│   ├── app.js
│   └── routes/
│       └── export.js
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── business.json
│   ├── stores/
│   ├── utils/
│   └── views/
│
├── dist/
├── exports/
│
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```

---

# 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/zapsys/lp-autonomo.git
```

Entre na pasta:

```bash
cd lp-autonomo
```

Instale as dependências:

```bash
npm install
```

---

# ⚙️ Configuração de Ambiente

Crie um dos arquivos abaixo na raiz do projeto:

```text
.env.local
```

ou

```text
.env.development
```

Conteúdo:

```env
BASE_URL=http://localhost:5173
```

```env
VITE_API_URL=http://localhost:3000
```

---

# ▶️ Executando o Projeto

## Front-end

```bash
npm run dev
```

Acesse:

```text
http://localhost:5173
```

---

## Back-end

```bash
npm run server
```

Acesse:

```text
http://localhost:3000
```

---

# 📦 Exportação da Landing Page

Ao clicar em:

```text
Baixar Site (.zip)
```

o sistema executa o seguinte fluxo:

```text
Formulário
        ↓
businessStore
        ↓
Tratamento dos dados
        ↓
Extração das imagens Base64
        ↓
Geração do business.json
        ↓
Cópia da build existente (dist/)
        ↓
Montagem da estrutura estática
        ↓
Compactação do conteúdo
        ↓
Download do ZIP
```

## Como funciona

O processo de exportação utiliza a build já existente da aplicação e não executa uma nova compilação.

Durante a exportação:

- ✅ Os dados preenchidos no formulário são extraídos do `businessStore`
- ✅ As imagens são convertidas para arquivos físicos
- ✅ É criado um arquivo `business.json`

---

# 📄 Estrutura do ZIP Gerado

```text
minha-landing.zip
│
├── index.html
├── business.json
│
├── assets/
│   ├── index.css
│   ├── index.js
│   └── ...
│
└── images/
    ├── logo.png
    ├── product-1.jpg
    ├── product-2.jpg
    ├── feature-1.jpg
    ├── gallery-1.jpg
    └── gallery-2.jpg
```

---

# 🌐 Compatibilidade de Hospedagem

A landing exportada é totalmente estática.

Não requer:

```text
Node.js
Express
npm
Banco de Dados
Docker
```

Compatível com:

- ✅ Hostinger
- ✅ Locaweb
- ✅ KingHost
- ✅ cPanel
- ✅ GitHub Pages
- ✅ Netlify
- ✅ Vercel
- ✅ Cloudflare Pages
- ✅ Amazon S3
- ✅ Azure Static Web Apps

---
# 🔄 Modo Exportado

Durante a exportação é adicionada automaticamente a propriedade:

```json
{
  "exported": true
}
```

Quando essa propriedade está presente:

```text
LandingPageView
↓
Carregada automaticamente
```

O usuário final visualiza apenas a landing page.

O ambiente de edição permanece oculto.

---

# 💾 Persistência de Dados

Durante a edição:

```text
localStorage
        ↓
businessStore
```

Após a exportação:

```text
business.json
        ↓
businessStore
```

Isso permite que a landing exportada funcione independentemente do editor.

---

# 📱 Responsividade

## Mobile (< 768px)

- Formulário em tela cheia
- Preview oculto
- Visualização sob demanda

## Tablet (≥ 768px)

- Formulário e preview simultâneos

## Desktop (≥ 1024px)

- Preview lateral fixo
- Melhor aproveitamento da tela

---

# 🧩 Recursos Recentes

## Versão 1.1

- ✅ Exportação estática
- ✅ Geração automática de `business.json`
- ✅ Modo exportado (`exported`)
- ✅ Landing exportada sem editor
- ✅ Upload múltiplo de imagens
- ✅ Galeria responsiva
- ✅ Diferenciais com imagem
- ✅ SEO dinâmico
- ✅ Open Graph automático
- ✅ Twitter Cards
- ✅ Favicon dinâmico
- ✅ Compatibilidade com GitHub Pages
- ✅ Compatibilidade com Render
- ✅ Compatibilidade com hospedagens compartilhadas
- ✅ Armazenamento local automático
- ✅ Centralização automática do mapa em dispositivos móveis

---

# 🔮 Roadmap

## Futuras Implementações

- [ ] Sistema de templates
- [ ] Banco de dados
- [ ] Multiusuário
- [ ] Deploy automático
- [ ] Integração com domínio próprio
- [ ] Editor drag-and-drop
- [ ] Biblioteca de componentes
- [ ] Catálogo de temas

---

# 🤝 Contribuindo

Contribuições são bem-vindas.

1. Fork o projeto
2. Crie uma branch

```bash
git checkout -b feature/minha-feature
```

3. Commit suas alterações

```bash
git commit -m "Minha nova feature"
```

4. Faça push

```bash
git push origin feature/minha-feature
```

5. Abra um Pull Request

---

# 👨‍💻 Autor

**Aram Zap**

Projeto desenvolvido para simplificar a criação de landing pages profissionais para confeiteiras, autônomos e pequenos empreendedores.

---

# 📜 Licença

MIT License

Copyright (c) 2026 Aram Zap

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.