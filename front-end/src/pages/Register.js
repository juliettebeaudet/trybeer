import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  checkName,
  checkEmail,
  checkPassword,
} from '../services/checkUserData';
import TrybeerContext from '../context/TrybeerContext';
import { createUser } from '../services/fetch';
import '../css/register.css';

function Register({ history }) {
  const [checkedName, setCheckedName] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);
  // const [clickRegister, setClickRegister] = useState(false);
  const [emailExistis, setEmailExists] = useState(false);
  const {
    name,
    setName,
    email,
    setEmail,
    setPassword,
    password,
    admin,
    setAdmin,
  } = useContext(TrybeerContext);

  const handleNameChange = (e) => {
    setCheckedName(checkName(e.target.value));
    if (checkedName) {
      setName(e.target.value);
    }
  };
  const handleEmailChange = (e) => {
    setCheckedEmail(checkEmail(e.target.value));
    if (checkedEmail) {
      setEmail(e.target.value);
    }
  };
  const handlePasswordChange = (e) => {
    setCheckedPassword(checkPassword(e.target.value));
    if (checkedPassword) {
      setPassword(e.target.value);
    }
  };

  const handleResult = async (result) => {
    if (result.message === 'E-mail already in database') {
      setEmailExists(true);
    }
    localStorage.setItem('user', JSON.stringify(result));
    if (result.role === 'administrator') {
      history.push('/admin/orders');
    }
    if (result.role === 'client') {
      history.push('/products');
    }
  };

  const handleClickRegister = async () => {
    // setClickRegister(true);
    const role = admin ? 'administrator' : 'client';
    await createUser(name, email, password, role).then((result) => handleResult(result));
  };

  return (
    <div className="general-container beer-background">
      <h1 className="white-text">Registro</h1>
      <div className="form-container">
      <input
        className="input-layout"
        placeholder="Nome"
        data-testid="signup-name"
        type="text"
        onChange={ (e) => handleNameChange(e) }
        />
      <input
        className="input-layout"
        placeholder="Email"
        data-testid="signup-email"
        type="text"
        onChange={ (e) => handleEmailChange(e) }
        />
      <input
        className="input-layout"
        placeholder="Senha"
        data-testid="signup-password"
        type="password"
        onChange={ (e) => handlePasswordChange(e) }
        />
      <div className="checkbox-container">
        <label htmlFor="vender">
          <input
            data-testid="signup-seller"
            className="filled-in"
            type="checkbox"
            id="vender"
            onClick={ () => setAdmin(true) }
            />
          <span className="white-text">Quero Vender</span>
        </label>
      </div>
      <button
      className="waves-effect waves-light btn btn-layout"
        type="button"
        data-testid="signup-btn"
        disabled={ !(checkedName && checkedEmail && checkedPassword) }
        onClick={ () => handleClickRegister() }
        >
        Cadastrar
      </button>
      {emailExistis ? <div>E-mail already in database.</div> : null}
    </div>

  </div>
  );
}

export default withRouter(Register);

Register.propTypes = {
  history: PropTypes.arrayOf(Object).isRequired,
};
