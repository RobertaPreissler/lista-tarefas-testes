# Lista de Tarefas com Next.js 15

## Descrição

Aplicação de listagem e adição de tarefas desenvolvida com Next.js 15, React e TypeScript. O projeto utiliza testes unitários para verificar o funcionamento dos componentes e do hook personalizado.

## Aplicação publicada

A aplicação está disponível online pela Vercel:

**[Acessar Lista de Tarefas](https://lista-tarefas-testes-jabw56gc4-roberta21.vercel.app/)**

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
- ESLint
- Git e GitHub
- GitHub Actions
- Vercel

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
.github/
  workflows/
    main.yml
```

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/RobertaPreissler/lista-tarefas-testes.git
```

Entre na pasta do projeto:

```bash
cd lista-tarefas-testes
```

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

Execute a verificação de código:

```bash
npm run lint
```

Gere o build de produção:

```bash
npm run build
```

## Testes implementados

- Contagem de tarefas.
- Contador com lista vazia.
- Adição de uma tarefa.
- Limpeza do campo após adicionar.
- Exibição das tarefas iniciais.
- Exibição da quantidade de tarefas.

## Resultados dos testes

Os testes automatizados foram executados com Jest e Testing Library.

- **Suítes de testes aprovadas:** 3
- **Testes aprovados:** 6
- **Testes com falha:** 0

### Cobertura de código

Os arquivos `NovaTarefa.tsx` e `useContadorDeTarefas.ts` alcançaram 100% nas métricas de instruções, condições, funções e linhas, conforme o relatório de cobertura gerado pelo Jest.

## Integração contínua (CI)

O projeto utiliza GitHub Actions para automatizar a validação do código.

O workflow está configurado para executar quando houver um `push` para a branch `main` ou um Pull Request direcionado a ela.

As etapas automatizadas são:

1. Baixar o código do repositório.
2. Configurar o Node.js.
3. Instalar as dependências com `npm ci`.
4. Executar o ESLint.
5. Executar os testes automatizados com Jest.
6. Gerar o build de produção com Next.js.

## Implantação contínua (CD)

A aplicação está hospedada na Vercel e conectada ao repositório GitHub.

O projeto pode ser atualizado por meio de novos commits enviados à branch `main`, que podem iniciar novas implantações na Vercel.

**Repositório:** https://github.com/RobertaPreissler/lista-tarefas-testes

**Aplicação publicada:** https://lista-tarefas-testes-jabw56gc4-roberta21.vercel.app/

## Autora

Projeto desenvolvido por Roberta Preissler como atividade prática de testes automatizados, integração contínua e implantação de uma aplicação Next.js 15.
