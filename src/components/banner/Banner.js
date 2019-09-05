import React, { Component } from 'react'
import './Banner.css'
import logo from '../utils/scitodate.png'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <img className='logo-icon' src={logo} width="160" height="50" alt="paper" />
        <div className='banner-title'>Market Feed</div>
      </div>
    )
  }
}
