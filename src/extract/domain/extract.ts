export interface Amount {
    total: number
    data_extrato: string
    limite: number
}

export interface lastTransactions {
    valor: number,
    tipo: string,
    descricao: string
    realizada_em: string
}

export interface Extract {
    saldo: Amount
    ultimas_transacoes: lastTransactions[]
}