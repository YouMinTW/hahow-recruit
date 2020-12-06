import { useHistory } from 'react-router-dom'
import { Result, Button } from 'antd'
import PageLayoutContainer from '../layouts/PageLayoutContainer'

const NotFoundPage = ({ error, message }) => {
  let history = useHistory()
  // 有無 error 將影響到 使用 React router dom 或是 原生 Web API，Not Found 時，返回前頁，其他 error 暫定重新整理，可考慮導回首頁
  // TODO 可以跟 UI, PM 討論 Not Found Page 的流程
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

  switch (message) {
    case 'Not Found':
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
    case 'Network Error':
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
    default:
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
}

export default NotFoundPage
