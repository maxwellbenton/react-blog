import { Menu } from 'semantic-ui-react'
import React, { Component } from 'react';

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'main' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item name='Rockland Instant Copy' active={activeItem === 'main'} onClick={this.handleItemClick} />
        <Menu.Item name='Services' active={activeItem === 'services'} onClick={this.handleItemClick} />
        <Menu.Item name='Contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
        <Menu.Item name='About' active={activeItem === 'about'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}