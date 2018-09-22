import React from 'react'
import Top from '../containers/Top'
import Opening from '../containers/Opening'

export default ({ chapter }) => {
  switch (chapter) {
    case 'opening':
      return <Opening />
    case 'top':
      return <Top />
    default:
      return <Top />
  }
}
