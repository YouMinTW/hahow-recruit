import { Spin } from 'antd'
import PageLayoutContainer from '../layouts/PageLayoutContainer'

const LoadingPage = () => (
  <PageLayoutContainer display='flex'>
    <Spin size='large' />
  </PageLayoutContainer>
)

export default LoadingPage
