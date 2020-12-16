import React from "react";

export default class Pricing extends React.Component {
  submit = async () => {

    const pass = document.getElementById("InputPassword1").value;
    const name = document.getElementById("exampleInputEmail1").value;
    let data = {username:name, password:pass}
    try {
      const request = await fetch("https://pinterest.pythonanywhere.com/tokenz/auth", {method : "POST", headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(data)}
      )
      const response =  await request.json()
      if (request.status !== 200) {
        document.getElementById("login_message").innerHTML = response.message;
        return ;
      }
      localStorage.setItem("token", response.token)
      document.getElementById("login_message").innerHTML = '';
      window.location.replace('/')
    }
    catch (e) {
      console.log(`${e} ksadjhfks`);
    }
  }
  render() {
      return (
      <>
      <form data-toggle="validator" id="registration" method="get" onSubmit={this.submit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="InputPassword1" className="form-label">Password</label>
          <input required min="8" type="password" className="form-control" id="InputPassword1" />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
    </form>
    <h2 id="login_message"></h2>
  </>
    );}
}
