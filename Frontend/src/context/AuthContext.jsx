import { createContext, useContext, useEffect, useReducer } from 'react';
import {jwtDecode} from 'jwt-decode';

const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  role: localStorage.getItem('role') || null,
  token: localStorage.getItem('token') || null,
};

const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decodedToken.exp < currentTime;
  } catch (e) {
    return true; // If there's an error, consider the token expired
  }
};

const validateToken = (state) => {
  if (state.token && isTokenExpired(state.token)) {
    return {
      user: null,
      role: null,
      token: null,
    };
  }
  return state;
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        role: null,
        token: null,
      };

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };

    case 'LOGOUT':
      return {
        user: null,
        role: null,
        token: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, validateToken);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('token', state.token);
    localStorage.setItem('role', state.role);
  }, [state]);

  // Automatic logout if token is expired
  useEffect(() => {
    if (state.token && isTokenExpired(state.token)) {
      dispatch({ type: 'LOGOUT' });
    } else if (state.token) {
      const decodedToken = jwtDecode(state.token);
      const expirationTime = decodedToken.exp * 1000 - Date.now();
      setTimeout(() => {
        dispatch({ type: 'LOGOUT' });
      }, expirationTime);
    }
  }, [state.token, dispatch]);

  return (
    <authContext.Provider value={{ user: state.user, token: state.token, role: state.role, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
