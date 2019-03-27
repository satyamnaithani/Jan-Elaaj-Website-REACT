import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Button, FormGroup, Input, Col } from 'reactstrap';
import doc from '../assets/images/doc.jpg';
import { homeStyles as styles } from "../assets/styles/homeStyles";
import '../assets/styles/globalStyles.scss';

const MainScreen = () => {
	return (
		<div>
		<Card>
			<CardImg width="100%" src={doc} alt={"Doctor Image"}/>
			<CardImgOverlay className="d-none d-xl-inline-block">
				<CardTitle style={styles.card1.title} className="heading">
					{'Your Affordable Neighbourhood Healthcare Provider'}
				</CardTitle>
				<CardText style={styles.card1.text} className="normal normal-text-color">
					{'We provide you with trusted, affordable and convenient primary' +
					' healthcare services. Explore our services like second opinion,' +
					' onspot vital tests and one click tracking on mobile app'}
				</CardText>
				<CardText style={styles.card1.text}>
					{'Jan Elaaj is incubated @ IIM Lucknow Noida Campus'}
				</CardText>

				<CardText style={styles.card1.text}>
					{'Address: B-1, Institutional Area, Block B, Industrial Area, Sector 62, Noida, Uttar Pradesh '+
				   'Phone No: 011-41025512'}
				</CardText>

				<CardText style={styles.card1.text}>
					{'Email Us @ enquiry@janelaaj.clinic'}
				</CardText>
				{/* <Button style={styles.card1.button}> EXPLORE </Button> */}
			</CardImgOverlay>
		</Card>
		</div>
	);
};

const SearchServices = () => {
		return (
			<div>
			<Card style={{ backgroundColor: '#2e69c9' }}>
				<CardTitle style={styles.card2.title} className="normal"> Search services near you </CardTitle>
				<CardBody>
					<FormGroup row style={{ marginLeft: 40 }}>
						<Col md={3} lg={2} style={styles.card2.col}>
							<Input size="1" style={styles.card2.input} type="select" name="city" id="city">
								<option> New Delhi </option>
								<option> Mumbai </option>
							</Input>
						</Col>
						<Col md={3} lg={3} style={styles.card2.col}>
							<Input size={"1"} style={styles.card2.input} type="select" name="place" id="place">
								<option> Rajiv Chowk </option>
								<option> Jasola </option>
							</Input>
						</Col>
						<Col md={3} lg={2} style={styles.card2.col}>
							<Input size={"1"} style={styles.card2.input} type="select" name="service">
								<option> Doctors </option>
								<option> Nurses </option>
							</Input>
						</Col>
						<Col md={3} lg={2} style={styles.card2.col}>
							<Input size={"1"} style={styles.card2.input} type="select" name="speciality">
								<option> Speciality </option>
								<option> Nurses </option>
							</Input>
						</Col>
						<Col lg={2}> <Button style={styles.card2.button} size="lg" className="mt-4 mt-lg-auto"> Search </Button> </Col>
					</FormGroup>
				</CardBody>
			</Card>
			</div>
		);
};


class Home extends Component {
	render() {
		return (
			<div>
				<MainScreen />
				<SearchServices />
			</div>
		);
	}
}

export default Home;