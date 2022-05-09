import { createContext, useReducer } from 'react'
import { createRenderer } from 'react-dom/test-utils'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const url = process.env.REACT_APP_GITHUB_URL
const token = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const getUserRepos = async (login) => {
    setLoading()

    const params = new URLSearchParams({ sort: 'created', per_page: 10 })

    const response = await fetch(`${url}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${token}`
      }
    })

    const data = await response.json()

    dispatch({
      type: 'GET_REPOS',
      payload: data
    })
  }

  const getUser = async (login) => {
    setLoading()
    const response = await fetch(`${url}/users/${login}`, {
      headers: {
        Authorization: `token ${token}`
      }
    })

    if (response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()

      dispatch({
        type: 'GET_USER',
        payload: data
      })
    }
  }

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <GithubContext.Provider
      value={{
        ...state,
        clearUsers,
        getUser,
        dispatch,
        getUserRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
