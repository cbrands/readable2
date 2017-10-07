import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Postview extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-12 text-center">
                    <h3>Post: Lorem ipsum dolor</h3>
                </div>
                <div className="col-md-12 clearfix">
                    <label>Post text</label>
                    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    </div>
                    <div className="edit-buttons">
                        <button className="btn btn-primary margin-right10"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                        <button className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    </div>
                    <div className="vote-buttons">
                        <button className="btn btn-primary margin-right10"><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
                        <button className="btn btn-primary margin-right10"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
                        <span>12</span>
                    </div>
                </div>
                <Link to={`/`} className="col-md-12">
                    <i className="fa fa-home" aria-hidden="true"></i>
                </Link>
            </div>
        );
    }
}

export default Postview;