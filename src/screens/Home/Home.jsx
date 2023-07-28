import React, { useState, useEffect,useRef} from "react";
import Main from "../../components/Main";
import Block from "../../components/Block";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import Header from "../../components/PrivateHeader/Header";
import ServiceCard from "../../components/ServiceCard";
import MiniCard from "../../components/MiniCard";
import CommentModal from '../../components/CommentModal'
import List from "../../components/Categories-list";
import "./home.style.css";
import API from "../../vendor";
import { connect } from "react-redux";
import { serviceGetThunk, serviceGetCategoriesThunk } from "../../thunks";
import FooterForm from '../../components/FooterForm/footerform.js'

const Home = ({ services, getServices, getByCategory, user }) => {
  const myRef= useRef()
  const scrollTo = ()=>{
    setTimeout(()=>{
      myRef.current.style.backgroundColor = "#d3d6f5";
      myRef.current.style.opacity = "0.8";
      myRef.current.style.transition = "all 0.6s";
    },300)  
    setTimeout(()=>{
      myRef.current.style.backgroundColor = "#FFFFFF";
      myRef.current.style.transition = "all 0.8s"
      myRef.current.style.opacity = "1";

    },1000) 
    }
    
  useEffect(() => {
    getServices();
    // API.users.updateProfile({
    //   online: true
    // })
    // API.users.updateProfileOnDisconnect({
    //   online: false,
    //   lastOnline: Date.now()
    // })
    // return API.users.userOff
  }, []);

  
  const [change, setChange] = useState(null);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  
 const open = ()=>{}
 const close = ()=>{}
  
  return (
    <>
      <Header user={user} />
      <Main className="home-root">
        <Aside>
          <List getCategory={getByCategory} />
          
          {[...services]
            .sort((a, b) => {
              return b.likes.length - a.likes.length;
            })
            .slice(0, 2)
            .map(el => {
              return (
                <MiniCard
                  key={el.id}
                  name={el.owner.name}
                  uid={user ? user.uid : null}
                  ownerId={el.owner.id}
                  avatar={el.owner.photoURL}
                  title={el.title}
                  text={el.description}
                />
              );
            })}
        </Aside>
        <Block>
          
          {  (
                 <CommentModal 
                open={change}
                close={close}
                name={name}
                setChange={setChange}
                user={user}
                uid={user ? user.uid : null}
                id={id}
                change={change}
                showOnlyComments = {true}
                scrollTo ={scrollTo}
                 />
                )}
          {
           services
            .sort((a, b) => {
              return new Date(b.create) - new Date(a.create);
            })
            .map(function(el) {
              return (
                <ServiceCard
                  myRef = {myRef}
                  key={el.id}
                  title={el.title}
                  user={user}
                  name={el.owner.name}
                  uid={user ? user.uid : null}
                  ownerId={el.owner.id}
                  likes={el.likes}
                  id={el.id}
                  el={el}
                  dislikes={el.dislikes}
                  comments={el.comments.length}
                  text={el.description}
                  avatar={el.owner.photoURL}
                  change={change}
                  setChange={setChange}
                  setName={setName}
                  setId={setId}
                />
              );
            })}
        </Block>
        
        <FooterForm />
      </Main>
    </>
  );
};

const mapStateToProps = state => {
  const { service } = state;
  const { services } = service;
  return {
    services
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getServices: () => {
      dispatch(serviceGetThunk());
    },

    getByCategory: category => {
      dispatch(serviceGetCategoriesThunk(category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
