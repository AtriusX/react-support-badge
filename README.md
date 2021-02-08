# react-support-badge

> Support Badges for React!

[![NPM](https://img.shields.io/npm/v/react-support-badge.svg)](https://www.npmjs.com/package/react-support-badge) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-support-badge
```

## Usage

```tsx
import react, { Component } from 'react'
import { SupportBadge } from 'react-support-badge'

function Example() {
  return <SupportBadge link='https://npmjs.com/' look='red'>
    Please consider supporting me!
  </SupportBadge>
}

// Or

class Example extends Component {

  render() {
    return <SupportBadge link='https://npmjs.com/' look='red'>
      Please consider supporting me!
    </SupportBadge>
  }
}
```

## Properties

- **icon**
  - Sets an icon for the support button. (Uses [react-icons]('https://npmjs.com/react-icons/'))
- **buttonText**
  - Sets the support button text.
- **link *(required)***
  - Sets the link to redirect to once pressed.
- **look**
  - Sets the look of the badge. (Supports solid colors, images, and gradients)
- **flat**
  - Disables the box shadow effect on the badge and support buttons when inactive.
- **flatText**
  - Disables the text shadow effect on all text on the badge.

## Other Features

If you would prefer to display a support message in a different way, you can check out `<SupportBar />` or `<SupportBubble />`. More items may get added later on in the future.

## License

MIT © [AtriusX](https://github.com/AtriusX)
