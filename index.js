import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './src/app';

const MainComponent = ( props ) => {
    return (
        <TestComponent
            title={'Hello world'}
        />
    );
}

ReactDOM.render(
    <MainComponent />,
    document.body
);