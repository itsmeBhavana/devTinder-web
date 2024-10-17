# devTinder Fronteend

- created a vite+react project
- removed unnecessary code and create hello world app
- Add navbar component to app.jsx
- Create a NavBar.jsx
- Installed react-router-dom
- Create BrowserRouter > Routes > Route > Body > Outlet
- Create a Login Page
- Install axios
- CORS - install in backend
- add middleware and configurations origin and credentials
- whenever we are making axios call, we need to pass{widthCredentials: true}

# CORS Error

- From one domain, when you are trying to access APIs of another domain, the browser will give CORS error
- Let's say we're trying to access APIs of localhost:7777 from localhost:5173
- So, for security reason, browsers dont allow Cross origin request

- Body
  - Navbar
  - Route=/ => Feed
  - Route=/login => Login
  - Route=/connections => connections
  - <Outlet/> : Any children routes of body will render in the place of outlet
