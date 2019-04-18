import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import doc from '../assets/images/doc.jpg';
import doc1 from '../assets/images/doc1.jpg';
import { homeStyles as styles } from "../assets/styles/homeStyles";
import '../assets/styles/globalStyles.scss';
// import SearchBox from './common/SearchBox';



const MainScreen = () => {
	return (
		<div>
			<MediaQuery query="(min-device-width: 1224px)">
				<Card>
					<CardImg width="100%" height="100%" src={doc} alt={"Doctor Image"} />
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
							{'Address: B-1, Institutional Area, Block B, Industrial Area, Sector 62, Noida, Uttar Pradesh ' +
								'Phone No: 011-41025512'}
						</CardText>

						<CardText style={styles.card1.text}>
							{'Email Us @ enquiry@janelaaj.clinic'}
						</CardText>
						{/* <Button style={styles.card1.button}> EXPLORE </Button> */}
					</CardImgOverlay>
				</Card>
			</MediaQuery>
			<MediaQuery query="(min-resolution: 2dppx)">
				<Card style={{ overflowX: 'hidden', paddingBottom: '10px' }}>
					<CardImg width="100px" height="100%" src={doc1} alt={"Doctor Image"} />

					<CardTitle style={styles.card3.title} className="heading">
						{'Your Affordable Neighbourhood Healthcare Provider'}
					</CardTitle>
					<CardText style={styles.card3.text} className="normal normal-text-color">
						{'We provide you with trusted, affordable and convenient primary' +
							' healthcare services. Explore our services like second opinion,' +
							' onspot vital tests and one click tracking on mobile app'}
					</CardText>
					<CardText style={styles.card3.text}>
						{'Jan Elaaj is incubated @ IIM Lucknow Noida Campus'}
					</CardText>

					<CardText style={styles.card3.text}>
						{'Address: B-1, Institutional Area, Block B, Industrial Area, Sector 62, Noida, Uttar Pradesh ' +
							'Phone No: 011-41025512'}
					</CardText>

					<CardText style={styles.card3.text}>
						{'Email Us @ enquiry@janelaaj.clinic'}
					</CardText>
				</Card>
			</MediaQuery>
		</div>
	);
};




class Home extends Component {
	render() {
		return (
			<div>
				<MainScreen />
				<Card style={{ backgroundColor: '#2e69c9' }}>
					<CardTitle style={{
						color: 'white',
						fontSize: 20,
						marginTop: 30
					}} className="normal" align='center'> Search services near you </CardTitle>
					<CardBody>
						<Link to="/doctors" style={{ textDecoration: 'none' }}><Button onClick={this.searchMethod} style={styles.card2.button} size="lg" block className="mt-4 mt-lg-auto"><div styles={{ textDecoration: 'none' }}>Search</div></Button></Link>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Home;