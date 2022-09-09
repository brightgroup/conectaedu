import React, { useState } from 'react'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'components/modal'
import { LoginForm } from 'components/login-form'
import { logout } from 'redux/auth/actions'

export const Header = () => {
  const dispatch = useDispatch()

  const { session } = useSelector(state => state.auth)

  const [showLogin, setShowLogin] = useState(false)

  const toggleModal = () => setShowLogin(!showLogin)

  const signOff = () => {
    dispatch(logout())
    Router.push('/')
  }

  return (
    <header className="header flex justify-between items-center bg-white border-l w-full px-4">
      <h3 className="text-3xl font-black">Conecta edu</h3>
      {session ? (
        <section className="flex items-center gap-4">
          {/* <input className="border" /> */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-blue text-white relative">
            {localStorage['user']?.toUpperCase() || 'A'}
          </div>
          <i className="fa-solid fa-right-to-bracket cursor-pointer text-xl" onClick={signOff} />
        </section>
      ) : (
        <p className="cursor-pointer" onClick={toggleModal}>
          Iniciar sesión
        </p>
      )}
      <Modal showModal={showLogin} toggleModal={toggleModal}>
        <LoginForm toggleModal={toggleModal} />
      </Modal>
    </header>
  )
}
