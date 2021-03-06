import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import images from '../.././images/images.js';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quote: '',
      skillLevel: 'Youngling',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginErrorHandler = () => {
    const { name, quote, skillLevel } = this.state;
    const { handleUserInfo, handleLoginError } = this.props;

    if (name === '' || quote === '' || skillLevel === '') {
      handleLoginError(true)
    } else {
      handleUserInfo(this.state);
      handleLoginError(false)
    }
  }

  render() {
    const { name, quote, skillLevel } = this.state;
      return (
        <main className="main-login">
          <img src={images.starWarsLogo} alt="star wars logo" className="Login-logo" />
          <form className='form-login'>
            <h2 className="header-login">Please Login</h2>
              <input
                type='text'
                maxLength='25'
                name='name'
                value={name}
                placeholder='Enter Name'
                className='input-login input-login-name'
                onChange={ (e) => this.handleChange(e) }
              />
              <input
                type='text'
                maxLength='65'
                name='quote'
                value={quote}
                placeholder='Enter Favorite StarWars Quote'
                className='input-login input-login-quote'
                onChange={ (e) => this.handleChange(e) }
              />
            <div className='input-container'>
              <label for="skill">Skill Level:</label>
              <select
                id='skill'
                value={skillLevel}
                name='skillLevel'
                className='input-select input-login-skill'
                onChange={ (e) => this.handleChange(e) }
              >
                <option value='Youngling'>Youngling</option>
                <option value='Padawan'>Padawan</option>
                <option value='Jedi Master'>Jedi Master</option>
              </select>
            </div>
            <Link to='/movies' className="link-button">
              <button className='btn-login' type='button' onClick={ () => this.loginErrorHandler() }>May The Force Be With You</button>
            </Link>
          </form>
        </main>
      )
  }
}

export default Login;

Login.propTypes = {
  handleLoginError: PropTypes.func,
  handleUserInfo: PropTypes.func
}