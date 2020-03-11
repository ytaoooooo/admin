import axios from 'axios'
// import { fromJS } from 'immutable'
import * as actionType from './actionType'



// const getSummaryDataAction = (data)=>({
//     type: actionType.GET_SUMMARY_DATA,
//     data
// })


// export const getLogin = ()=>{
//     return (dispatch)=>{
//         axios.get('https://yangicheng.cn/node/api/v1/summary')
//         .then((res)=>{
//             const data = fromJS(res.data.data)
//             dispatch(getSummaryDataAction(data))

//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
// }

const getLoginAction = () => ({
    type: actionType.GET_LOGIN
})

export const getLogin = (data, history, accountMsgDOM, passwordMsgDOM, setAccountMsg, setPasswordMsg) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'https://yangicheng.cn/node/api/v1/login',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
        })
            .then((res) => {
                if (res.data.msg === 'success') {
                    dispatch(getLoginAction())
                    localStorage.setItem('login', true)
                    history.push('/')
                }
                if (res.data.msg === '账号不存在') {
                    setAccountMsg(res.data.msg)
                    accountMsgDOM.style.visibility = 'visible'
                }
                if (res.data.msg === '密码不正确') {
                    setPasswordMsg(res.data.msg)
                    passwordMsgDOM.style.visibility = 'visible'
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }
}