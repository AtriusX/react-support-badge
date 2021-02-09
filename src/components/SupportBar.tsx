import React, { HTMLProps } from 'react'
import styled, { CSSProperties } from 'styled-components'
import { Link } from './Link'

const Bar = styled.div`
  position: fixed;
  bottom: 0%;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  padding: 1.5em 1.25em;
  transition: all 1s;
  z-index: 1000;
`

const Text = styled.p`
  position: relative;
  display: inline-block;
  width: 100%;
  color: white;
  font-size: 1.1em;
  padding-left: 1em;
`

const Button = styled(Link)`
  position: relative;
  right: 1em;
  margin-right: 1.5em;
  width: 10em;
  padding: 0.5em;
  color: white;
  filter: hue-rotate(20deg);
  transition: all 0.2s;

  &:hover {
    filter: hue-rotate(-20deg);
  }
`

export interface BarData extends HTMLProps<HTMLDivElement> {
  buttonText?: string
  link: string
  look?: string
  buttonLook?: string
  callback?: (e: HTMLElement) => void
}

export function SupportBar({
  buttonText,
  link,
  look,
  buttonLook,
  callback,
  children,
  id,
  className,
  style
}: BarData) {
  const barStyle: CSSProperties = {
    background: look || '#0066FF',
    ...style
  }
  const buttonStyle: CSSProperties = {
    background: buttonLook || barStyle.background
  }
  return (
    <Bar id={id} className={className} style={barStyle}>
      <Text>{children || 'Please consider supporting me!'}</Text>
      <Button style={buttonStyle} link={link} callback={callback}>
        {buttonText || 'Support'}
      </Button>
      <Button
        link='#'
        style={buttonStyle}
        callback={(e) => {
          const elem = e.parentElement!
          elem.style.opacity = '0'
          elem.style.pointerEvents = 'none'
        }}
      >
        Dismiss
      </Button>
    </Bar>
  )
}
