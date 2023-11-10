import * as SQLite from 'expo-sqlite'

export function logSQLStatementError(message: string, error: SQLite.SQLError) {
  console.error(message, error)

  return false
}

export function logSQLTransactionError(message: string, error: SQLite.SQLError) {
  console.error(message, error)
}

export function logSQLSuccess(message: string) {
  console.log(message)
}
