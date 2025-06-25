import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homescreen/HomeScreen";
import "./_app.scss";
import { useEffect, useState } from "react";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() { 

  const {accessToken , loading} = useSelector(state=>state.auth);
  const navigate  =  useNavigate();

  useEffect(()=>{

    if(!loading && !accessToken) {
      navigate('/auth');
    }
  },[accessToken, loading, navigate]);


  

  return (
  
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />

        <Route
          path="/search"
          element={
            <Layout>
              <h1>Search </h1>
            </Layout>
          }
        />
        <Route path="/auth" element={<LoginScreen />} />
      </Routes>
 
  );
}

export default App;
