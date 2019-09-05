import React, { Component } from 'react'
import './Content.css'
import { getData } from '../utils/api'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'ees',
      data: {},
      name: ''
    }
    // this.toggleButton = this.toggleButton.bind(this)
    // this.getContent = this.getContent.bind(this)
  }

componentDidMount(){
  
    getData('ees')
    
     .then(result => {
        this.setState({
          name: result.data.name
        })
      })


}


  // getContent() {
  //   const endpoint = `https://assessment.scitodate.com/api/segment/ees`;

  //   fetch(endpoint)
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({
         
  //         name: result.data.name
  //       })
  //     }
  //     )
  //     .catch(err => console.log(err))
  // }


  toggleButton(e) {
    e.preventDefault();
    if (this.state.type === 'ac') {
      this.setState({
        type: 'ees'
      }, getData('ees')
        .then(result => {
        this.setState({
          name: result.data.name
        })
      }))
    } else {
      this.setState({
        type: 'ac'
      },  getData('ac')
    
     .then(result => {
        this.setState({
          name: result.data.name
        })
      }))
    }

  }

  render() {
    return (
      <div className='content'>
      <div>Latest Papers - June 2019</div>
    
      <div>{this.state.name}</div>
      

    {/*<div className='content-title'>Market Feed</div>
    <div className='content-layout'>
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
        { /* <div>{this.state.data.name}</div>
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
  </div>*/}
      </div>
    )
  }
}
