import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Drop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  render() {
    return (
      <Dropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="white" caret >
        <p><i></i>Totally optimized search-to-resolution journeys to speed<br/> up your operations</p>
        </DropdownToggle>
        <DropdownMenu>
          <div onClick={this.toggle}><p className='temp'>Users can go from search to resolution within 2 clicks! Optimize the way people search for information by giving them contextually-correct resolutions, within seconds, in the first try itself.</p></div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}