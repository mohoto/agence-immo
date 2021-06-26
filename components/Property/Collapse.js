import React, { useState } from "react";
import {MDBCollapse, MDBIcon } from "mdbreact";

const styles = {
    collapse: {
        backgroundColor: '#3f51b5',
        color: 'white',
        padding: 10,
        fontSize: 20
    },
    icon: {
        padding: 10
    }

}

const Collapse = ({titre, children}) => {

    const [collapseId, setCollapseId] = useState(false);

    /* const toogleCollapse = collapseId => {
        setCollapseId(prevState => (
            collapseId = prevState !== collapseId ? collapseId : ''
        ))
    } */

    const toogleCollapse = () => {
        setCollapseId(!collapseId);
    }

  return (
      <div className="mt-4">
            <div style={styles.collapse} onClick={toogleCollapse}>
                {titre}
                {collapseId && <MDBIcon icon="angle-down" style={styles.icon} className="float-right"/>}
            {!collapseId && <MDBIcon icon="angle-up" style={styles.icon} className="float-right"/>}
            </div>
        <MDBCollapse id="basicCollapse" isOpen={collapseId}>
            {children}
        </MDBCollapse>
      </div>
    );
}

export default Collapse;