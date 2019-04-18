import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import ApiData from './ApiData';
import SearchBox from './common/SearchBox';
import Header from './common/Header';

class FetchDoctors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            janData: [],
            queryoffset: 0,
            querylimit: 12
        }
    }

    fetchApi() {
        axios({
            method: 'POST',

            url: 'http://35.200.243.43:3000/getdoctorsbysearchlimit',

            data: {
                cityname: 'new delhi',
                dmrole: 'DOC',
                localityname: null,
                localitylat: 28.6139391,
                localitylong: 77.2090212,
                specialityid: null,
                queryoffset: this.state.queryoffset,
                querylimit: this.state.querylimit,
                sortid: 0,
                searchfilter: 0,
                dayshortname: null

            },
            config: { headers: { 'Content-Type': 'application/json' } }
        })

            .then(response => this.setState({ janData: response.data.info }))
            .catch(function (response) {
                console.log(response);
            });

    }

    componentDidMount() {

        this.fetchApi();
    }

    fetchNextData = () => {
        const { querylimit, queryoffset } = this.state;

        this.setState({
            queryoffset: queryoffset + querylimit
        })

        axios({
            method: 'POST',

            url: 'http://35.200.243.43:3000/getdoctorsbysearchlimit',

            data: {
                cityname: 'new delhi',
                dmrole: 'DOC',
                localityname: null,
                localitylat: 28.6139391,
                localitylong: 77.2090212,
                specialityid: null,
                queryoffset: this.state.queryoffset,
                querylimit: this.state.querylimit,
                sortid: 0,
                searchfilter: 0,
                dayshortname: null

            },
            config: { headers: { 'Content-Type': 'application/json' } }
        })
            .then(response => this.setState({ janData: this.state.janData.concat(response.data.info) }))
            .catch(function (response) {
                console.log(response);
            });
    }

    render() {

        return (
            <div>
                <Header/>
                <SearchBox />
                {/* <h2 align='center'>Doctors</h2> */}
                <InfiniteScroll
                    dataLength={this.state.janData.length}
                    next={this.fetchNextData}
                    hasMore={true}
                    // loader={<div style={{textAlign: 'center'}}><Spinner style={{ width: '2rem', height: '2rem' }} /></div>}
                //loader={<h3 align='center'>Loading...</h3>}
                loader={<Progress animated value='100' />}
                >

                    <div className='container-fluid'>
                        <div className='row'>
                            <h3 className="heading col-12 text-center mt-5 mb-5" style={{ letterSpacing: 2, fontSize: 40, fontWeight: 500 }}>Doctors</h3>
                        </div>
                        <div className="row ml-4 mr-4 d-flex flex-row justify-content-around">
                            {
                                this.state.janData.map((data, index) => (
                                    <ApiData key={index} info={data} />
                                ))}
                        </div>
                    </div>
                </InfiniteScroll>

            </div>
        );
    }
}

export default FetchDoctors;