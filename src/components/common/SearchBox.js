import React, { Component } from 'react';
import { Card, CardTitle, CardBody, FormGroup, Input, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { homeStyles as styles } from "../../assets/styles/homeStyles";
import '../../assets/styles/globalStyles.scss';
import axios from 'axios';

class SearchBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			city: [],
			cityValue: 'New Delhi',
			locality: [],
			localityValue: 'Jasola Vihar',
			serviceValue: 'DOC',
			speciality: [],
			isLoadingCity: true,
			isLoadingLocality: true,
			isLoadingSpeciality: true
		}
		this.handleChangeCity = this.handleChangeCity.bind(this);
		this.handleChangeLocality = this.handleChangeLocality.bind(this);
		this.handleChangeService = this.handleChangeService.bind(this);
		this.handleChangeSpeciality = this.handleChangeSpeciality.bind(this);
	}
	componentDidMount() {
		axios({
			method: 'POST',

			url: 'http://35.200.243.43:3000/getcitylist'
		})
			.then(response => this.setState({ city: response.data.info, isLoadingCity: false }))
			.then(this.setState({ cityValue: 'New Delhi' }, function () {
				axios({
					method: 'POST',

					url: 'http://35.200.243.43:3000/getlocality',

					data: { cityname: this.state.cityValue }
				})
					.then(response => this.setState({ locality: response.data.info, isLoadingLocality: false }))
					.catch(error => console.log(error))
			}))
			.then(

				this.setState({ serviceValue: 'DOC' }, function () {
					axios({
						method: 'POST',

						url: 'http://35.200.243.43:3000/getspeciality',

						data: { Role: this.state.serviceValue }
					})
						.then(response => this.setState({ speciality: response.data.sparr, isLoadingSpeciality: false }))
						.catch(error => console.log(error))
				})

			)
			.catch(error => console.log(error))
	}
	handleChangeCity(event) {

		this.setState({ cityValue: event.target.value }, function () {
			axios({
				method: 'POST',

				url: 'http://35.200.243.43:3000/getlocality',

				data: { cityname: this.state.cityValue }
			})
				.then(response => this.setState({ locality: response.data.info, isLoadingLocality: false }))
				.catch(error => console.log(error))
		});
	}

	handleChangeLocality(event) {
		this.setState({ localityValue: event.target.value })

	}

	handleChangeService(event) {
		this.setState({ serviceValue: event.target.value }, function () {
			axios({
				method: 'POST',

				url: 'http://35.200.243.43:3000/getspeciality',

				data: { Role: this.state.serviceValue }
			})
				.then(response => this.setState({ speciality: response.data.sparr, isLoadingSpeciality: false }))
				.catch(error => console.log(error))
		})
	}

	handleChangeSpeciality(event) {
		this.setState({ specialityValue: event.target.value }, function () {

			console.log(this.state)
		})
	}
	render() {
		return (
			
			<Card style={{ backgroundColor: '#2e69c9' }}>
				<CardTitle style={styles.card2.title} className="normal"> Search services near you </CardTitle>
				<CardBody>
					<FormGroup row style={{ marginLeft: 40 }}>
						<Col md={3} lg={2} style={styles.card2.col}>
							<Input size="1" style={styles.card2.input} type="select" name="city" id="city" value={this.state.cityValue} onChange={this.handleChangeCity}>
								{
									this.state.isLoadingCity ?
									<option>Loading...</option>
										:
										this.state.city.map((city, index) => <option value={city.lcityname} key={index}>{city.lcityname}</option>)
								}
							</Input>
						</Col>
						<Col md={3} lg={3} style={styles.card2.col}>
							<Input size={"1"} style={styles.card2.input} type="select" name="place" id="place" value={this.state.localityValue} onChange={this.handleChangeLocality}>
								{ 
									this.state.isLoadingLocality ?
									<option>Loading...</option>
									:
									this.state.locality.map((locality, index) => <option value={locality.llocalityname} key={index}>{locality.llocalityname}</option>)
								}
							</Input>
						</Col>
						<Col md={3} lg={2} style={styles.card2.col}>
							<Input size={"1"} style={styles.card2.input} type="select" name="service" value={this.state.serviceValue} onChange={this.handleChangeService}>
								<option value='DOC'> Doctors </option>
								<option value='VIT'> Vital </option>
								<option value='RAD'> Radiology </option>
								<option value='DIE'> Dietician </option>
								<option value='PHY'> Physiotherapist </option>
								<option value='PAT'> Pathology </option>
							</Input>
						</Col>
						<Col md={3} lg={2} style={styles.card2.col}>
							<Input size={"1"} style={styles.card2.input} type="select" name="speciality" value={this.state.specialityValue} onChange={this.handleChangeSpeciality}>
								{
									this.state.isLoadingSpeciality ?
									<option>Loading...</option>
									:
									this.state.speciality.map((speciality, index) => <option value={speciality.name} key={index}>{speciality.name}</option>)
								}
							</Input>
						</Col>

						<Col lg={2}> <Link to="/doctors"><Button style={styles.card2.button} size="lg" className="mt-4 mt-lg-auto"> Search </Button></Link> </Col>
					</FormGroup>
				</CardBody>
			</Card>
		);

	}
}
export default SearchBox;