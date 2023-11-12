# Lista de Tarefas com Redux Toolkit e SQLite

Este é um aplicativo de estudo sobre Redux Toolkit e SQLite com React Native.

## Sobre o Projeto

Este projeto é um simples aplicativo de lista de tarefas construído com React Native.
Ele usa Redux Toolkit para gerenciamento de estado e SQLite para persistência de dados.
O principal objetivo deste projeto é entender como o Redux Toolkit e o SQLite funcionam em um ambiente React Native.

## Tecnologias Utilizadas

- React Native: Uma estrutura para construir aplicativos nativos usando React.
- Redux Toolkit: O conjunto de ferramentas oficial para desenvolvimento eficiente com Redux.
- SQLite: Uma biblioteca C que fornece um banco de dados leve baseado em disco.

## Começando

1. Clone o repositório: `git clone git@github.com:mchjohn/redux-sqlite-todo.git`
2. Instale as dependências: `npm install`
3. Execute o aplicativo: `npm start`

## Recursos

- Adicionar uma nova tarefa
- Marcar uma tarefa como concluída
- Excluir uma tarefa

## Branches

O projeto é dividido em 3 branches, cada uma com uma configuração específica:

- `master`: Esta branch contém a versão base do aplicativo. O gerenciamento de estado é feito usando Redux, mas não há persistência de dados implementada.

- `expo-sqlite`: Esta branch utiliza o SQLite para a persistência de dados. E Context API para o gerenciamento de estado.

- `sqlite-redux`: Esta branch utiliza o SQLite para a persistência de dados e o Redux para gerenciamento de estado.
