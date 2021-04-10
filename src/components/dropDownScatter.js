import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const DropDownScatter = (props) =>
{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [lastClicked, setLastClicked] = useState(null);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          
          <DropdownItem onClick={() => setLastClicked(3)}>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
}

  export default DropDownScatter;
