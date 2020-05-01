import React from 'react';
export default class NasaDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: JSON.parse(sessionStorage.getItem('nasa_data')),
        }
        console.log(this.state.data);
    }
    render() {
        return (
            <section>
                    <a href="/">search for another</a>  
                <p>- name {this.state.data.name}</p>
                <p>- nasa_jpl_url {this.state.data.nasa_jpl_url}</p>
                <p>- is_potentially_hazardous_asteroid {this.state.data.is_potentially_hazardous_asteroid ? 'True': 'False'}</p>
            </section>
        )
    }
}