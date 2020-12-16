import React from "react";

// export default function() {
//   return (
//     <div>Registrations If not authenticated</div>
//   );
// }

export default class Auth extends React.Component {

  componentDidMount() {
    window.userbase.init({ appId: '	3dc6948f-bb8e-4389-8bf9-676f315b38bf' })
    function handleLogin(e) {
      e.preventDefault()

      const username = document.getElementById('login-username').value
      const password = document.getElementById('login-password').value

      window.userbase.signIn({ username, password, rememberMe: 'none' })
        .then((user) => showTodos(user.username))
        .catch((e) => document.getElementById('login-error').innerHTML = e)
    }

    function handleSignUp(e) {
      e.preventDefault()

      const username = document.getElementById('signup-username').value
      const password = document.getElementById('signup-password').value

      window.userbase.signUp({ username, password, rememberMe: 'none' })
        .then((user) => showTodos(user.username))
        .catch((e) => document.getElementById('signup-error').innerHTML = e)
    }
    function showTodos(username) {
      document.getElementById('auth-view').style.display = 'none'
      document.getElementById('todo-view').style.display = 'block'
      document.getElementById('username').innerHTML = `Your name is <strong>${username}</strong>`
    }

    function handleLogout() {
      window.userbase.signOut()
        .then(() => {document.getElementById('todo-view').style.display = 'none'; document.getElementById('auth-view').style.display = 'block'})
        .catch((e) => document.getElementById('logout-error').innerText = e)
    }

    document.getElementById('login-form').addEventListener('submit', handleLogin)
    document.getElementById('signup-form').addEventListener('submit', handleSignUp)
     document.getElementById('logout-button').addEventListener('click', handleLogout);
    document.getElementById('todo-view').style.display = 'none'
  }

  render() {
    return (
      <>
        <div>Registrations If not authenticated</div>
        <div id="auth-view">
          <h1>Create an account</h1>
          <form id="signup-form">
            <input id="signup-username" type="text" required placeholder="Username"/>
            <input id="signup-password" type="password" required placeholder="Password"/>
            <input type="submit" value="Create an account"/>
          </form>
          <div id="signup-error"></div>
          <h1>OR Login</h1>
          <form id="login-form">
          <input id="login-username" type="text" required placeholder="Username"/>
          <input id="login-password" type="password" required placeholder="Password"/>
          <input type="submit" value="Sign in"/>
          </form>
        </div>
        <div id="login-error"></div>
        <div id="todo-view">
        <div id="username"></div>

          <h1>Something Not Random</h1>
          <div id="todos"></div>
          <input type="button" value="Logout" id="logout-button"/>
          <div id="logout-error"></div>
      </div>
      </>
    );
  }
}
