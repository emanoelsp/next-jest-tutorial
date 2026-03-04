# 🧪 Next.js + Jest + React Testing Library — Tutorial de Testes de Software

> Material didático para aula de **Testes de Software** — cobrindo configuração, testes unitários, testes de componentes, mocks, testes assíncronos, API Routes e cobertura de código.

---

## 📋 Índice

1. [Objetivo do Projeto](#-objetivo-do-projeto)
2. [Pré-requisitos](#-pré-requisitos)
3. [Clonando e Executando o Projeto](#-clonando-e-executando-o-projeto)
4. [Estrutura do Projeto](#-estrutura-do-projeto)
5. [Comandos Disponíveis](#-comandos-disponíveis)
6. [Executando os Testes](#-executando-os-testes)
7. [Conceitos de Testes Explicados](#-conceitos-de-testes-explicados)
8. [Cobertura de Código](#-cobertura-de-código)
9. [Troubleshooting](#-troubleshooting)
10. [Referências e Próximos Passos](#-referências-e-próximos-passos)

---

## 🎯 Objetivo do Projeto

Este repositório é um **projeto didático** para aprender testes automatizados no ecossistema **Next.js** com:

- ✅ Configuração do Jest integrado ao Next.js
- ✅ Testes de lógica (funções puras)
- ✅ Testes de componentes React
- ✅ Mock de funções e dependências
- ✅ Testes assíncronos
- ✅ Testes de API Route (App Router)
- ✅ Cobertura de código

A stack utilizada é equivalente ao **JUnit** no mundo Java: **Jest** + **React Testing Library** são o padrão moderno para testes em aplicações React/Next.js.

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

| Ferramenta | Versão Mínima | Como verificar |
|------------|---------------|----------------|
| **Node.js** | 20+ | `node -v` |
| **npm** | 10+ | `npm -v` |
| **Git** | Qualquer | `git --version` |

> 💡 **Dica:** Se não tiver Node.js, baixe em [nodejs.org](https://nodejs.org/).

---

## 🚀 Clonando e Executando o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd next-jest-tutorial
```

Substitua `<URL_DO_REPOSITORIO>` pela URL do repositório (ex: `https://github.com/seu-usuario/next-jest-tutorial.git`).

### 2️⃣ Instalar as dependências

```bash
npm install
```

Este comando baixa todas as dependências listadas no `package.json`, incluindo:

- **Next.js** — framework React
- **Jest** — runner de testes
- **React Testing Library** — testes de componentes
- **@testing-library/jest-dom** — matchers extras (ex: `toBeInTheDocument()`)
- **@testing-library/user-event** — simulação de interações do usuário

### 3️⃣ Rodar a aplicação (opcional)

```bash
npm run dev
```

Abra o navegador em **http://localhost:3000** para ver a aplicação em execução.

---

## 📁 Estrutura do Projeto

```
next-jest-tutorial/
├── jest.config.ts          # Configuração do Jest para Next.js
├── jest.setup.ts           # Setup global (ex: jest-dom)
├── package.json
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── hello/
│   │   │       ├── route.ts        # API Route
│   │   │       └── route.test.ts   # Teste da API
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Counter.tsx
│   │   ├── Counter.test.tsx
│   │   ├── Greeting.tsx
│   │   ├── Greeting.test.tsx
│   │   ├── User.tsx
│   │   └── User.test.tsx
│   ├── services/
│   │   ├── api.ts
│   │   └── api.test.ts
│   └── utils/
│       ├── math.ts
│       └── math.test.ts
└── README.md
```

**Convenção:** arquivos de teste ficam ao lado do código fonte com sufixo `.test.ts` ou `.test.tsx`.

---

## ⚙️ Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run start` | Inicia o servidor em modo produção |
| `npm test` | Executa todos os testes |
| `npm run test:watch` | Executa testes em modo watch (re-executa ao salvar) |
| `npm run test:coverage` | Executa testes e gera relatório de cobertura |
| `npm run lint` | Executa o linter |

---

## 🧪 Executando os Testes

### Rodar todos os testes

```bash
npm test
```

Saída esperada (exemplo):

```
 PASS  src/utils/math.test.ts
 PASS  src/components/Counter.test.tsx
 PASS  src/components/Greeting.test.tsx
 PASS  src/components/User.test.tsx
 PASS  src/services/api.test.ts
 PASS  src/app/api/hello/route.test.ts

Test Suites: 6 passed, 6 total
Tests:       9 passed, 9 total
```

### Rodar em modo watch (TDD)

```bash
npm run test:watch
```

Ideal para desenvolvimento: o Jest re-executa automaticamente quando você salva alterações nos arquivos.

### Rodar um arquivo específico

```bash
npm test -- src/utils/math.test.ts
```

### Rodar testes por nome

```bash
npm test -- -t "should sum two numbers"
```

### Gerar cobertura de código

```bash
npm run test:coverage
```

Gera relatório no terminal e HTML em `coverage/lcov-report/index.html`.

---

## 📚 Conceitos de Testes Explicados

### 1. Testes de Lógica (Funções Puras)

**Arquivo:** `src/utils/math.ts` e `src/utils/math.test.ts`

Funções puras são fáceis de testar: mesma entrada → mesma saída, sem efeitos colaterais.

**Conceitos usados:**

| Conceito | Exemplo | Descrição |
|----------|---------|-----------|
| `describe` | `describe('Math utils', () => {...})` | Agrupa testes relacionados |
| `it` | `it('should sum two numbers', () => {...})` | Define um caso de teste |
| `expect` | `expect(sum(2, 3)).toBe(5)` | Asserção (verificação) |
| `toBe` | `expect(x).toBe(5)` | Igualdade estrita (`===`) |
| `toThrow` | `expect(() => divide(10, 0)).toThrow(...)` | Verifica se uma função lança erro |

---

### 2. Testes de Componentes React

**Arquivo:** `src/components/Counter.tsx` e `src/components/Counter.test.tsx`

**Conceitos usados:**

| Conceito | Exemplo | Descrição |
|----------|---------|-----------|
| `render` | `render(<Counter />)` | Renderiza o componente em ambiente simulado |
| `screen` | `screen.getByText('Count: 0')` | Busca elementos na tela como um usuário faria |
| `getByRole` | `screen.getByRole('button', { name: /increment/i })` | Busca por papel de acessibilidade (boa prática) |
| `userEvent` | `await userEvent.click(button)` | Simula interação real do usuário |
| `toBeInTheDocument` | `expect(...).toBeInTheDocument()` | Matcher do jest-dom para verificar presença no DOM |

> 💡 **Boas práticas:** Prefira `getByRole` e `getByLabelText` para testes mais acessíveis e resilientes.

---

### 3. Testes de Props

**Arquivo:** `src/components/Greeting.tsx` e `src/components/Greeting.test.tsx`

Testa se o componente renderiza corretamente com diferentes props.

```tsx
render(<Greeting name="Carlos" />);
expect(screen.getByRole('heading', { name: 'Hello, Carlos!' })).toBeInTheDocument();
```

---

### 4. Mock de Funções e Testes Assíncronos

**Arquivo:** `src/components/User.tsx` e `src/components/User.test.tsx`

O componente `User` chama `fetchUser()` (API) no `useEffect`. Para não depender da API real, usamos **mock**.

**Conceitos usados:**

| Conceito | Exemplo | Descrição |
|----------|---------|-----------|
| `jest.mock` | `jest.mock('../services/api')` | Substitui o módulo inteiro por uma versão mockada |
| `jest.spyOn` | `jest.spyOn(api, 'fetchUser')` | Espiona e pode sobrescrever uma função específica |
| `mockResolvedValue` | `.mockResolvedValue({ name: 'João' })` | Define o valor retornado pela Promise |
| `waitFor` | `await waitFor(() => {...})` | Aguarda condição assíncrona ser satisfeita |

---

### 5. Testes de API Route

**Arquivo:** `src/app/api/hello/route.ts` e `src/app/api/hello/route.test.ts`

API Routes do Next.js rodam no **Node.js**, não no browser. Por isso usamos:

```ts
/**
 * @jest-environment node
 */
```

Isso garante que o Jest use o ambiente Node para esse arquivo, evitando erros como `Request is not defined`.

---

## 📊 Cobertura de Código

Execute:

```bash
npm run test:coverage
```

O relatório mostra:

| Métrica | Significado |
|---------|-------------|
| **% Stmts** | Porcentagem de statements executados |
| **% Branch** | Porcentagem de branches (if/else) testados |
| **% Funcs** | Porcentagem de funções chamadas |
| **% Lines** | Porcentagem de linhas executadas |

Um relatório HTML detalhado é gerado em:

```
coverage/lcov-report/index.html
```

Abra no navegador para ver linha a linha o que está coberto.

---

## 🔧 Troubleshooting

### Erro: `Request is not defined` em teste de route

**Causa:** O teste de API Route está rodando no ambiente jsdom (browser).

**Solução:** Adicione no topo do arquivo de teste:

```ts
/**
 * @jest-environment node
 */
```

---

### Erro: `toBeInTheDocument is not a function`

**Causa:** O `@testing-library/jest-dom` não está carregado.

**Solução:** Verifique se `jest.setup.ts` contém:

```ts
import '@testing-library/jest-dom';
```

E se `jest.config.ts` referencia o setup:

```ts
setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
```

---

### Jest não encontra os testes

**Causa:** Padrão de nome incorreto.

**Solução:** Use `*.test.ts` ou `*.test.tsx` para os arquivos de teste.

---

### Testes instáveis ou falhas intermitentes

**Solução:** Execute em série:

```bash
npm test -- --runInBand
```

---

## 📖 Referências e Próximos Passos

- [Jest — Documentação oficial](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library — Guia de queries](https://testing-library.com/docs/queries/about)
- [Next.js — Testing](https://nextjs.org/docs/app/building-your-application/testing/jest)

### Fluxo recomendado no dia a dia

1. Implemente a funcionalidade
2. Rode `npm test`
3. Rode `npm run test:coverage`
4. Para iteração rápida, use `npm run test:watch`

---

## 🏆 Resumo dos Conceitos Aprendidos

| Conceito | Onde é usado |
|----------|--------------|
| Testes unitários | `math.test.ts` |
| Testes de componentes | `Counter.test.tsx`, `Greeting.test.tsx` |
| Testes assíncronos | `User.test.tsx` |
| Mock de dependências | `User.test.tsx` |
| Testes de API | `route.test.ts` |
| Cobertura de código | `npm run test:coverage` |
| Simulação de interação | `userEvent` em `Counter.test.tsx` |
| Boas práticas (getByRole) | `Counter.test.tsx`, `Greeting.test.tsx` |

---

**Bons testes! 🚀**
