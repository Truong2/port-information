import { useRouter } from 'next/router'

function useQueryUrl() {
  const router = useRouter()
  const query = new URLSearchParams(router.asPath.split(/\?/)[1])

  return query
}

export default useQueryUrl
