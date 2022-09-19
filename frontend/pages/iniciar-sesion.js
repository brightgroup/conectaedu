import { useEffect } from 'react'
import Router from 'next/router'
import { Layout } from 'layout/Layout'
import Login from 'views/login'
import { isValidToken } from 'utils/Token'

const Page = () => {
  useEffect(() => {
    if (isValidToken()) Router.push('/')
  }, [])

  return (
    <Layout>
      <Login />
    </Layout>
  )
}

export default Page
