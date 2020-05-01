import React from 'react';
import './Nasa.css';
import { Api } from '../Providers/api';
const api = new Api();
export default class Nasa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asteroidID: '',
            apiKey: 'tHTKinkGSQ9LDxOshTompbzh9ZKby81HESCDm4rS',
            loader: false
        }
    }
    /**
     * function to get the details of the nasa
     */
    getNasaDetails() {
        this.setState({
            loader: true
        });
        const url = 'https://api.nasa.gov/neo/rest/v1/neo/' + this.state.asteroidID + '?api_key=' + this.state.apiKey;
        api.getApi(url).then(response => {
            console.log(response);
            if (response === false) {
                this.setState({
                    asteroidID: ''
                });
                this.setState({
                    loader: false
                });
                return ;
            }
            this.setState({
                loader: false
            });
            sessionStorage.setItem('nasa_data', JSON.stringify(response));
            this.props.history.push('NasaDetail');
        }).catch(error => {
            this.setState({
                loader: false
            });
            console.error(error);
        })
    }

    /**
     * function to get the random ID and call the api hit
     */
    randomAsteroid() {
        this.setState({
            loader: true
        });
        const url = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=' + this.state.apiKey;
        /**
         * getting a random number b/w 0 to 20
         */
        const randomNo = Math.floor(Math.random() * (19 - 0 + 1) + 0);
        console.log(randomNo);
        api.getApi(url).then(response => {
            console.log(response);
            this.setState({
                loader: false
            });
            this.setState({
                asteroidID: response.near_earth_objects[randomNo].id
            });
            this.getNasaDetails();
        }).catch(error => {
            this.setState({
                loader: false
            });
        });
    }

    render() {
        return (
            <section className="formWrapper">
                <img src="data:image/png;base64,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" alt=""/>
                <input type="text"
                value={this.state.asteroidID}
                 placeholder="Enter Asteroid ID" onChange={
                    (ev) => {
                        this.setState({
                            asteroidID: ev.target.value      
                        })
                    }
                    
                }/>
                <br/>
                <div className="BtnWrapper">
                    <button type="submit" disabled={!this.state.asteroidID} onClick={this.getNasaDetails.bind(this)}>Submit</button>
                    <button type="submit" onClick={this.randomAsteroid.bind(this)}>Random Asteroid</button>
                </div>
                {
                    this.state.loader && (
                        <p className="loader">Loading ...</p>
                    )
                }
            </section>  
        )
    }
}
