// Write your code here

import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = details

  return (
    <div className="latest-match-card">
      <div className="team-details">
        <p className="team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>

      <div className="image-container">
        <img
          className="team-image"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>

      <div className="match-details-container">
        <p className="match-details-heading">First Innings</p>
        <p className="match-details-description">{firstInnings}</p>

        <p className="match-details-heading">Second Innings</p>
        <p className="match-details-description">{secondInnings}</p>

        <p className="match-details-heading">Man of The Match</p>
        <p className="match-details-description">{manOfTheMatch}</p>

        <p className="match-details-heading">Umpires</p>
        <p className="match-details-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
