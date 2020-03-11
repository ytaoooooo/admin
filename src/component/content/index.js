import React, { useEffect, useState, Fragment } from 'react'
import './index.css'
let dom, iconDom, indexFlag, secondDOM, secondIndexFlag, thirdDOM, thirdIndexFlag
let array = []
let iconArray = []
let secondArray = []
let thirdArray = []


function handleThirdClose(setthirdSelect){
    setthirdSelect(100)
}
// 三级菜单的具体显示
function handleThirdSelectItemDisplay(thirdSelect,setthirdSelect) {
    switch (thirdSelect) {
        case 101:
            return <div className="third-select-container">
                <div className="third-select-title">建设用地规划选址</div>
                <div className="third-select-item">
                    <i className="iconfont third-select-item-icon">&#xe606;</i>
                    <div className="third-select-item-title">业主单位：<span className="third-select-title-focus">重庆市城市建筑发展有限公司</span></div>
                </div>
                <div className="third-select-item">
                    <i className="iconfont third-select-item-icon">&#xe606;</i>
                    <div className="third-select-item-title">业主管理人员：<span className="third-select-title-focus">小刚</span></div>
                </div>
                <div className="third-select-item">
                    <i className="iconfont third-select-item-icon">&#xe606;</i>
                    <div className="third-select-item-title">联系电话：<span className="third-select-title-focus">13548356781</span></div>
                </div>
                <div className="third-select-item">
                    <i className="iconfont third-select-item-icon">&#xe606;</i>
                    <div className="third-select-item-title">审批规划人员：<span className="third-select-title-focus">小发</span></div>
                </div>
                <div className="third-close" onClick={()=>{handleThirdClose(setthirdSelect)}}>关闭</div>
            </div>
        default:
            return <div className="third-select-container">
                <div className="third-select-title"><span className="third-select-title-focus">待添加</span></div>
                <div className="third-close" onClick={()=>{handleThirdClose(setthirdSelect)}}>关闭</div>
            </div>
    }
}

// 三级菜单的显示
function handleThirdSelectDisplay(e, index, setthirdSelect) {
    if (thirdIndexFlag !== undefined && thirdIndexFlag !== index) {
        thirdArray.forEach((item) => {
            item.style.color = "#fff"
        })
    }
    thirdIndexFlag = index
    thirdDOM = e.target.parentNode
    thirdDOM.style.color = "rgb(3, 249, 252)"
    setthirdSelect(index)
    thirdArray.push(thirdDOM)
}

// 二级菜单的显示
function handleSecondSelectDisplay(secondSelect, setsecondSelect, setthirdSelect) {
    switch (secondSelect) {
        case 20:
            return <div className="second-select-container">
                <div className="second-select-title"><span className="second-select-title-focus">XXX道路工程</span>审批管理</div>
                <div className="second-select-item">
                    <i className="iconfont second-select-item-icon">&#xe606;</i>
                    <span className="second-select-item-title" onClick={(e) => { handleThirdSelectDisplay(e, 101, setthirdSelect) }}>项目用地规划选址</span>
                </div>
                <div className="second-select-item">
                    <i className="iconfont second-select-item-icon">&#xe606;</i>
                    <span className="second-select-item-title" onClick={(e) => { handleThirdSelectDisplay(e, 102, setthirdSelect) }}>土地出让合同</span>
                </div>
                <div className="second-select-item">
                    <i className="iconfont second-select-item-icon">&#xe606;</i>
                    <span className="second-select-item-title" onClick={(e) => { handleThirdSelectDisplay(e, 103, setthirdSelect) }}>建设项目立项批复</span>
                </div>
                <div className="second-select-item">
                    <i className="iconfont second-select-item-icon">&#xe606;</i>
                    <span className="second-select-item-title" onClick={(e) => { handleThirdSelectDisplay(e, 104, setthirdSelect) }}>施工图审查</span>
                </div>
                <div className="second-select-item">
                    <i className="iconfont second-select-item-icon">&#xe606;</i>
                    <span className="second-select-item-title" onClick={(e) => { handleThirdSelectDisplay(e, 105, setthirdSelect) }}>开工验线</span>
                </div>
                <div className="close" onClick={() => { setsecondSelect(0); setthirdSelect(100) }}>关闭</div>
            </div>

        default:
            return <div className="second-select-container">
                <div className="second-select-title"><span className="second-select-title-focus">待添加</span></div>
                <div className="close" onClick={() => { setsecondSelect(0); setthirdSelect(100) }}>关闭</div>
            </div>

    }
}


// 二级菜单的的切换
function handleItemDOM(e, index, setsecondSelect) {
    if (secondIndexFlag !== undefined && secondIndexFlag !== index) {
        secondArray.forEach((item) => {
            item.style.color = "#fff"
        })
    }

    secondIndexFlag = index
    secondDOM = e.target.parentNode
    secondDOM.style.color = "rgb(3, 249, 252)"
    setsecondSelect(index)
    secondArray.push(secondDOM)

}


// 一级菜单的切换
function handleDOM(e, index) {
    if (indexFlag !== undefined && indexFlag !== index) {
        array.forEach((item) => {
            item.style.display = ""
        })
        iconArray.forEach((item) => {
            item.style.transform = ''
        })
    }
    indexFlag = index
    dom = e.target.parentNode
    iconDom = e.target.previousSibling
    dom = dom.nextSibling
    if (!iconDom.style.transform) {
        iconDom.style.transform = 'rotate(90deg)'
        iconArray.push(iconDom)
    } else {
        iconDom.style.transform = ''
        iconArray.splice(iconDom, 1)
    }
    if (!dom.style.display) {
        dom.style.display = "block"
        array.push(dom)
    } else {
        dom.style.display = ""
        array.splice(dom, 1)
    }
}




function Content(props) {
    const [secondSelect, setsecondSelect] = useState(0)
    const [thirdSelect, setthirdSelect] = useState(100)
    let flag = localStorage.getItem('flag')
    useEffect(() => {
        if (!flag) {
            window.location.reload()
            localStorage.setItem('flag', true)
        }
    }, [flag])

    return (
        <div id="cesiumContainer">
            <div className="fixed-container">
                <div className="sub-title">
                    <img className="sub-title-img" src={process.env.PUBLIC_URL + "/static/subTitle1.png"} alt="" />
                    <img className="sub-title-img" src={process.env.PUBLIC_URL + "/static/subTitle2.png"} alt="" />
                    <img className="sub-title-img" src={process.env.PUBLIC_URL + "/static/subTitle3.png"} alt="" />
                    <img className="sub-title-img" src={process.env.PUBLIC_URL + "/static/subTitle4.png"} alt="" />
                </div>
                <div className="content-container">
                    <div className="select-container">
                        <div className="first-select">
                            {/*城市空间管理 */}
                            <div className="first-select-item-container">
                                <div className="first-select-item">
                                    <i className="iconfont first-select-item-icon">&#xe609;</i>
                                    <span className="first-select-title" onClick={(e) => { handleDOM(e, 0) }}>城市空间管理</span>
                                </div>
                                {/* 子选项 */}
                                <div className="first-select-list-container">
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" >待添加</span>

                                    </div>
                                </div>
                            </div>
                            {/* 项目建设计划管理 */}
                            <div className="first-select-item-container">
                                <div className="first-select-item">
                                    <i className="iconfont first-select-item-icon">&#xe609;</i>
                                    <span className="first-select-title" onClick={(e) => { handleDOM(e, 1) }}>项目建设计划管理</span>
                                </div>
                                {/* 子选项 */}
                                <div className="first-select-list-container">
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" >待添加</span>

                                    </div>
                                </div>
                            </div>
                            {/* 前期审批管理 */}
                            <div className="first-select-item-container">
                                <div className="first-select-item" >
                                    <i className="iconfont first-select-item-icon">&#xe609;</i>
                                    <span className="first-select-title" onClick={(e) => { handleDOM(e, 2) }}>前期审批管理</span>
                                </div>
                                {/* 子选项 */}
                                <div className="first-select-list-container">
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" onClick={(e) => { handleItemDOM(e, 20, setsecondSelect) }}>项目审批管理</span>

                                    </div>
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" onClick={(e) => { handleItemDOM(e, 21, setsecondSelect) }}>项目可研阶段管理</span>

                                    </div>
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" onClick={(e) => { handleItemDOM(e, 22, setsecondSelect) }}>项目方案阶段管理</span>

                                    </div>
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" onClick={(e) => { handleItemDOM(e, 23, setsecondSelect) }}>初步设计审查</span>

                                    </div>
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" onClick={(e) => { handleItemDOM(e, 24, setsecondSelect) }}>施工图阶段管理</span>

                                    </div>
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" onClick={(e) => { handleItemDOM(e, 25, setsecondSelect) }}>施工图深化阶段管理</span>

                                    </div>
                                </div>
                            </div>
                            {/* 方案设计应用 */}
                            <div className="first-select-item-container">
                                <div className="first-select-item">
                                    <i className="iconfont first-select-item-icon">&#xe609;</i>
                                    <span className="first-select-title" onClick={(e) => { handleDOM(e, 3) }}>方案设计应用</span>
                                </div>
                                {/* 子选项 */}
                                <div className="first-select-list-container">
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" >待添加</span>

                                    </div>
                                </div>
                            </div>
                            {/* 施工图深化应用 */}
                            <div className="first-select-item-container">
                                <div className="first-select-item">
                                    <i className="iconfont first-select-item-icon">&#xe609;</i>
                                    <span className="first-select-title" onClick={(e) => { handleDOM(e, 4) }}>施工图深化应用</span>
                                </div>
                                {/* 子选项 */}
                                <div className="first-select-list-container">
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" >待添加</span>

                                    </div>
                                </div>
                            </div>
                            {/* 辅助决策 */}
                            <div className="first-select-item-container">
                                <div className="first-select-item">
                                    <i className="iconfont first-select-item-icon">&#xe609;</i>
                                    <span className="first-select-title" onClick={(e) => { handleDOM(e, 5) }}>辅助决策</span>
                                </div>
                                {/* 子选项 */}
                                <div className="first-select-list-container">
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" >待添加</span>

                                    </div>
                                </div>
                            </div>
                            {/* 工程招投标管理 */}
                            <div className="first-select-item-container">
                                <div className="first-select-item">
                                    <i className="iconfont first-select-item-icon">&#xe609;</i>
                                    <span className="first-select-title" onClick={(e) => { handleDOM(e, 6) }}>工程招投标管理</span>
                                </div>
                                {/* 子选项 */}
                                <div className="first-select-list-container">
                                    <div className="first-select-list-item">
                                        <i className="iconfont first-select-list-item-icon">&#xe606;</i>
                                        <span className="first-select-list-item-title" >待添加</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            secondSelect > 0 ?
                                <div className="second-select">
                                    {handleSecondSelectDisplay(secondSelect, setsecondSelect, setthirdSelect)}
                                </div>
                                : <Fragment></Fragment>
                        }

                        {
                            thirdSelect > 100 ?
                                <div className="third-select">
                                    {handleThirdSelectItemDisplay(thirdSelect,setthirdSelect)}
                                </div>
                                : <Fragment></Fragment>
                        }
                    </div>
                    <div className="right-sidebar">
                        <img id="surface-contours" title="等高面" src={process.env.PUBLIC_URL + "/static/right1.png"} alt="" className="right-img" />
                        <img id="both-contours" title="等高线面" src={process.env.PUBLIC_URL + "/static/right2.png"} alt="" className="right-img" />
                        <img id="no-contours" title="清除" src={process.env.PUBLIC_URL + "/static/right3.png"} alt="" className="right-img" />
                        <img id="rotate-start" title="开始旋转" src={process.env.PUBLIC_URL + "/static/right4.png"} alt="" className="right-img" />
                        <img id="rotate-stop" title="停止旋转" src={process.env.PUBLIC_URL + "/static/right5.png"} alt="" className="right-img" />
                        <img id="download" title="出图" src={process.env.PUBLIC_URL + "/static/right6.png"} alt="" className="right-img" />
                    </div>
                </div>
                <div className="footer">
                    <img src={process.env.PUBLIC_URL + "/static/footer1.png"} alt="" className="footer-img" />
                    <img src={process.env.PUBLIC_URL + "/static/footer2.png"} alt="" className="footer-img" />
                    <img src={process.env.PUBLIC_URL + "/static/footer3.png"} alt="" className="footer-img" />
                    <img src={process.env.PUBLIC_URL + "/static/footer4.png"} alt="" className="footer-img" />
                    <img src={process.env.PUBLIC_URL + "/static/footer5.png"} alt="" className="footer-img" />
                    <img src={process.env.PUBLIC_URL + "/static/footer6.png"} alt="" className="footer-img" />
                </div>
            </div>
        </div>
    )
}

export default Content