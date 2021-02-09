import React, { HTMLProps, CSSProperties } from 'react'
import { IconType } from 'react-icons'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from './Link'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

const Badge = styled.div`
  position: relative;
  display: inline-block;
  padding: 1.2em;
  overflow: hidden;
  border-radius: 15px;
`

const Message = styled.p`
  position: relative;
  display: block;
  text-align: left;
  z-index: 100;
  white-space: normal;
  color: white;
`

const Support = styled(Link)`
  font-weight: 600;
  border-radius: 0.5em;
  filter: hue-rotate(20deg);
  width: 100%;
  line-height: 3em;

  &:hover {
    filter: hue-rotate(-20deg);
    box-shadow: 0 5px 5px #000;
    transform: translateY(-2px);
  }
`

export interface BadgeData extends HTMLProps<HTMLDivElement> {
  icon?: IconType
  buttonText?: string
  link: string
  look?: string
  buttonLook?: string
  flat?: boolean
  flatText?: boolean
  callback?: (e: HTMLElement) => void
}

export function SupportBadge({
  icon,
  buttonText,
  link,
  look,
  buttonLook,
  flat,
  flatText,
  callback,
  style,
  children,
  width,
  id,
  className
}: BadgeData) {
  const css = getShading(look, flat, flatText)
  const Icon = getIcon(icon)
  const content = (
    <span>
      <Message>{children}</Message>
      <br />
    </span>
  )
  return (
    <span>
      <Global />
      <Badge
        id={id}
        style={{ ...css, ...style, width: width || 'fit-content' }}
        className={className}
      >
        {children ? content : ''}
        <Support
          link={link}
          style={{ ...css, background: buttonLook || css.background }}
          callback={callback}
        >
          {Icon ? <Icon size='1.5em' /> : ''}
          {buttonText || 'Support'}
        </Support>
      </Badge>
    </span>
  )
}

function getShading(
  look?: string,
  flat?: boolean,
  flatText?: boolean
): CSSProperties {
  return {
    background: `${look} no-repeat center center`,
    backgroundSize: '100% 100%',
    boxShadow: !flat ? '0 0 60px -30px #000' : undefined,
    textShadow: !flatText ? '0 0 5px #333' : undefined
  }
}

function getIcon(type?: IconType) {
  return type
    ? styled(type)`
        vertical-align: middle;
        display: inline-block;
        margin: 0.5em;
      `
    : undefined
}
