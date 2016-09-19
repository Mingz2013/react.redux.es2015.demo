import React from 'react';
import { render } from 'react-dom';
import Hello from './components/hello.jsx';

function main() {
    render(
        <Hello name="mingz"/>,
        document.getElementById('app')
    );
}

main();