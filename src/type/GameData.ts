
export interface GameData {
    gameState: string
    username: string
    players: string[]
    guesses: { [index: string]: string[] }
}