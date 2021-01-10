import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { BACKEND_API, SECRET_KEY } from '../../config'
import axios from 'axios'
import { login } from '../../redux/isLoggedIn/actions'
import { useDispatch } from 'react-redux'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  // Recieve JWT from backend
  const result = await axios.post(`${BACKEND_API}/auth/success`, {
    secret: SECRET_KEY,
  })
  console.log(result.data)
  console.log(SECRET_KEY)
  let token: string
  if (result.data.token) {
    token = result.data.token
    // Updating the login state with token
    const dispatch = useDispatch()
    dispatch(login({ loggedIn: true, token: token }))
  }

  res.redirect('/dashboard')
}

export default handler
