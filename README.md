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
7. [Guia Detalhado: O Que Cada Teste Faz](#-guia-detalhado-o-que-cada-teste-faz)
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

---

## 📦 Pré-requisitos

| Ferramenta | Versão Mínima | Como verificar |
|------------|---------------|----------------|
| **Node.js** | 20+ | `node -v` |
| **npm** | 10+ | `npm -v` |
| **Git** | Qualquer | `git --version` |

---

## 🚀 Clonando e Executando o Projeto

```bash
git clone <URL_DO_REPOSITORIO>
cd next-jest-tutorial
npm install
npm run dev   # opcional — abre http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
src/
├── utils/
│   ├── math.ts           # Funções puras (soma, divisão)
│   └── math.test.ts      # Testes das funções
├── components/
│   ├── Counter.tsx       # Contador com botão
│   ├── Counter.test.tsx
│   ├── Greeting.tsx      # Saudação com props
│   ├── Greeting.test.tsx
│   ├── User.tsx          # Busca usuário (assíncrono)
│   └── User.test.tsx
├── services/
│   ├── api.ts            # Serviço que simula API
│   └── api.test.ts
└── app/api/hello/
    ├── route.ts          # API Route GET
    └── route.test.ts
```

---

## ⚙️ Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm test` | Executa todos os testes |
| `npm run test:watch` | Modo watch — re-executa ao salvar |
| `npm run test:coverage` | Testes + relatório de cobertura |
| `npm run dev` | Servidor de desenvolvimento |

---

## 🧪 Executando os Testes

```bash
npm test
```

---

## 📖 Guia Detalhado: O Que Cada Teste Faz

Esta seção explica **cada teste** do projeto: qual arquivo usa, o que testa e como testa.

---

### 1️⃣ Testes de `math` — Funções Puras

| | |
|---|---|
| **Arquivo de código** | `src/utils/math.ts` |
| **Arquivo de teste** | `src/utils/math.test.ts` |
| **O que testa** | Funções `sum` e `divide` |

#### Código testado (`math.ts`)

```ts
export function sum(a: number, b: number): number {
  return a + b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

#### Teste 1: `should sum two numbers`

| Campo | Descrição |
|-------|-----------|
| **O que faz** | Verifica se a função `sum` retorna a soma correta |
| **Como testa** | Chama `sum(2, 3)` e verifica se o resultado é `5` |
| **Ferramenta** | `expect(valor).toBe(esperado)` — igualdade estrita |

```ts
expect(sum(2, 3)).toBe(5);
```

---

#### Teste 2: `should divide two numbers`

| Campo | Descrição |
|-------|-----------|
| **O que faz** | Verifica se a função `divide` retorna a divisão correta |
| **Como testa** | Chama `divide(10, 2)` e verifica se o resultado é `5` |

```ts
expect(divide(10, 2)).toBe(5);
```

---

#### Teste 3: `should throw error when dividing by zero`

| Campo | Descrição |
|-------|-----------|
| **O que faz** | Verifica se `divide` lança erro ao dividir por zero |
| **Como testa** | Chama `divide(10, 0)` dentro de uma função e verifica se ela lança `"Cannot divide by zero"` |
| **Por que a função?** | `expect(() => divide(10, 0)).toThrow(...)` — o Jest precisa executar a chamada para capturar o erro; se chamasse direto, o erro interromperia o teste |

```ts
expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
```

---

### 2️⃣ Testes do `Counter` — Componente com Estado e Interação

| | |
|---|---|
| **Arquivo de código** | `src/components/Counter.tsx` |
| **Arquivo de teste** | `src/components/Counter.test.tsx` |
| **O que testa** | Contador que inicia em 0 e incrementa ao clicar no botão |

#### Código testado (`Counter.tsx`)

```tsx
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

#### Teste 1: `should render initial value`

| Campo | Descrição |
|-------|-----------|
| **O que faz** | Verifica se o contador começa em 0 |
| **Como testa** | 1. `render(<Counter />)` — renderiza o componente em um DOM virtual<br>2. `screen.getByText("Count: 0")` — busca o texto na tela<br>3. `expect(...).toBeInTheDocument()` — verifica se o elemento existe |
| **Ferramentas** | `render`, `screen`, `getByText`, `toBeInTheDocument` |

```tsx
render(<Counter />);
expect(screen.getByText("Count: 0")).toBeInTheDocument();
```

---

#### Teste 2: `should increment when button is clicked`

| Campo | Descrição |
|-------|-----------|
| **O que faz** | Verifica se o contador aumenta ao clicar no botão |
| **Como testa** | 1. Renderiza o componente<br>2. Encontra o botão por `getByRole("button", { name: /increment/i })` — busca por papel (button) e texto (Increment)<br>3. Simula cliente com `userEvent.click(button)`<br>4. Verifica se o texto mudou para "Count: 1" |
| **Por que `getByRole`?** | Boa prática de acessibilidade — o usuário encontra o botão pelo texto visível |
| **Por que `async`?** | `userEvent.click` retorna uma Promise |

```tsx
render(<Counter />);
const button = screen.getByRole("button", { name: /increment/i });
await userEvent.click(button);
expect(screen.getByText("Count: 1")).toBeInTheDocument();
```

---

### 3️⃣ Testes do `Greeting` — Componente com Props

| | |
|---|---|
| **Arquivo de código** | `src/components/Greeting.tsx` |
| **Arquivo de teste** | `src/components/Greeting.test.tsx` |
| **O que testa** | Se o componente exibe corretamente o nome recebido por props |

#### Código testado (`Greeting.tsx`)

```tsx
export default function Greeting({ name }: Props) {
  return <h1>Hello, {name}!</h1>;
}
```

#### Teste: `should render name correctly`

| Campo | Descrição |
|-------|-----------|
| **O que faz** | Verifica se o nome passado por props aparece na tela |
| **Como testa** | 1. `render(<Greeting name="Carlos" />)` — renderiza com prop `name`<br>2. `getByRole("heading", { name: "Hello, Carlos!" })` — busca o `<h1>` pelo texto completo<br>3. Verifica se está no documento |
| **Por que `getByRole("heading")`?** | O elemento é um título (`<h1>`); buscar por role garante que a estrutura semântica está correta |

```tsx
render(<Greeting name="Carlos" />);
expect(
  screen.getByRole("heading", { name: "Hello, Carlos!" })
).toBeInTheDocument();
```

---

### 4️⃣ Testes do `User` — Componente Assíncrono com Mock

| | |
|---|---|
| **Arquivo de código** | `src/components/User.tsx` |
| **Arquivo de teste** | `src/components/User.test.tsx` |
| **Dependência** | `src/services/api.ts` (função `fetchUser`) |
| **O que testa** | Se o componente exibe o nome do usuário após a "API" retornar |

#### Código testado (`User.tsx`)

```tsx
export default function User() {
  const [name, setName] = useState("");
  useEffect(() => {
    fetchUser().then((data) => setName(data.name));
  }, []);
  return <p>{name ? `User: ${name}` : "Loading..."}</p>;
}
```

O componente chama `fetchUser()` ao montar e exibe "Loading..." até a resposta chegar.

#### Teste: `should show user name after fetch`

| Campo | Descrição |
|-------|-----------|
| **O que faz** | Verifica se o nome do usuário aparece após o fetch |
| **Problema** | O teste não pode depender da API real (lenta, instável, pode falhar) |
| **Solução** | **Mock** — substituir `fetchUser` por uma versão falsa que retorna dados controlados |

**Como testa (passo a passo):**

1. **`jest.mock("../services/api")`** — substitui todo o módulo `api` por um mock
2. **`jest.spyOn(api, "fetchUser").mockResolvedValue({ name: "Joao" })`** — faz `fetchUser` retornar `{ name: "Joao" }` em vez de chamar a API real
3. **`render(<User />)`** — o componente chama `fetchUser` no `useEffect`
4. **`waitFor(() => expect(screen.getByText("User: Joao")).toBeInTheDocument())`** — aguarda o estado assíncrono atualizar e o texto aparecer

```tsx
jest.mock("../services/api");

jest.spyOn(api, "fetchUser").mockResolvedValue({ name: "Joao" });
render(<User />);

await waitFor(() => {
  expect(screen.getByText("User: Joao")).toBeInTheDocument();
});
```

| Ferramenta | Função |
|------------|--------|
| `jest.mock` | Substitui o módulo inteiro |
| `jest.spyOn` | Espiona e sobrescreve uma função específica |
| `mockResolvedValue` | Define o valor que a Promise retorna |
| `waitFor` | Aguarda uma condição assíncrona (re-tenta até passar ou timeout) |

---

### 5️⃣ Testes do `api` — Serviço (Função Assíncrona)

| | |
|---|---|
| **Arquivo de código** | `src/services/api.ts` |
| **Arquivo de teste** | `src/services/api.test.ts` |
| **O que testa** | Se a função `fetchUser` retorna o objeto esperado |

#### Código testado (`api.ts`)

```ts
export async function fetchUser() {
  return { name: "Maria" };
}
```

#### Teste: `should return the default user`

| Campo | Descrição |
|-------|-----------|
| **O que faz** | Verifica se `fetchUser` retorna `{ name: "Maria" }` |
| **Como testa** | `expect(fetchUser()).resolves.toEqual({ name: "Maria" })` — para funções assíncronas, usa `.resolves` para aguardar a Promise e comparar o resultado |

```ts
await expect(fetchUser()).resolves.toEqual({ name: "Maria" });
```

---

### 6️⃣ Testes da API Route `hello`

| | |
|---|---|
| **Arquivo de código** | `src/app/api/hello/route.ts` |
| **Arquivo de teste** | `src/app/api/hello/route.test.ts` |
| **O que testa** | Se a rota GET retorna `{ message: "Hello World" }` |

#### Código testado (`route.ts`)

```ts
export async function GET() {
  return NextResponse.json({ message: "Hello World" });
}
```

#### Teste: `should return hello world message`

| Campo | Descrição |
|-------|-----------|
| **O que faz** | Verifica se a resposta da API contém a mensagem correta |
| **Como testa** | 1. Chama `GET()` diretamente (não precisa de servidor HTTP)<br>2. Converte a resposta em JSON com `response.json()`<br>3. Verifica se `data` é igual a `{ message: "Hello World" }` |
| **`@jest-environment node`** | Comentário no topo do arquivo — API Routes rodam no Node.js, não no browser. Sem isso, o Jest usaria jsdom e poderia dar erro (`Request is not defined`). |

```ts
/**
 * @jest-environment node
 */
const response = await GET();
const data = await response.json();
expect(data).toEqual({ message: "Hello World" });
```

---

## 📊 Cobertura de Código

```bash
npm run test:coverage
```

| Métrica | Significado |
|---------|-------------|
| **% Stmts** | Statements executados |
| **% Branch** | Branches (if/else) testados |
| **% Funcs** | Funções chamadas |
| **% Lines** | Linhas executadas |

Relatório HTML: `coverage/lcov-report/index.html`

---

## 🔧 Troubleshooting

| Erro | Solução |
|------|---------|
| `Request is not defined` em teste de route | Adicione `/** @jest-environment node */` no topo do arquivo |
| `toBeInTheDocument is not a function` | Verifique se `jest.setup.ts` importa `@testing-library/jest-dom` |
| Jest não encontra testes | Use `*.test.ts` ou `*.test.tsx` |
| Testes instáveis | Execute `npm test -- --runInBand` |

---

## 📖 Referências

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Next.js — Testing](https://nextjs.org/docs/app/building-your-application/testing/jest)

---

## 🏆 Resumo: O Que Cada Arquivo Testa

| Arquivo de teste | Código testado | O que verifica |
|------------------|----------------|----------------|
| `math.test.ts` | `math.ts` | `sum` e `divide` (incluindo erro de divisão por zero) |
| `Counter.test.tsx` | `Counter.tsx` | Valor inicial e incremento ao clicar |
| `Greeting.test.tsx` | `Greeting.tsx` | Renderização do nome via props |
| `User.test.tsx` | `User.tsx` | Exibição do nome após fetch (com mock) |
| `api.test.ts` | `api.ts` | Retorno de `fetchUser` |
| `route.test.ts` | `route.ts` | Resposta JSON da API Route GET |

---

**Bons testes! 🚀**
