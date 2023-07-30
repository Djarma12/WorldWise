import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

function AuthProvider({ childen }) {
  return <AuthContext.Provider>{childen}</AuthContext.Provider>;
}

const initialState = { user: null, isAuthenticated: false };

function reducer(state, action) {
  // switch(action)
}

function useAuth() {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function login(email, password) {}

  function logout() {}

  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside the  AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
