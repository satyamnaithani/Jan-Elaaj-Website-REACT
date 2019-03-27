import React, { Component } from 'react';
import {
	Card, CardImg, CardImgOverlay
	// , Form, FormGroup, NavLink, Input
} from 'reactstrap';
import { UserAppStyles as styles } from "../assets/styles/userAppStyles";
import mobile from "../assets/images/mobile.png";
import '../assets/styles/globalStyles.scss';


class About extends Component {

	render() {

		return (
			<div>
				<Card>
					<CardImg width="100%" height="700px" />
					<CardImgOverlay style={{ backgroundColor: 'rgba(255, 255, 255, 1' }}>
						<div className="d-flex flex-row flex-wrap justify-content-around">
							<div style={{ maxWidth: 600, marginTop: 70 }}>
								<img src={mobile} className="img-fluid" alt="Jan Elaaj User App" />
							</div>
							<div className="md-6" style={styles.container}>
								<h3 style={{ ...styles.heading }}> Jan Elaaj User App </h3>
								<p style={styles.text}>Neighbourhood treatment is one click away</p>
								<p style={styles.text}>Search and see the details of the healthcare services and providers based on location, speciality, ratings, experience, rates, discounts etc</p>

								<p style={styles.text}>Make aneducated decision and then book an appointment.</p>
								<h3 style={{ ...styles.heading }}> Comming Soon !!</h3>
								{/* <Form inline>
									<FormGroup>
										<Input type="text" />
									</FormGroup>
									{' '}{' '}
									<NavLink style={{ ...styles.text, ...loginButton }}>Stay in touch</NavLink>
								</Form> */}

							</div>
						</div>
					</CardImgOverlay>
				</Card>
			</div>
		);
	}
}
// const loginButton = {
// 	backgroundColor: '#25a8e3',
// 	borderRadius: 20,
// 	paddingLeft: 22,
// 	paddingRight: 22,
// 	color: 'white',
// 	fontSize: 15,
// 	fontWeight: 'bold',
// 	marginLeft: 20,
// 	cursor: 'pointer'
// };

export default About;
