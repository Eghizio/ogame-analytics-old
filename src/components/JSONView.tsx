import React from 'react';
import ReactJson from "react-json-view";

export interface JSONViewProps{
    src: any
    name: string
}

const JSONView: React.FC<JSONViewProps> = ({src, name}) => {
    return (
        <ReactJson style={styles.json} src={src} name={name} iconStyle="triangle" collapsed={true} theme="apathy" />
    );
};

const styles = {
    json: {
        borderRadius: "10px",
        padding: "10px",
        margin: "5px"
    }
};

export default JSONView;