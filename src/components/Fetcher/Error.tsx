import React from 'react';

export interface ErrorProps{
    error: Error
}

const Error: React.FC<ErrorProps> = ({error}) => {
    return (
        <div style={styles.error}>
            <h3>{error.name}</h3>
            <p>{error.message}</p>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    error: {
        color: "#fff",
        backgroundColor: "#e00", //#ff1493
        textAlign: "center" as const,
        borderRadius: "15px",
        margin: "10px",
        padding: "10px"
    }
};

export default Error;