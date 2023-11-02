import React from 'react'
import {Helmet} from "react-helmet";
const MetaData = ({title}) => {
  return (
    <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="This is a simple demo website." />
    </Helmet>
  </div>
  )
}
export default MetaData