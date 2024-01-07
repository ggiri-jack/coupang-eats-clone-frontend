import { useQuery } from '@tanstack/react-query'

import { API_PATH } from '@/constants/apiConfig'
import { Store } from '@/types/store'

export const useStore = (storeId?: string) => {
  return useQuery<Store>({
    queryKey: ['STORE', storeId],
    queryFn: async () => {
      if (!storeId) {
        return null
      }
      const response = await fetch(`/store/${storeId}`)
      return response.json()
    },
  })
}
