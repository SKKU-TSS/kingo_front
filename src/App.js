import { BrowserRouter, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/public/Navbar.js";
import { Container, Flex } from "@chakra-ui/react";
import DashBoard from "./pages/DashBoard";
import MyPoint from "./pages/MyPoint";
import Transaction from "./pages/Transaction";
import Login from "./pages/Login";
import SKKULoginPage from "./pages/skkuLogin.js";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import AdminPage from "./pages/AdminPage.js";
import { createStore, applyMiddleware, compose } from "redux";
import { createStoreHook, Provider } from "react-redux";
import rootReducer from "./redux/reducer"
const AppWrap = styled.div`
  font-size: 12px;
  font-family: "Poppins", sans-serif;
`;




function App() {
  const { active } = useWeb3React();

  useEffect(()=>{
    document.title = 'Kingo Koin';
  });

 

  return (
    <AppWrap>
       <Container maxW="full" bg="#E5E5E5" p={0}>
          <Flex minH="100vh" h="full">
            <BrowserRouter>
              {active ?? <Redirect to="/dashboard" />}
              
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={SKKULoginPage}/>
              <Route exact path="/dashboard" component={DashBoard} />
              <Route exact path="/my-point" component={MyPoint} />
              <Route exact path="/check-transactions" component={Transaction} />
              <Route exact path="/admin" component={AdminPage}/>
            </BrowserRouter>
          </Flex>
        </Container>
    </AppWrap>
  );
}

export default App;


