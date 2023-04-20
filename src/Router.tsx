import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { Orders } from './pages/Orders'
import { PageNotFound } from './pages/PageNotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="*" element={<PageNotFound />} />
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders">
          <Route index element={<Orders />} />
          <Route path=":orderID/success" element={<Success />} />
        </Route>
      </Route>
    </Routes>
  )
}
