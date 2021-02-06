import React from 'react'
import { SupportBadge } from 'react-support-badge'
import styled from 'styled-components'

const Badge = styled(SupportBadge)`
  position: relative;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
`

const App = () => {
  return <Badge look="url(https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60)" width="15%" link="https://atrius.xyz" flatText>
    Check out my portfolio!
  </Badge>
}

export default App
