import React, { Component } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Navbar extends Component {
  state = {
    clicked: false,
    showLoginForm: false,
    showRegisterForm: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  toggleLoginForm = () => {
    this.setState({ showLoginForm: !this.state.showLoginForm, showRegisterForm: false });
  };

  toggleRegisterForm = () => {
    this.setState({ showRegisterForm: !this.state.showRegisterForm, showLoginForm: false });
  };

  handleLinkClick = (event) => {
    event.preventDefault();
    const target = document.querySelector('#AddPostForm');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <>
        <nav>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? 'navbar active' : 'navbar'}
            >
              <img src="./logo.jpeg" alt="name" className="logo-img" />
              <li>
                <a className="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#company">Company</a>
              </li>
              <li>
                <a href="#AddPostForm" onClick={this.handleLinkClick}>Post</a>
              </li>
              <li>
                <a href="#contacts">Contact</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
          <div>
            <button onClick={this.toggleLoginForm} className="login-button">
              Login
            </button>
          </div>
        </nav>

        {this.state.showLoginForm && (
          <div className="form-container">
            <h2>Login</h2>
            <div className="social-login">
              <button className="login-with-google-button">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" />
                Login with Google
              </button>
              <button className="login-with-linkedin-button">
                <img src="https://img.icons8.com/color/16/000000/linkedin.png" alt="LinkedIn icon" />
                Login with LinkedIn
              </button>
            </div>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
            <button onClick={this.toggleRegisterForm} className="register-link">
              Register here
            </button>
          </div>
        )}

        {this.state.showRegisterForm && (
          <div className="form-container">
            <h2>Register</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Type Password Again" required />
              <input type="text" placeholder="Company Name" required />
              <input type="text" placeholder="Company Domain" required />
              <input type="email" placeholder="Company Email" required />
              <input type="file" placeholder="Company Image" />
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </>
    );
  }
}

export default Navbar;
