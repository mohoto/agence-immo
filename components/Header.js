import React from 'react'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MdbIcon
} from "mdbreact";
import Link from 'next/link'

export default function Header() {
    return (
        <MDBNavbar color="indigo" expand="md" dark>
            <MDBNavbarToggler />
            <MDBCollapse id="navbarCollapse" navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link href="/properties">
                            <a className="nav-link">Liste des biens</a>
                        </Link>
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link href="/dashboard">
                            <a className="nav-link">Dashboard</a>
                        </Link>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                <MDBNavItem>
                        <Link href="/contact">
                            <a className="nav-link">Contactez-nous</a>
                        </Link>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}
