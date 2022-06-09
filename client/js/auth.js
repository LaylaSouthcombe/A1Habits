function login(token) {
  const user = jwt_decode(token)
  localStorage.setItem('token', token)
  localStorage.setItem('username', user.username)
  localStorage.setItem('userEmail', user.email)
}

function logout() {
  localStorage.clear()
}

function currentUser() {
  const username = localStorage.getItem('username')
  return username
}

function retrieveToken() {
  const token = localStorage.getItem('token')
  return token
}
