import React from 'react'
import Top from '../containers/Top'

export default ({ chapter }) => {
  switch (chapter) {
    case 'top':
      return <Top />
    default:
      return <Top />
  }
}
