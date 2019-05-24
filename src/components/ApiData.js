import React, {Component} from 'react';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle } from 'reactstrap';
import doc2 from '../assets/images/doc2.jpg';
import DoctorModal from './Modal';

 function Test(props) {
    return ( 
                <div className="mb-4 col-sd-12 col-md-4 col-lg-3 flex-fill flex-grow-1 flex-shrink-1">
                    <Card style={{ width: "100%", height: "100%" }} key={props.key}>
                        <CardImg top width="100%" src={doc2} alt={props.info.ldoctorid} />
                        <CardBody>
                            <CardTitle style={{ fontSize: 20, color: '#343434' }}> {props.info.ldoctorname} </CardTitle>
                            <CardSubtitle className="d-flex flex-row flex-wrap justify-content-between">
                                <span style={{ ...styles.cardSubTitle, ...styles.normalText }}> {'Jan Elaaj Rajiv Chowk Delhi'} </span>
                                {/* <a href='/doctors' style={{ textDecoration: 'none' }}><span style={styles.cardText}> {'Details >>'} </span></a> */}
                                <DoctorModal buttonLabel='Details' dlmId={props.info.ldlm_id}/>
                            </CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
                
            
    )
}

export default class ApiData extends Component{

    render(){
        return(
            <Test info={this.props.info} />
        )
    }
}


const styles = {
    normalText: {
        color: 'grey'
    },
    cardSubTitle: {
        fontSize: 13
    },
    cardText: {
        color: 'green',
        fontSize: 13,
    }
};

