import React, { useState} from 'react'
import { connect } from 'react-redux'
import './index.css'
import {actionCreator} from './store'


// function test (history){

//     setTimeout(()=>{
//         history.push('/map')
//     },1000)
// }



function handlePasswordDisplay(setView){
    const passwordDOM = document.getElementById('password-input')
    if(passwordDOM.type === 'text'){
        passwordDOM.type = 'password'
        setView(false)
    }else{
        passwordDOM.type = 'text'
        setView(true)
    }
}

function handleLogin(changeLogin,history,setAccountMsg,setPasswordMsg){
    const accountDOM = document.getElementById('account-input')
    const passwordDOM = document.getElementById('password-input')
    const accountMsgDOM = document.getElementById('accountMsg')
    const passwordMsgDOM = document.getElementById('passwordMsg')
    const account = accountDOM.value
    const password = passwordDOM.value
    if(!account){
        setAccountMsg('需要输入账号')
        accountMsgDOM.style.visibility= 'visible'
        return 
    }
    if(account){
        accountMsgDOM.style.visibility= 'hidden'
    }
    if(!password){
        setPasswordMsg('需要输入密码')
        passwordMsgDOM.style.visibility= 'visible'
        return 
    }
    if(password){
        passwordMsgDOM.style.visibility= 'hidden'
    }
    const data = {
        account,
        password
    }
    
    changeLogin(data,history,accountMsgDOM,passwordMsgDOM,setAccountMsg,setPasswordMsg)
    
}

function Login(props) {
    const [view, setView] = useState(false)
    const [passwordMsg,setPasswordMsg] = useState('password')
    const [accountMsg,setAccountMsg] = useState(' account')
    return (
        <div className="container">
            <div className="login-container">
                <div className="title">CIM后台管理登录</div>
                <div className="account-container">
                    <i className="iconfont login-icon">&#xe625;</i>
                    <input id="account-input" type="text" placeholder="username"/>
                </div>
                <div  id="accountMsg" className="account-msg">{accountMsg}</div>

                <form className="password-container">
                    <i className="iconfont login-icon">&#xe601;</i>
                    <input id="password-input" autoComplete='new-password' type="password" placeholder="password"/>
                    {   
                        view?<i className="iconfont login-icon view"  onClick={()=>{handlePasswordDisplay(setView)}}>&#xe637;</i>:
                        <i className="iconfont login-icon view"  onClick={()=>{handlePasswordDisplay(setView)}}>&#xe638;</i>
                    }
                </form>
                <div id="passwordMsg" className="password-msg">{passwordMsg}</div>
                <button className="btn-login" onClick={()=>{handleLogin(props.changeLogin,props.history,setAccountMsg,setPasswordMsg)}}>登录</button>
            </div>
        </div>

    )
}




const mapDispatch = (dispatch) => ({
    changeLogin: (data,history,accountMsgDOM,passwordMsgDOM,setAccountMsg,setPasswordMsg) => {
        dispatch(actionCreator.getLogin(data,history,accountMsgDOM,passwordMsgDOM,setAccountMsg,setPasswordMsg))
    }
})

export default connect(null, mapDispatch)(Login)
