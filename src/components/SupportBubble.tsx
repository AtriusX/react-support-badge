import React, { HTMLProps } from 'react'
import styled, { CSSProperties } from 'styled-components'
import { Link } from './Link'

const Bubble = styled(Link)`
  position: fixed;
  z-index: 1000;
  text-align: center;
  padding: 1em 3em;
  margin: 2em;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 600;
  border-radius: 100px;
  color: white;
  transition: all 0.2s;

  &:hover {
    filter: brightness(1.2);
    transform: translateY(-2px);
  }
`

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export interface BubbleData extends HTMLProps<HTMLLinkElement> {
  link: string
  look?: string
  position?: Position
  callback?: (e: HTMLElement) => void
}

export function SupportBubble({
  link,
  look,
  position,
  callback,
  id,
  className,
  style
}: BubbleData) {
  const data = position?.split('-') || ['bottom', 'right']
  const vertical =
    data[0] === 'bottom'
      ? {
          bottom: 0
        }
      : {
          top: 0
        }
  const horizontal =
    data[1] === 'right'
      ? {
          right: 0
        }
      : {
          left: 0
        }
  const bubbleStyle: CSSProperties = {
    background: look || '#0066FF',
    ...style,
    ...vertical,
    ...horizontal
  }
  return (
    <Bubble
      id={id}
      callback={callback}
      className={className}
      link={link}
      style={bubbleStyle}
    >
      Support
    </Bubble>
  )
}
