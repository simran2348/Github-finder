import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const url = process.env.REACT_APP_GITHUB_URL
const token = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const fetchUsers = async () => {
    setLoading()
    const response = await fetch(`${url}/users`, {
      headers: {
        Authorization: `token ${token}`
      }
    })

    const data = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  }

  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
