# Lista de Tarefas com Next.js 15

## Descrição

Aplicação de listagem e adição de tarefas desenvolvida com Next.js 15, React e TypeScript. O projeto utiliza testes unitários para verificar o funcionamento dos componentes e do hook personalizado.

## Funcionalidades

- Exibir uma lista inicial de tarefas simulando uma API.
- Adicionar novas tarefas.
- Atualizar automaticamente a quantidade de tarefas.
- Impedir o envio de tarefas vazias.
- Testar componentes e hook personalizado.

## Tecnologias utilizadas

- Next.js 15
- React
- TypeScript
- Jest
- Testing Library
- Node.js

## Estrutura principal

```text
src/
  app/
    page.tsx
  components/
    ListaTarefas.tsx
    NovaTarefa.tsx
  data/
    tarefas.ts
  hooks/
    useContadorDeTarefas.ts
tests/
  ListaTarefas.test.tsx
  NovaTarefa.test.tsx
  useContadorDeTarefas.test.tsx
```

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

Acesse http://localhost:3000 no navegador. Se o terminal indicar outra porta, utilize a porta exibida.

## Como executar os testes

Execute todos os testes:

```bash
npm test
```

Execute os testes com relatório de cobertura:

```bash
npm run test:coverage
```

## Testes implementados

- Contagem de tarefas.
- Contador com lista vazia.
- Adição de uma tarefa.
- Limpeza do campo após adicionar.
- Exibição das tarefas iniciais.
- Exibição da quantidade de tarefas.

## Autora

Projeto desenvolvido como atividade prática de testes unitários com Next.js 15.

## Resultados dos testes

Os testes automatizados foram executados com Jest e Testing Library.

- **Suítes de testes aprovadas:** 3
- **Testes aprovados:** 6
- **Testes com falha:** 0

### Cobertura de código

Os arquivos `NovaTarefa.tsx` e `useContadorDeTarefas.ts` alcançaram 100% nas métricas de instruções, condições, funções e linhas, conforme o relatório de cobertura gerado pelo Jest.

Para executar os testes:

```bash
npm test
```

Para gerar o relatório de cobertura:

```bash
npm run test:coverage
```
