import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Input } from 'components/input'
import { isValidEmail } from 'utils/Validation'
import { isValidToken } from 'utils/Token'
import { login } from 'redux/auth/actions'
import { TOKEN } from 'constants/Auth'

export const LoginForm = ({ toggleModal = () => {} }) => {
  const dispatch = useDispatch()
  const { replace, query } = useRouter()

  const [user, setUser] = useState({ email: '', password: '' })
  const [validate, setValidate] = useState(false)

  const { email, password } = user

  useEffect(() => loginWithToken(), [query])

  const loginWithToken = () => {
    if (query?.token && isValidToken(query.token)) {
      localStorage.setItem(TOKEN, query.token)
      replace('/')
    }
  }

  const handleChangeUser = ({ target }) => setUser({ ...user, [target.name]: target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setValidate(true)
    if (!isValidEmail(email)) return
    await dispatch(login(user))
    if (localStorage[TOKEN]) replace('/')
  }

  return (
    <form className="text-center mt-2 h-max" onSubmit={onSubmit}>
      <h3 className="text-xl mb-2 text-blue">Bienvenido</h3>
      <Input
        name="email"
        value={email}
        label="Correo"
        onChange={handleChangeUser}
        error={validate && !isValidEmail(email) ? '*El correo ingresado no es válido' : ''}
      />
      <Input
        name="password"
        value={password}
        label="Contraseña"
        icon="fa-lock"
        type="password"
        onChange={handleChangeUser}
      />
      <button className="w-full py-2 rounded-md border transition-all bg-blue cursor-pointer text-white">
        Iniciar sesión
      </button>
    </form>
  )
}
