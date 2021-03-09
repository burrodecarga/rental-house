import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()


export default function login ({  username, password }) {

  const loginInfo = {
    identifier: username,
    password: password
}

  return fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    // credentials:'include',
    body: JSON.stringify(loginInfo)
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { jwt } = res
    return jwt
  })
}