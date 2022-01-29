import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'

const Article = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={476}
      height={124}
      viewBox='0 0 476 124'
      backgroundColor='lightgray'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='48' y='8' rx='3' ry='3' width='88' height='6' />
      <rect x='48' y='26' rx='3' ry='3' width='52' height='6' />
      <rect x='0' y='56' rx='3' ry='3' width='410' height='6' />
      <rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
      <rect x='0' y='88' rx='3' ry='3' width='178' height='6' />
      <circle cx='20' cy='20' r='20' />
    </ContentLoader>
  )
}

Article.propTypes = {
  /**
   * Speed of the animation
   */
  speed: PropTypes.number
}
export default Article
