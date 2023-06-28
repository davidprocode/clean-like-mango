export interface AccountModel {
    id?: string
    email: string
    password: string
}

export class Account {
    static save(account: AccountModel) {
        return true
    }
}