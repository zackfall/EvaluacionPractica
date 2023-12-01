/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Tournament } from './types'

export class TournamentList {
  private static instance: TournamentList
  private readonly tournament: Tournament[] = []

  private constructor() { }

  public static getInstance(): TournamentList {
    if (TournamentList.instance === undefined) {
      TournamentList.instance = new TournamentList()
    }
    return TournamentList.instance
  }

  public addTournament(tournament: Tournament): void {
    this.tournament.push(tournament)
  }

  public getTournaments(): Tournament[] {
    return this.tournament
  }
}
