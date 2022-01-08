import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimerApp';
import './index.css'


const saludo = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimeraApp saludo="Hola soy Gokú" />, divRoot);
