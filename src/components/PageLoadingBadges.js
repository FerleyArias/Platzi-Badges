import React from 'react'
import Skeleton from 'react-loading-skeleton'

import './styles/PageLoadingBadges.css'

function PageLoadingBadges() {
  return (
    <React.Fragment>
      <div className="PageLoadingBadges">
        <Skeleton circle={true} height={80} width={80} />
        <div>
          <Skeleton width={200}/>
          <Skeleton width={400} count={2}/>
        </div>
      </div>
      <div className="PageLoadingBadges">
        <Skeleton circle={true} height={80} width={80} />
        <div>
          <Skeleton width={200}/>
          <Skeleton width={400} count={2}/>
        </div>
      </div>
      <div className="PageLoadingBadges">
        <Skeleton circle={true} height={80} width={80} />
        <div>
          <Skeleton width={200}/>
          <Skeleton width={400} count={2}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PageLoadingBadges