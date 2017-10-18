import * as React from "react";
import {Nav} from "react-bootstrap";
import {connect} from "react-redux";

interface OwnProps {
}

export class HeaderInternal extends React.Component<OwnProps, void> {
    render() {
        return (
            <Nav className="navbar navbar-inverse">
                <span>link 1</span>
                <span>link 2</span>
                <span>link 3</span>
            </Nav>
        );
    }
}
export const Header = connect()(HeaderInternal)as React.ComponentClass<OwnProps>;