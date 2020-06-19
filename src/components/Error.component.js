import React from 'react';

const ErrorComponent = props => (
    <p className="my-3 p-4 text-center alert alert-primary">{props.message}</p>
)

export default ErrorComponent;