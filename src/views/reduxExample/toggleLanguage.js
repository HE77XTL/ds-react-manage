import React from 'react'
import {Button} from 'antd'
import {connect} from "react-redux";
import {changeLanguage} from '../../actions/index'


const ToggleLanguage = function ({dispatch}) {

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------
    function reduxTest(type) {
        dispatch(changeLanguage(type))
    }

    return (<div>
        ToggleLanguage
        <Button onClick={e => {
            reduxTest('zh_cn')
        }}>中文</Button>
        <Button onClick={e => {
            reduxTest('en_us')
        }}>英文</Button>
    </div>)
}

export default connect()(ToggleLanguage)
