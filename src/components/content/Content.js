import React, { Component } from 'react'
import './Content.css'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'ac',
      data: {
        name: "Aquatic Ecophysiology",
        authors: [
          {
            name: "Timothy D. Clark"
          },
          {
            name: "Fernando Mateos-González"
          }
        ]

      }
    }
    this.toggleButton = this.toggleButton.bind(this)
  }


  componentDidMount() {
    // this.getContent()
  }

  getContent() {
    const endpoint = `https://assessment.scitodate.com/api/segment/${this.state.type}`;

    fetch(endpoint, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      mode: 'cors',

    })
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
        type: 'ess'
      }, this.getContent)
    } else {
      this.setState({
        type: 'ac'
      }, this.getContent)
    }

  }

  render() {
    return (
      <div className='content'>
        <div className='content-title'>Market Feed</div>
        <div className='content-main'>
          <div className='content-options'>
            <div className='content-option--ac' onClick={this.toggleButton}> ac </div>
            <div className='content-option'> |</div>
            <div className='content-option--ees' onClick={this.toggleButton}>ees</div>
          </div>
          <div className='content-table'>
            <div className='content-table-titles'>
              <div className='content-table--name'>Name</div>
              <div className='content-table--authors'>Authors</div>
            </div>
            <div className='content-table-content'>

              <div className='content-main'>
                {/*
                Object.keys(this.state.data).map(data => {
                  return (
                    <div className='data-input' key={data.name}>{data.name}</div>
                  )
                })
              */}
                <div>{this.state.data.name}</div>
              </div>
              <div className='content-main2'>
                {
                  this.state.data.authors.map(author => {
                    return (<div>{author.name}</div>)
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
