import React from 'react'
import { SupportBadge, SupportBar, SupportBubble } from 'react-support-badge'
import styled from 'styled-components'

const Badge = styled(SupportBadge)`
  position: relative;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
`

const App = () => {
  return <>
    <Badge look="linear-gradient(to bottom right, purple 0%, pink 100%)" buttonLook="magenta" link="https://atrius.xyz" flatText>
      Check out my portfolio!
    </Badge>
    <SupportBar link="#" look="linear-gradient(to bottom right, purple 0%, #06F 150%)" />
    <SupportBubble link="#" position="top-right" />
  </>
}

export default App
