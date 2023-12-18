import { useEffect, useState } from 'react'

/** Hàm trả về thông tin User đăng nhập hệ thống */

export const useUser = () => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [permission, setPermission] = useState<any>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data: any = window.localStorage.getItem('userData')
        const userData = JSON.parse(data)

        setPermission(userData?.wpPermissions)
        setUser(userData)
      } catch (error) {
        console.log('Error fetching user data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData().then()
  }, [])

  return { user, loading, permission, setUser }
}
