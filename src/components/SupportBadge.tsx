import React, { HTMLProps } from 'react'
import { IconType } from 'react-icons'
import { IoCash } from 'react-icons/io5'
import styled from 'styled-components'

const Badge = styled.div`
  position: relative;
  display: inline-block;
  width: 25%;
  padding: 1.2em;
  overflow: hidden;
  font-size: 1.5em;
  font-weight: 600;
  border-radius: 15px;
`

const Message = styled.p`
  position: relative;
  display: block;
  text-align: left;
  z-index: 100;
  white-space: normal;
  color: white;
  margin: 0;
`

const Link = styled.a`
  display: inline-block;
  color: white;
  text-decoration: none;
  width: 100%;
  line-height: 3em;
  transition: all 0.2s;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

const Support = styled(Link)`
  position: relative;
  display: flex;
  font-weight: 600;
  align-items: center;
  border-radius: 0.5em;
  justify-content: center;
  filter: hue-rotate(20deg);
  overflow: hidden;

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
  flat?: boolean
  flatText?: boolean
}

function SupportBadge({
  // eslint-disable-next-line prettier/prettier
  look, style, link, buttonText, children, width, flat, flatText, icon, className
}: BadgeData) {
  const css = getShading(look, flat, flatText)
  const Icon = getIcon(icon || IoCash)
  const content = (
    <span>
      <Message>{children}</Message>
      <br />
    </span>
  )

  return (
    <Badge
      style={{ ...css, ...style, width: width || 'fit-content' }}
      className={className}
    >
      {children !== undefined ? content : ''}
      <Support style={css} href={link}>
        <Icon size='1.5em' />
        {buttonText || 'Support'}
      </Support>
    </Badge>
  )
}

function getShading(look?: string, flat?: boolean, flatText?: boolean) {
  return {
    background: look,
    boxShadow: !flat ? '0 0 60px -30px #000' : undefined,
    textShadow: !flatText ? '0 0 5px #333' : undefined
  }
}

function getIcon(type: IconType) {
  return styled(type)`
    vertical-align: middle;
    display: inline-block;
    margin: 0.5em;
  `
}

export default SupportBadge
