import React from 'react'

const NotFound = () => {
  return <h1>404</h1>
}

export default NotFound

NotFound.getLayout = (page: Document) => {
  return <>{page}</>
}
