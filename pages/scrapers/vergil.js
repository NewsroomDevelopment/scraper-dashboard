import React, { useState, Component } from 'react';
import styled from 'styled-components';
import { connectToAWS } from '../../util/aws';
import BarGraph from '../components/BarGraph';
import Sidebar from './sidebar.js'

const Vergil = ({data}) => {
    console.log(data)
    const [graphType, setGraphType] = useState('line')

    function handleGraphUpdate(graphType) {
        setGraphType(graphType)
    }

    console.log(graphType)

    return(
        <div className="App">
            <Sidebar handleGraphUpdate={handleGraphUpdate} setGraphType={setGraphType} />
            <BarGraph graphType={graphType} />
        </div>
    );
};



export default Vergil;

export async function getStaticProps() {
    let s3 = await connectToAWS()
    var getParams = {
        Bucket: "vergil-scraper", // your bucket name,
        Key: "Summer2021/2021-04-09T13:29:13.json"
    }

    return s3.getObject(getParams).promise().then((item) => {
        return { props: { data: JSON.parse(item['Body'][0]) } }
    })
}