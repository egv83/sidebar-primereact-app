import React from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(()=> import('../pages/home'));
const News = lazy(()=> import('../pages/News'));
const Settings = lazy(()=> import('../pages/Setting'));
const Dashbord = lazy(()=> import('../pages/Dashboard'));

function AppRouter() {
  return (
    // <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/news' element={<News />} />
                <Route path='/setting' element={<Settings />} />
                <Route path='/dashboard' element={<Dashbord />} />
            </Routes>
        </Suspense>
    // </BrowserRouter>
  )
}

export default AppRouter;