import React from "react"
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import Feed from "./components/Feed"
import LandingPage from './components/LandingPage';
import CreateAccount from './components/CreateAccount';
import Navbar from "./components/Navbar";


function App() {
  let [isLandingPage,SetIsLandingPage]=React.useState(true)
  let [isLogin,SetIsLogin]=React.useState(false)
  let [isCreateAccount,SetIsCreateAccount]=React.useState(false)
  let [isFeed,SetIsFeed]=React.useState(false)

  function handleCreateAccountBtn(){
    SetIsLandingPage(false)
    SetIsCreateAccount(true)
  }

  function handleLoginBtn(){
      SetIsLandingPage(false)
      SetIsLogin(true)
  }

  function handleLoginSubmitBtn(){
    console.log("login btn submit")
      SetIsLogin(false);
      SetIsFeed(true)
  }
  return (
    <div>
      <Navbar />
      
      <LandingPage showLandingPage={isLandingPage}  handleLogin={handleLoginBtn}  handleCreateAccount={handleCreateAccountBtn} />
      <Login showLogin={isLogin} handleLoginSubmit={handleLoginSubmitBtn} />
      <CreateAccount  showCreateAccount={isCreateAccount}    />
      <Feed showFeed={isFeed}/>
    </div>
    
  );
}



export default App;
