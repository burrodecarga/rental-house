import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()

export default function register ({ username, password }) {
  return fetch(`${publicRuntimeConfig.API_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return true
  })
}