import React, { Component } from 'react'
import './Content.css'
import paperIcon from '../utils/paper.svg'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'ees',
      isEES: true,
      data: {},
      name: '',
    }
    this.toggleButton = this.toggleButton.bind(this)
    this.getContent = this.getContent.bind(this)
  }

  componentDidMount(){
        this.getContent()
  }

  getContent() {
    const endpoint = `https://assessment.scitodate.com/api/segment/${this.state.type}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(result => {
        this.setState({
          data: result.data
        })
      })
      .catch(err => console.log(err))
  }


  toggleButton(e) {
    e.preventDefault();
    if (this.state.type === 'ac') {
      this.setState({
        type: 'ees',
        isEES: true
      }, this.getContent)
    } else {
      this.setState({
        type: 'ac',
        isEES: false
      }, this.getContent)
    }
  }

  render() {
    
    return (
      <div className='content'>
        <div className='content-title'>June 2019</div>
          <div className='content-layout'>
            <div className='content-side'>
              <div className='content-side--title'>Segments</div>
              <div className='content-options'>
                <div className= {`content-option ${this.state.isEES? 'false ' : 'true'}`}>
                  <div className= 'content-option--ac' onClick={this.toggleButton}> Aquatic Ecophysiology </div>
                </div>
                <div className= {`content-option ${this.state.isEES? 'true ' : 'false'}`}>
                  <div className= 'content-option--ees' onClick={this.toggleButton}>EPMA Environmental Sciences</div>
                </div>
              </div>
            </div>
            <div className='content-main'>
            {
              !this.state.data.authors &&
                <div>Loading <span role="img" aria-label="Hourglass">⏳</span>...</div>
            }
            {
               this.state.data.authors &&
                this.state.data.authors.map(author => {
                  return (
                    <div className='content-list--items-item' key={author.name}>
                      <div className='content-list--items--title'>
                        <div className='content-list--items-name'>{author.name}</div>
                        <div className='content-list--items-score'>score: {author.score}</div>
                      </div>
                      <div className='content-list--items-un'>{author.latestInstitution}</div>
                      <div className='content-list--items-paper'>{author.papers.map(paper => {
                        return (paper.matched && 
                        <div key={paper.id} className='paper-details'>
                            <div className='paper-title'>{paper.title}</div>
                          <div className='paper-content'>
                            <div className='paper-date'>Publication date: {paper.date}</div>
                            <a target="_blank" rel="noopener noreferrer" href={paper.link}>
                              <img className='paper-icon' src={paperIcon} width="30" height="30" alt="paper" />
                            </a>
                          </div>
                        </div>
                        )
                      })} 
                      </div>
                    </div>
                  )
                })
            }
            </div>
          </div>
      </div>
    )
  }
}
