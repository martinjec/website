import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Content/profile/ProfileContainer";
import { Navigate, Routes, Route } from "react-router-dom";
import News from "./components/Content/News";
import Music from "./components/Content/Music";
import Settings from "./components/Content/Settings";
import MessagesContainer from "./components/Content/Chats/MessagesContainer";
import UsersContainer from "./components/Content/users/UsersContainer";
import AuthContainer from "./components/Login/AuthContainer";
import { Component } from "react";
import { connect } from "react-redux";
import { initApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import { withRouter } from "./hoc/withRouter";

class App extends Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    if (!this.props.init) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/messages" element={<MessagesContainer />} />
            <Route path="users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<AuthContainer />} />
            <Route path="/logout" element={<AuthContainer />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  init: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initApp }))(App);
