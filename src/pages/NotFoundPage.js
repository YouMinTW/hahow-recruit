import { useHistory } from 'react-router-dom'
import { Result, Button } from 'antd'
import PageLayoutContainer from '../layouts/PageLayoutContainer'

const NotFoundPage = ({ error, message }) => {
  let history = useHistory()
  const clickHandler = () => {
    if (error && message === 'Not Found') {
      // server 404 react router dom not available
      window.history.back()
    } else if (error) {
      window.location.reload()
    } else {
      // browser not found react router dom available
      history.goBack()
    }
  }
  if (message === 'Not Found') {
    return (
      <PageLayoutContainer display='flex'>
        <Result
          status='404'
          title='404 Not found'
          subTitle={`您所造訪的路徑 ${window.location.href} 並不存在`}
          extra={
            <Button type='primary' onClick={clickHandler}>
              回上一頁
            </Button>
          }
        />
      </PageLayoutContainer>
    )
  }
  if (message === 'Network Error') {
    return (
      <PageLayoutContainer display='flex'>
        <Result
          status='warning'
          title='連線失敗，請檢察網路環境！'
          extra={
            <Button type='primary' onClick={clickHandler}>
              {error ? '重新整理' : '回上一頁'}
            </Button>
          }
        />
      </PageLayoutContainer>
    )
  }
  return (
    <PageLayoutContainer display='flex'>
      <Result
        status='500'
        title='這裡發生了一些小問題，我們將儘速為您修復^^'
        extra={
          <Button type='primary' onClick={clickHandler}>
            {error ? '重新整理' : '回上一頁'}
          </Button>
        }
      />
    </PageLayoutContainer>
  )
}

export default NotFoundPage
