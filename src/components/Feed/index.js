import React, { Component } from 'react'

class Feed extends Component {
  render () {
    return (
      <div key={this.props.id}>
        <h3>{this.props.username}</h3>
        <p>
          {this.props.curtidas} curtida{this.props.curtidas > 1 ? 's' : ''}
        </p>
        <p>
          {this.props.comentarios} comentário{this.props.comentarios === 0 || this.props.comentarios > 1 ? 's' : ''}
        </p>  
        <hr />
      </div>
    )
  }
}

export default Feed