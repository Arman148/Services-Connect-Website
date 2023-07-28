import React, { useState, useEffect } from 'react'
import Main from '../../components/Main'
import Block from '../../components/Block'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import Header from '../../components/PrivateHeader/Header'
import UserInfo from '../../components/UserInfo'
import { connect } from 'react-redux'
import {serviceGetByIdThunk,serviceGetByUserThunk} from '../../thunks'
import ServiceCard from '../../components/ServiceCard'
import Details from '../../components/Details'
import FooterForm from '../../components/FooterForm/footerform'

const OtherUserProfile = ({getServiceByUser,user,getServiceById, serviceByUser, match}) => {
  const [change, setChange] = useState(null)
  const [id, setId] = useState(null)
  const [name, setName] = useState(null)
  const {params: { userId }} = match

  useEffect(() => {
    getServiceByUser(userId)
  }, [])
  
  return (
    <>
      <Header user={user} />
      <Main>
        <Aside>
          <UserInfo
            userInfo={serviceByUser[0] ? serviceByUser[0].owner : null}
            guest={true}
            id={userId}
            change={setChange}
          />
        </Aside>
        <Block>
          {change !== 'details' &&
            serviceByUser.sort((a,b)=>{
              return new Date(b.create) - new Date(a.create)}).map(function (el) {
              return (
                <ServiceCard
                  user={user}
                  key={el.id}
                  avatar={el.owner.photoURL}
                  id={el.id}
                  ownerId={el.owner.id}
                  setName={setName}
                  change={change}
                  name={el.owner.name}
                  setId={setId}
                  setChange={setChange}
                  uid={user?user.uid:null}
                  title={el.title}
                  likes={el.likes}
                  dislikes={el.dislikes}
                  comments={el.comments.length}
                  text={el.description}
                />
              )
            })}
          {change === 'details' && (
            <Details name={name} id={id} user={user} setChange={setChange}  uid={user?user.uid:null} change={change} />
          )}
        </Block>
        <FooterForm />
      </Main>
    </>
  )
}
const mapStateToProps = ({ service }) => {
  return {
    serviceById: service.serviseById,
    serviceByUser: service.serviseByUser
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getServiceById: id => {
      dispatch(serviceGetByIdThunk(id))
    },
    getServiceByUser: id => {
      dispatch(serviceGetByUserThunk(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OtherUserProfile)
