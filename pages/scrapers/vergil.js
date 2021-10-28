import React from 'react';
import styled from 'styled-components';
import { connectToAWS } from '../../util/aws';

import Sidebar from 'sidebar'

const Vergil = ({data}) => {
    console.log(data)
    return (
        <div className="App">
            <Sidebar />
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
        console.log(JSON.parse(item['Body']))
        return { props: { data: JSON.parse(item['Body']) } }
    })
}