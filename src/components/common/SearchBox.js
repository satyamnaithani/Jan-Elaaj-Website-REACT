import React, { Component } from 'react';
import { Card, CardTitle, CardBody, FormGroup, Input, Col, Button, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { homeStyles as styles } from "../../assets/styles/homeStyles";
import '../../assets/styles/globalStyles.scss';
import axios from 'axios';
import FetchDoctors from '../FetchDoctors';

class SearchBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			city: [],
			cityValue: 'New Delhi',
			locality: [],
			localityValue: 'Jasola Vihar',
			localitylat: '28.5473',
			localitylong: '77.2891',
			serviceValue: 'DOC',
			specialityid: '9',
			speciality: [],
			isLoadingCity: true,
			isLoadingLocality: true,
			isLoadingSpeciality: true,
			doctorDataLoad: true
		}
		this.handleChangeCity = this.handleChangeCity.bind(this);
		this.handleChangeLocality = this.handleChangeLocality.bind(this);
		this.handleChangeService = this.handleChangeService.bind(this);
		this.handleChangeSpeciality = this.handleChangeSpeciality.bind(this);
		this.searchMethod = this.searchMethod.bind(this);
	}
	componentDidMount() {

		if (this.props.doctorDataLoad === false) {
			this.setState({ doctorDataLoad: false })
		}

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
				.then(response => this.setState({ locality: response.data.info, isLoadingLocality: false, localityValue: response.data.info[0].llocalityname }, () => {
					this.state.locality.forEach((locality) => {
						if (this.state.localityValue === locality.llocalityname) {
							this.setState({
								localitylat: locality.llocality_lat,
								localitylong: locality.llocality_long
							})
						}

					})
				}))
				.then(this.setState({ doctorDataLoad: true }))

				.catch(error => console.log(error))
		});
	}

	handleChangeLocality(event) {
		this.setState({ doctorDataLoad: true })
		this.setState({ localityValue: event.target.value }, function () {
			this.state.locality.forEach((locality) => {
				if (this.state.localityValue === locality.llocalityname) {
					this.setState({
						localitylat: locality.llocality_lat,
						localitylong: locality.llocality_long
					})
				}

			})

		}
		)

	}

	handleChangeService(event) {
		this.setState({ doctorDataLoad: true })
		this.setState({ serviceValue: event.target.value }, function () {
			axios({
				method: 'POST',

				url: 'http://35.200.243.43:3000/getspeciality',

				data: { Role: this.state.serviceValue }
			})
				.then(response => this.setState({ speciality: response.data.sparr, isLoadingSpeciality: false, specialityValue: response.data.sparr[0].name }, () => {
					this.state.speciality.forEach((speciality) => {
						if (this.state.specialityValue === speciality.name) {
							this.setState({ specialityid: speciality.id })
						}

					})
				}))
				.catch(error => console.log(error))
		})
	}

	handleChangeSpeciality(event) {
		this.setState({ doctorDataLoad: true })
		this.setState({ specialityValue: event.target.value }, function () {

			this.state.speciality.forEach((speciality) => {
				if (this.state.specialityValue === speciality.name) {
					this.setState({ specialityid: speciality.id })
				}

			})

		})
	}
	searchMethod() {
		this.setState({ doctorDataLoad: false })
	}

	render() {
		return (
			<div>
				<Card style={{ backgroundColor: '#2e69c9' }}>
					<CardTitle style={styles.card2.title} className="normal"> Search services near you </CardTitle>
					<CardBody>
						<Form onSubmit={this.handleSumbit}>
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

								<Col lg={2}> <Link to={{
									pathname: '/doctors',
									state: {
										cityname: this.state.cityValue,
										dmrole: this.state.serviceValue,
										localityname: this.state.localityValue,
										localitylat: this.state.localitylat,
										localitylong: this.state.localitylong,
										specialityid: this.state.specialityid,
										doctorDataLoad: false
									}
								}}>
									<Button onClick={this.searchMethod} style={styles.card2.button} size="lg" className="mt-4 mt-lg-auto"> Search </Button></Link> </Col>
							</FormGroup>
						</Form>
					</CardBody>
				</Card>
				{
					this.state.doctorDataLoad ?
						// <h1 align='center' style={{ marginTop: '20px' }}></h1>
						null
						:
						<FetchDoctors cityname={this.props.cityname}
							dmrole={this.props.dmrole}
							localityname={this.props.localityname}
							localitylat={this.props.localitylat}
							localitylong={this.props.localitylong}
							specialityid={this.props.specialityid}
						/>
				}
			</div>
		);
	}

}
export default SearchBox;