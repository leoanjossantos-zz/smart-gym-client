import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MembersList from "./screens/MembersList";
import Member from "./screens/Member";
import LateralMenu from "./components/LateralMenu";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { PageHeader, Layout } from "antd";
import { Provider } from "react-redux";
import store from "./state";

const { Content, Header, Footer } = Layout;

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Layout style={{ minHeight: "100vh" }}>
          <LateralMenu />
          <Layout>
            <Header>
              <div align="center">
                <PageHeader title="Smart Gym" />
              </div>
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Route path="/" component={MembersList} exact />
              <Route path="/Member/:id" component={Member} />
              <Route path="/newMember" component={Member} />
            </Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
