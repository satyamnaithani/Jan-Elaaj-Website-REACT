import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import ApiData from './ApiData';

class FetchDoctors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            janData: [],
            queryoffset: 0,
            querylimit: 12,
            hasMore: true,
            status: ''
        }
    }
    fetchApi() {
        axios({
            method: 'POST',

            url: 'https://dev-node.janelaaj.com:3443/getdoctorsbysearchlimit',

            data: {
                cityname: this.props.cityname,
                dmrole: this.props.dmrole,
                localityname: this.props.localityname,
                localitylat: this.props.localitylat,
                localitylong: this.props.localitylong,
                specialityid: this.props.specialityid, 
                queryoffset: this.state.queryoffset,
                querylimit: this.state.querylimit,
                sortid: 0,
                searchfilter: 0,
                dayshortname: null

            },
            config: { headers: { 'Content-Type': 'application/json' } }
        })

            .then(response => this.setState({ janData: response.data.info, status: response.data.status }, function () {
                if( this.state.status === " NO RECORDS Retrieved") {
                    this.setState({ hasMore: false })
                  }
            }))
            // .then(response => console.log(response))
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

            url: 'https://dev-node.janelaaj.com:3443/getdoctorsbysearchlimit',

            data: {
                cityname: this.props.cityname,
                dmrole: this.props.dmrole,
                localityname: this.props.localityname,
                localitylat: this.props.localitylat,
                localitylong: this.props.localitylong,
                specialityid: this.props.specialityid,
                queryoffset: this.state.queryoffset,
                querylimit: this.state.querylimit,
                sortid: 0,
                searchfilter: 0,
                dayshortname: null

            },
            config: { headers: { 'Content-Type': 'application/json' } }
        })
            .then(response => this.setState({ janData: this.state.janData.concat(response.data.info) }, function () {
                if( this.state.status === " NO RECORDS Retrieved") {
                    this.setState({ hasMore: false })
                  }
            }))
            .catch(function (response) {
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                <InfiniteScroll
                    dataLength= {this.state.janData.length}
                    next= {this.fetchNextData}
                    hasMore= {this.state.hasMore}
                    loader= {<Progress animated value='100' />}
                >
                    <div className='container-fluid'>
                        <div className='row'>
                            <h3 className="heading col-12 text-center mt-5 mb-5" style={{ letterSpacing: 2, fontSize: 40, fontWeight: 500 }}>{this.state.hasMore ? 'Doctors' : 'No Data Available' }</h3>
                        </div>
                        <div className="row ml-4 mr-4 d-flex flex-row justify-content-around">
                            {
                                this.state.janData.map((data, index) => {
                                   return <ApiData key={index} info={data} />
                                }     
                                )
                            }
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}

export default FetchDoctors;