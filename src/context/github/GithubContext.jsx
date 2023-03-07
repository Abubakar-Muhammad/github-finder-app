import { createContext, useContext, useEffect, useReducer } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

export const useGithubContext = () => {
  return useContext(GithubContext)
}

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider

// useEffect(() => {
//   // fetchUsers()
// }, [])

//Get initial users (testing purposes)
// const fetchUsers = async () => {
//   const response = await fetch(`${GITHUB_URL}/users`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   })

//   const data = await response.json()

//   dispatch({
//     type: "GET_USERS",
//     payload: data,
//   })
// }
