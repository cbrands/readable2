import React, { Component } from 'react';
import { connect } from "react-redux";

class Postform extends Component {
    render(){
        return(
            <div>postform</div>
        );
    }
}

export default connect(mapStateToProps)(Postform);