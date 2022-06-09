function login(token) {
  const user = jwt_decode(token)
  localStorage.setItem('token', token)
  localStorage.setItem('username', user.username)
  localStorage.setItem('userEmail', user.email)
  window.location.hash = '#feed'
}

function logout() {
  localStorage.clear()
  window.location.hash = '#login'
}

function currentUser() {
  const username = localStorage.getItem('username')
  return username
}
