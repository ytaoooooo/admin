import React, { Fragment, useState } from 'react'
import './index.css'
import moment from 'moment'


function handleExit() {
    localStorage.removeItem('login')
    localStorage.removeItem('flag')
    window.location.reload()
}

function MyDate() {
    const [date, setDate] = useState(moment().format('HH:mm:ss'))
    const [date1, setDate1] = useState(moment().format("YYYY-MM-DD"))
    setInterval(() => {
        setDate(moment().format('HH:mm:ss'))
        setDate1(moment().format("YYYY-MM-DD"))
    }, 1000)
    return <div className="date">{date1}<br />{date}</div>
}

function dateDisplay() {

}
// {moment().format("YYYY-MM-DD")}<br />{ moment().format("HH:mm:ss")}
function Header(props) {
    const [showConfirm, setshowConfirm] = useState(false)
    return (
        <Fragment>
            <div className="header-container">
                <div className="manager">
                    <div className="manager-name">
                        <div>管理员</div>
                        <div>小明</div>
                    </div>
                    <i className="iconfont header-iconfont">&#xe625;</i>
                    <i className="iconfont header-iconfont">&#xe618;</i>
                    <i className="iconfont header-iconfont exit-iconfont" onClick={handleExit} >&#xe603;</i>

                </div>

                <div className="detail">
                    <img className="weather-img" src={process.env.PUBLIC_URL + "/static/weather.png"} alt="" />
                    <div className="discribe">
                        <div className="temperature">13℃/20℃</div>
                        <div>空气质量： 优</div>
                    </div>
                </div>
                <div className="weather-container">

                    <MyDate></MyDate>

                </div>

            </div>
            {
                showConfirm ? <div className="my-confirm"></div>
                    : <Fragment></Fragment>
            }
        </Fragment>
    )
}





export default Header
