import { Layout } from 'layout/Layout'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoaderStatus } from 'redux/loader/actions'
import { Home } from 'views/home'

const Page = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoaderStatus(false))
  }, [])

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default Page
