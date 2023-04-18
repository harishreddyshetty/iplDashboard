// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  const matchStatusColor =
    matchStatus === 'Won' ? 'match-status-green' : 'match-status-red'

  return (
    <li className="team-card-bg">
      <img
        className="team-image-flag"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="team-card-team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={matchStatusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
