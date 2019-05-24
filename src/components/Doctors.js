import React, { Component } from 'react';
import Header from './common/Header';
import SearchBox from './common/SearchBox';

class Doctors extends Component {

    render() {
        return (

            <div>
                <Header />
                <SearchBox cityname={this.props.location.state.cityname}
							dmrole={this.props.location.state.dmrole}
							localityname={this.props.location.state.localityname}
							localitylat={this.props.location.state.localitylat}
							localitylong={this.props.location.state.localitylong}
                            specialityid={this.props.location.state.specialityid}
                            doctorDataLoad= {this.props.location.state.doctorDataLoad}
						/>
            </div>

        )
    }

}

export default Doctors
