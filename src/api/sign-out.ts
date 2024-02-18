import { api } from '@/lib/axios'

export async function signOut() {
  console.log('chamou aqui')
  await api.post('/sign-out')
}
