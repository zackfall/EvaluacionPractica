import { TournamentList } from './tournamentList'
import { Tournament } from './types'

const tournamentList1 = TournamentList.getInstance()
const tournamentList2 = TournamentList.getInstance()
const tournamentList3 = TournamentList.getInstance()
const tournamentList4 = TournamentList.getInstance()

const FIBA: Tournament = {
  name: 'FIBA Basketball World Cup',
  type: 'Basketball'
}
const champions: Tournament = {
  name: 'UEFA Champions League',
  type: 'Soccer'
}
const premier: Tournament = {
  name: 'Premier League',
  type: 'Soccer'
}

tournamentList1.addTournament(FIBA)
tournamentList1.addTournament(champions)
tournamentList1.addTournament(premier)

console.log('============ Prueba 1 ============\n', tournamentList1.getTournaments())
console.log('============ Prueba 2 ============\n', tournamentList2.getTournaments())
console.log('============ Prueba 3 ============\n', tournamentList3.getTournaments())
console.log('============ Prueba 4 ============\n', tournamentList4.getTournaments())
