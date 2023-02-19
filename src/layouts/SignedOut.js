import React from 'react'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function SignedOut({signIn}) {
    return (
        <div>
            <Button variant="primary" onClick={signIn}>Log in</Button>{' '}
            <Button variant="primary">Register</Button>{' '}
        </div>
    )
}
