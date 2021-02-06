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
  return <Badge look="linear-gradient(to top right, purple 0%, magenta 100%)" width="20%" link="https://atrius.xyz" flatText>
    Check out my portfolio!
  </Badge>
}

export default App
