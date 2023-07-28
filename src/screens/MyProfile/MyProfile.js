import React, {useState, useEffect} from 'react';
import Main from '../../components/Main'
import Block from '../../components/Block'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import Header from '../../components/PrivateHeader/Header'
import UpdateProfile from '../../components/UpdateProfile'
import UserInfo from '../../components/UserInfo'
import {connect} from 'react-redux';
import {modalShow} from '../../actions/Common.actions'
import {serviceGetByIdThunk,servicesCreateThunk,serviceUpdateThunk,serviceGetByUserThunk,serviceDeleteThunk} from '../../thunks';
import MyServiceCard from '../../components/MyServiceCard';
import Details from '../../components/Details';
import FooterForm from '../../components/FooterForm/footerform'


const MyProfile = ({getServiceByUser,user,createService,updateService,getServiceById,serviceByUser,removeService,errorModal})=>{
     const [change, setChange] = useState(null);
     const [id, setId] = useState(null)
     const [name, setName] = useState(null)
    
    
     useEffect(()=>{
      const userData = async()=>await getServiceByUser(user.uid)
      userData()
      getServiceById(id)
     },[])
    
const updated = serviceByUser.find(el =>{
  return el.id === id
})

    return(<>
        <Header user={user} myProfile={true}/>
        <Main >
           <Aside>
           <UserInfo user={user} id={user.uid} change={setChange} />
           </Aside>
           <Block>
             {
              change === "Create" && <UpdateProfile  // have create/update and prevService{} value
                create = {createService} 
                user={user}
                change={change}
                setChange={setChange}
                errorModal={errorModal}
               />
             }
             {
              change === "update" && <UpdateProfile  user={user} // have create/update and prevService{} value
                update = {updateService} 
                serviceByUser={serviceByUser}
                prevService = {updated}
                id={id}
                change={change}
                setChange={setChange}
                errorModal={errorModal}
               />
             }
              {change === null && serviceByUser.sort((a,b)=>{
                  return new Date(b.create) - new Date(a.create)})
              .map(function(el){ 
                      return <MyServiceCard avatar={el.owner.photoURL} key={el.id} id={el.id} setName={setName} setId={setId} 
                      setChange={setChange} user={user} title={el.title} likes={el.likes} dislikes={el.dislikes}
                       comments={el.comments.length} text={el.description} removeService={removeService}/>
                     })} 
             {change === 'details' && <Details name={name} setChange={setChange} user={user} uid={user.uid} id={id} change={change} /> } 
           </Block>
           <FooterForm/> 
        </Main>
      </>)
}
const mapStateToProps = ({service}) =>{
  return {
     serviceById : service.serviseById,
     serviceByUser : service.serviseByUser,
  }
} 
const mapDispatchToProps = (dispatch) =>{
  return {
    getServiceById : (id) => {
      dispatch(serviceGetByIdThunk(id))
    },
    getServiceByUser : (id) => {
      dispatch(serviceGetByUserThunk(id))
    },
     createService : (data) => {
       dispatch(servicesCreateThunk(data))
     },
     updateService : (id,data) =>{
       dispatch(serviceUpdateThunk(id,data))
     },
     removeService : (id) => {
       dispatch(serviceDeleteThunk(id))
     },
     errorModal : (data) => {
        dispatch(modalShow(data))
     }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyProfile);