import React from 'react'
import {connect} from "react-redux";
import {Button} from "antd";

import {asyncExample} from "../../actions";

const mapStateToProps = state => {
    return {
        asyncDemoString: state.asyncDemoString,
    }
};

const AsyncChange = function ({dispatch, asyncDemoString}) {

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------
    function asyncChangeText() {
        dispatch(asyncExample())
    }

    return (<div style={{padding: '20px'}}>
        <div>
            {asyncDemoString}
        </div>
        <Button onClick={asyncChangeText}>async</Button>
    </div>)
};

export default connect(mapStateToProps)(AsyncChange)
