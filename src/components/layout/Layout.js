import React, { Component } from 'react'
import './Layout.css'
import Banner from '../banner/Banner'
// import Content from '../content/Content'
import Conteudo from '../content/Conteudo'



export default class Layout extends Component {
  render() {
    return (
      <div>
        <Banner />
 {     /*<Content />*/}
        <Conteudo />
      </div>
    )
  }
}
