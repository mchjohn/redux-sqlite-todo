import * as SQLite from 'expo-sqlite'
import { Platform } from 'react-native'

import { ITodo } from '../interfaces/todo'

function openDatabase() {
  if (Platform.OS === 'web') {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        }
      },
    }
  }

  const db = SQLite.openDatabase('todo.db')

  console.info('Db opened successfully 🚀')

  return db
}

const db = openDatabase()

function init() {
  const promise = new Promise<void>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY NOT NULL, name TEXT, isDone INTEGER);',
        [],
        () => resolve(),
        (_, error) => {
          reject(error)
          return false
        },
      )
    })
  })

  return promise
}

function createTodo(name: string) {
  const promise = new Promise<ITodo[]> ((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO todos (name, isDone) VALUES (?, ?);',
        [name, 0],
        null,
        (_, error) => {
          reject(error)
          return false
        },
      ),
      tx.executeSql(
        'SELECT * FROM todos;',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          reject(error)
          return false
        },
      )
    })
  })

  return promise
}

function readTodos() {
  const promise = new Promise<ITodo[]> ((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM todos;',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          reject(error)
          return false
        },
      )
    })
  })

  return promise
}

function updateTodo(todo: ITodo) {
  const promise = new Promise<ITodo[]> ((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE todos SET isDone = ? WHERE id = ?;',
        [todo.isDone > 0 ? 0 : 1, todo.id],
        null,
        (_, error) => {
          reject(error)
          return false
        },
      ),
      tx.executeSql(
        'SELECT * FROM todos;',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          reject(error)
          return false
        },
      )
    })
  })

  return promise
}

function deleteTodo(id: string) {
  const promise = new Promise<ITodo[]> ((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM todos WHERE id = ?;',
        [id],
        null,
        (_, error) => {
          reject(error)
          return false
        },
      ),
      tx.executeSql(
        'SELECT * FROM todos;',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          reject(error)
          return false
        },
      )
    })
  })

  return promise
}

export { init, createTodo, readTodos, updateTodo, deleteTodo }
