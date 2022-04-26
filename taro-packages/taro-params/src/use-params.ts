import { useRouter } from '@tarojs/taro'
import { parseParams } from './parse-params'

export const useParams = () => {
  const router = useRouter()
  const { params } = router
  return parseParams(params)
}
