// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link className="remove-underline" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img className="team-flag-image" alt={name} src={teamImageUrl} />
        <p className="team-name-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
