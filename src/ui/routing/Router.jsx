import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import PropTypes from 'prop-types'
import { CircularProgress } from '@mui/material'

const Router = (props) => {
  const regularRoutes = props.appRoutes.filter(item => !item.background)
  return (
    <Suspense fallback={<CircularProgress color="inherit" size={20} /> }>
      <Routes>
        {regularRoutes.map((item, index) => {
          const RouteComponent = item.component
          return <Route key={index} exact path={item.path} element={<RouteComponent />}> </Route>
        })}
        <Route
          render={() => (
            <>
              <h4>Oops, this page does not exist.</h4>
            </>
          )}
        />
      </Routes>
    </Suspense>
  )
}

Router.propTypes = {
  appRoutes: PropTypes.array.isRequired,
}

Router.defaultProps = {
  appRoutes: [],
}

export { Router }
