import React, { useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { modalShow, modalHide } from "./actions";
import { PrivateRoute, history } from "./utils";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/MyProfile";
import OtherUserProfile from "./screens/OtherUserProfile";
import Registration from "./screens/Registration";
import Modal from "./components/Modal";
import "./App.css";
import { useAuth } from "./utils";
import FooterForm from "./components/FooterForm/footerform"

const App = props => {
  const user = useAuth();

  const { modalShow, modalHide, modalData, modalOpen } = props;
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={p => <Home {...p} user={user} />} />
          <Route exact path="/login" render={p => <Login {...p} />} />
          <Route
            exact
            path="/registration"
            render={p => <Registration {...p} />}
          />
          <Route
            exact
            path="/profile"
            render={p => <Profile userId={true} onUpdate="test" user={user}  /> }
          />
          <Route
            exact
            path="/OtherProfile/:userId"
            render={p => <OtherUserProfile {...p} userId={true} user={user} />}
          />
          {/* <Route
            exact
            path="/footerform"
            render={p => <FooterForm />}
          /> */}
        </Switch>
        <Modal data={modalData} open={modalOpen} onClose={modalHide} />
        {/* <FooterForm/> */}
      </div>
    </Router>
  );
};

const mapStateToProps = ({ common, user }) => {
  return {
    modalData: common.modalData,
    modalOpen: common.modalOpen,
    userData: user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    modalShow: data => {
      dispatch(modalShow(data));
    },
    modalHide: () => {
      dispatch(modalHide());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
