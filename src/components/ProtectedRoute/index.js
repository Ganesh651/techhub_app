import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'


const token = Cookies.get("jwt_token")


const ProtectedRoute = ({children}) => {
  if (token === undefined) {
    return <Navigate to="/login" />
  } return children

}


export default ProtectedRoute