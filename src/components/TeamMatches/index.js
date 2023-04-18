// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
/* eslint-disable react/no-unknown-property */

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  updatedLatestMatchDetails = ltMatchDetails => ({
    umpires: ltMatchDetails.umpires,
    result: ltMatchDetails.result,
    manOfTheMatch: ltMatchDetails.man_of_the_match,
    id: ltMatchDetails.id,
    date: ltMatchDetails.date,
    venue: ltMatchDetails.venue,
    competingTeam: ltMatchDetails.competing_team,
    competingTeamLogo: ltMatchDetails.competing_team_logo,
    firstInnings: ltMatchDetails.first_innings,
    secondInnings: ltMatchDetails.second_innings,
    matchStatus: ltMatchDetails.match_status,
  })

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(`${url}/${id}`)
    const data = await response.json()
    this.setState({
      latestMatchDetails: this.updatedLatestMatchDetails(
        data.latest_match_details,
      ),
      recentMatches: data.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        id: eachMatch.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
      teamBannerUrl: data.team_banner_url,
      isLoading: false,
    })
  }

  renderRecentMatches = () => {
    const {recentMatches} = this.state

    return (
      <ul className="recent-matches-list-container">
        {recentMatches.map(eachMatch => (
          <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderMatches = () => {
    const {latestMatchDetails, teamBannerUrl} = this.state

    return (
      <>
        <div>
          <img className="team-banner" alt="team banner" src={teamBannerUrl} />
        </div>
        <h1 className="team-matches-heading">Team Matches</h1>
        <LatestMatch details={latestMatchDetails} />
        {this.renderRecentMatches()}
      </>
    )
  }

  getBackgroundColour = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    const className = `team-matches-page-bg ${this.getBackgroundColour()}`

    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderMatches()}
      </div>
    )
  }
}

export default TeamMatches
