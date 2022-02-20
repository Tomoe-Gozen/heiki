import initializeBasicAuth from 'nextjs-basic-auth'

const users = [{ user: 'tomoe', password: 'tomoegozennft2022' }]
const basicAuthCheck = initializeBasicAuth({
  users: users
})

export default basicAuthCheck
