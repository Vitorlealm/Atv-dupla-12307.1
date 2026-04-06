# Painel Interativo do Aluno

Uma aplicação React desenvolvida com Vite que demonstra componentes, props, estado dinâmico e estilização CSS.

## 📋 Descrição

O **Painel Interativo do Aluno** é uma interface que exibe informações do aluno e permite alternar o status da atividade através de um botão interativo. A aplicação foi desenvolvida implementando comunicação entre componentes via props e gerenciamento de estado centralizado.

---

## 🎯 Objetivos Atingidos

### ✅ Um componente que exibe informações (via props)

- **Componente `Perfil.jsx`**: Recebe dados via props (`nome`, `curso`, `status`)
- Exibe as informações do aluno na tela de forma organizada
- Estilizado com classes CSS específicas

### ✅ Um componente que executa uma ação (via evento)

- **Componente `Acao.jsx`**: Possui um botão que dispara uma função via props (`onClick`)
- Altera o estado central quando clicado
- O texto do botão muda dinamicamente baseado no status

### ✅ Um estado central que será alterado dinamicamente

- **Componente `App.jsx`**: Utiliza `useState` para gerenciar o código de status
- Lista `STATUS` centralizada com os estados possíveis
- O estado é atualizado quando o botão é clicado
- A interface se atualiza automaticamente refletindo as mudanças

### ✅ Comportamento Esperado

- O perfil do aluno é exibido na tela com suas informações
- Um botão está disponível para alterar o status
- Ao clicar no botão, o estado muda entre "Estudando React" → "Atividade em Progresso" → "Atividade Concluída!"
- A interface atualiza automaticamente mostrando o novo status
- A aplicação possui estilização global (App.css, index.css) e por componente (Perfil.css, Acao.css)

---

## 🚀 Como Instalar e Rodar

### Pré-requisitos

- Node.js versão 14 ou superior
- npm ou yarn

### 🪟 Windows/Mac/Linux

1. **Abra o CMD ou PowerShell** e navegue até a pasta do projeto:

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

4. **Abra no navegador**:
   - O terminal exibirá uma URL (geralmente `http://localhost:5173`)
   - Copie e cole no seu navegador

## 📁 Estrutura do Projeto

```
VitorLeal_LucasCassiano/
├── src/
│   ├── components/
│   │   ├── Perfil.jsx          # Componente que exibe informações
│   │   ├── Perfil.css          # Estilização do Perfil
│   │   ├── Acao.jsx            # Componente que executa ação
│   │   └── Acao.css            # Estilização do Acao
│   ├── App.jsx                 # Componente principal (estado centralizado)
│   ├── App.css                 # Estilização global
│   ├── index.css               # Reset CSS global
│   ├── main.jsx                # Ponto de entrada
│   └── assets/
├── index.html                  # HTML principal
├── package.json                # Dependências do projeto
├── vite.config.js              # Configuração do Vite
└── README.md                   # Este arquivo
```

---

## 🔧 Tecnologias Utilizadas

- **React** - Biblioteca para construir interfaces
- **Vite** - Ferramenta de build rápida
- **CSS3** - Estilização da aplicação
- **JavaScript ES6+** - Linguagem de programação

---

## 💡 Como Funciona

### Estado Central (App.jsx)

```javascript
const [statusCode, setStatusCode] = useState(0);

const handleClick = () => {
  setStatusCode(statusCode === 0 ? 1 : 0);
};
```

### Lista de Status

```javascript
const STATUS = [
  { cd: 0, desc: "Estudando React" },
  { cd: 1, desc: "Atividade Concluída!" },
];
```

### Comunicação entre Componentes

- **App.jsx** → **Perfil.jsx**: passa `nome`, `curso`, `status` via props
- **App.jsx** → **Acao.jsx**: passa `onClick` e `status` via props
- **Acao.jsx** → **App.jsx**: executa `handleClick` ao clicar no botão

---

## 📸 Interação da Aplicação

1. **Tela Inicial**: Exibe "Estudando React" e botão "Concluir Atividade"
2. **Após Clicar**: Altera para "Atividade Concluída!" e botão "Em andamento"
3. **Ao Clicar Novamente**: Volta para "Estudando React" e "Concluir Atividade"

---

## 📝 Comandos Úteis

| Comando           | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm install`     | Instala as dependências              |
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Cria a build para produção           |
| `npm run preview` | Visualiza a build localmente         |

---

## 👥 Autores

- **Vitor Leal de Oliveira Martins**
- **Lucas Cassiano**

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais na disciplina de Desenvolvimento Web Front End (BSI0309NA) da UniAcademia.

---

## ❓ Dúvidas

Se tiver dúvidas sobre a instalação ou funcionamento, verifique:

- Se o Node.js está instalado: `node --version`
- Se o npm está atualizado: `npm --version`
- Se a porta 5173 está disponível (tente fechar outras aplicações que possam estar usando-a)
- Chama no Zap 32 985167962
