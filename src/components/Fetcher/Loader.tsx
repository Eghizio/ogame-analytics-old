import React from "react";

export interface LoaderProps{
    message: string
}

const Loader: React.FC<LoaderProps> = ({message}) => {
    return (
        <div style={styles.loader}>
            <h3 className="loading">{message}</h3>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    loader: {
        backgroundColor: "#111",
        borderRadius: "15px",
        textAlign: "center" as const,
        margin: "10px",
        padding: "10px"
    }
};

export default Loader;