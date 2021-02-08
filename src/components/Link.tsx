import React, { HTMLProps } from 'react'
import styled from 'styled-components'

const LinkItem = styled.a`
  display: inline-block;
  color: white;
  text-decoration: none;
  transition: all 0.2s;
  text-align: center;
  user-select: none;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

export interface LinkData extends HTMLProps<HTMLAnchorElement> {
  link: string
  callback?: (e: HTMLElement) => void
}

export function Link({ link, style, className, callback, children }: LinkData) {
  const call = (e: HTMLElement) => {
    if (callback) callback(e)
    window.location.href = link
  }
  return (
    <LinkItem
      className={className}
      style={style}
      onClick={(e) => call(e.currentTarget)}
    >
      {children}
    </LinkItem>
  )
}
