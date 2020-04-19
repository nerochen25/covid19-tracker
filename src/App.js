import React from 'react';

import { Cards, Chart, CountryPicker }  from './components';
import styles from './App.module.css';


class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>COVID-19 TRACKER</h1>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App;