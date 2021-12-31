import React from 'react'
import { FormControl , Input, InputLabel,FormHelperText , Button } from '@mui/material';
 import { Link } from 'react-router-dom';
export default function Signin() {
    return (
        <div>
            <FormControl>
  <InputLabel htmlFor="my-input"></InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">First Name.</FormHelperText>
  <InputLabel htmlFor="my-input"></InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Last Name.</FormHelperText>
  <InputLabel htmlFor="my-input"></InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
  <br></br>
  <Button variant="contained" color="primary">
    <Link to="/">
       Login
    </Link>
</Button>
</FormControl>

        </div>
    )
}
