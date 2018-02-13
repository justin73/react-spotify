import React from 'react';
import './dropdown.scss';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const Dropdown = (props) => {
  const {dropdownOpen, toggle, defaultTxt, select} = props
  const selectMarket = (evt) => {
    select(evt)
  }
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="btn-primary">
    <DropdownToggle caret className="btn-primary">
      {defaultTxt}
    </DropdownToggle>
    <DropdownMenu>
      {/* TODO: get available markets from spotify and iterate */}
      <DropdownItem>
        <div onClick={selectMarket} id="US">
          US
        </div>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
        <div onClick={selectMarket}  id="CA">
          CA
        </div>
      </DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
  )
}