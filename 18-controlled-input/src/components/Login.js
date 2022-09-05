import { useState } from 'react';

function Login() {
  const [accountKey, setAccountKey] = useState({ username: '', password: '' });

  function handleformsubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(accountKey)); //test
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleformsubmit}>
        <label>
          Username:
          <input
            type="text"
            value={accountKey.username}
            onChange={(e) => {
              setAccountKey({ ...accountKey, username: e.target.value });
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={accountKey.password}
            onChange={(e) => {
              setAccountKey({ ...accountKey, password: e.target.value });
            }}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
