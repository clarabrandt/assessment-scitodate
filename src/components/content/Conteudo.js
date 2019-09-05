import React, { Component } from 'react'
import './Content.css'
import { getData } from '../utils/api'
import paperIcon from '../utils/paper.svg'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'ees',
      data: {},
      name: ''
    }
    this.toggleButton = this.toggleButton.bind(this)
    this.getContent = this.getContent.bind(this)
    this.publications = this.publications.bind(this)
  }

componentDidMount(){
  
    this.getContent()
    this.publications()


}


   getContent() {
    const endpoint = `https://assessment.scitodate.com/api/segment/${this.state.type}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.data
        })
      })
      .catch(err => console.log(err))
  }


  toggleButton(e) {
    e.preventDefault();
    if (this.state.type === 'ac') {
      this.setState({
        type: 'ees'
      }, this.getContent)
    } else {
      this.setState({
        type: 'ac'
      }, this.getContent)
    }
  }

  publications(){
    this.state.data.authors &&
    this.state.data.authors.map(author => {
    
      return (
        console.log(author.name)
      )
      
    })
  }

  render() {
    
    return (
      <div className='content'>
        <div className='content-title'>Papers pulished on June 2019</div>
          <div className='content-layout'>
            <div className='content-side'>
              <div className='content-side--title'>Segments</div>
              <div className='content-options'>
                <div className='content-option--ac' onClick={this.toggleButton}> Aquatic Ecophysiology </div>
                <div className='content-option--ees' onClick={this.toggleButton}>EPMA Environmental Sciences</div>
              </div>
            </div>
            <div className='content-main'>
          
            {
              !this.state.data.authors &&
                <div>Loading ⏳...</div>
            }
            {
               this.state.data.authors &&
                this.state.data.authors.map(author => {
                  return (
                    <div className='content-list--items-item' key={author.name}>
                    <div className='content-list--items-name'>{author.name}</div>
                    <div className='content-list--items-un'>{author.latestInstitution}</div>
                      <div className='content-list--items-paper'>{author.papers.map(paper => {
                        return (paper.matched && 
                        <div key={paper.id} className='paper-details'>
                        <div className='paper-title'>{paper.title}</div>
                        <div className='paper-date'>Publication date: {paper.date}</div>
                        <div>{paper.link}</div>
                        <img className='paper-icon' src={paperIcon} width="28" height="28" alt="paper" />
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
