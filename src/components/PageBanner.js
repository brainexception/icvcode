import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Link } from "gatsby"
import pagebannerimg from '../images/banner-page.jpg'


const PageBanner = () => {


  
    return (
        <>
        <div className="section banner-page about" style={{ backgroundImage:   `url(${pagebannerimg})`  }}>
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="title-page">Contact Us</div>
                        <ol className="breadcrumb">
                            <li><Link to="#">Contact</Link></li>
                            <li className="active">Contact Us</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default PageBanner