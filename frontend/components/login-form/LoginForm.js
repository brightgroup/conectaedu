import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'components/input'
import { isValidEmail } from 'utils/Validation'
import { login } from 'redux/auth/actions'

export const LoginForm = ({ toggleModal = () => {} }) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const [user, setUser] = useState({ email: '', password: '' })
  const [validate, setValidate] = useState(false)

  const { email, password } = user

  const handleChangeUser = ({ target }) => setUser({ ...user, [target.name]: target.value })

  const onSubmit = e => {
    e.preventDefault()
    setValidate(true)
    if (!isValidEmail(email)) return
    dispatch(login(user))
    toggleModal()
  }

  return (
    <form className="text-center mt-2" onSubmit={onSubmit}>
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
