export interface RepositoryClient {
    getConnection<T>(): Promise<T>
}