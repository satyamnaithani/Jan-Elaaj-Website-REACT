import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Table, Media } from 'reactstrap';
import axios from 'axios';
import doc1 from '../assets/images/doc1.jpg';
import 'font-awesome/css/font-awesome.min.css';



class DoctorModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: []
        };

        this.toggle = this.toggle.bind(this);
        this.fetchDocDetails.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        this.fetchDocDetails()
    }

    fetchDocDetails() {
        if (!this.state.modal) {

            var id = this.props.docDetails.ldlm_id;
            axios({
                method: 'POST',

                url: 'https://dev-node.janelaaj.com:3443/getdoctordetails',

                data: {
                    dlmid: id
                },
                config: { headers: { 'Content-Type': 'application/json' } }
            })
                .then(response => this.setState({ data: response.data.serviceinfo }))
                .catch(response => console.log(response))
        }
    }


    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size='xl'>
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        <div className='row'>
                            <div style={{ textAlign: 'center' }} className='col-lg-4 col-md-12 col-sm-12'>
                                <Media object src={doc1} style={{ maxHeight: 250, maxWidth: '100%', borderRadius: '50%' }} alt='Doctor Info' />
                                <hr style={{ textAlign: 'center', borderTop: '1px solid #f8f8f8', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', width: '300px' }} />
                                <div style={{ marginTop: '20' }}>
                                    <h5 align='center' style={{ letterSpacing: 2, fontWeight: 500 }}>{this.props.docDetails.ldoctorname}</h5>
                                    <h5 align='center' style={{ letterSpacing: 2, fontWeight: 400 }}>{this.props.docDetails.lspecialityname}</h5>
                                </div>
                                <div className='fa-2x' style={{ color: '#f4e542' }}>
                                    <i className="fa fa-star" aria-hidden="true"></i> {' '}
                                    <i className="fa fa-star" aria-hidden="true"></i> {' '}
                                    <i className="fa fa-star" aria-hidden="true"></i> {' '}
                                    <i className="fa fa-star" aria-hidden="true"></i> {' '}
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                                <div className='fa-2x' style={{ color: '#419df4' }}>
                                    <i className="fa fa-circle-o"></i> {' '}
                                    <i className="fa fa-circle-o"></i> {' '}
                                    <i className="fa fa-circle-o"></i> {' '}
                                    <i className="fa fa-circle"></i> {' '}
                                    <i className="fa fa-circle-o"></i> {' '}
                                    <i className="fa fa-circle-o"></i> {' '}
                                    <i className="fa fa-circle-o"></i>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-12 col-sm-12'>
                                <h5 style={styles.textHeading}>About</h5>
                                <p>{this.props.docDetails.ldoctorintro}</p>
                                <br />
                                <h5 style={styles.textHeading}>Experience</h5>
                                <p>{this.props.docDetails.lexperience} years</p>
                                <br />
                                <h5 style={styles.textHeading}>Address</h5>
                                <p>{this.props.docDetails.laddressline1}</p>
                                <p>{this.props.docDetails.laddressline2}</p>
                                <p>{this.props.docDetails.lcity}</p>
                                <br />
                                <h5 style={styles.textHeading}>Contact</h5>{'  '} <p>{this.props.docDetails.ldoctorphone}</p>
                            </div>
                            <div className='col-lg-4 col-md-12 col-sm-12'>
                                <Table borderless>
                                    <thead>
                                        <tr>
                                            <th style={styles.textHeading}>Service</th>
                                            <th style={styles.textHeading}>Rates</th>
                                            <th style={styles.textHeading}>Reduced rate</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: 'center' }}>
                                        {
                                            this.state.data.map((info) => (
                                                <tr key={info.lsmserviceid}>
                                                    <td style={styles.tableOne}>{info.lsmservicename}</td>
                                                    <td>{info.ldcsmnormalamount}</td>
                                                    <td>{info.ldcsmdiscountedamount}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const styles = {
    tableOne: {
        textAlign: 'left'
    },
    textHeading: {
        color: '#428bca',
        fontWeight: 50
    }
}
export default DoctorModal;