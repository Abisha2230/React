import React from 'react'
import { Container, Paper, Stack } from '@mui/material'
import Menu from './Components/Menu'
import Content from './Components/Content'
import RightBar from './Components/RightBar'

export default function App() {
  return (
    <div>
    <Container>
      <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
        <Menu />
        <Content/>
        <RightBar/>
     </Stack>
     </Container>
    </div>
  )
}
