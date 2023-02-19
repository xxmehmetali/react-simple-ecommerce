import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

//{signOut,ikinci,ucucnsu}
//buna destruction denir lo
//normalde props yazıyordun ve props.signOut diyordun. ama destruction yapraak daha kolay okunur yapıyorsun 
export default function SignedIn({signOut}) {
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Mehmet Ali Karadağ">
                <Dropdown.Item href="#/action-1">Information</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={signOut}>Sign Out</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}
