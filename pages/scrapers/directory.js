import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BarGraph from '../components/BarGraph';
import { connectToAWS } from '../../util/aws';

const Directory = ({ data }) => {

    console.log(data)

    return (
        <BarGraph />

    );
};


export default Directory;


export async function getStaticProps() {
    let s3 = await connectToAWS()
    var getParams = {
        Bucket: "directory-scraper", // your bucket name,
        Key: "facultyandstaff/2021-04-09T05:27:06.json"
    }

    // return s3.listObjects(getParams).promise().then((data) => {
    //     console.log(data["Contents"][0])
    //     // data["Contents"].forEach((item) => {
    //     //     s3.getObject({ Bucket: "directory-scraper" }, Key: item.key)
    //     //     return { props: { data: data["Contents"] } }
    //     // })

    //     s3.getObject({ Bucket: "directory-scraper", Key: data["Contents"][0].Key }, (item) => {
    //         return { props: { data: item } }
    //     })


    //     // if (true) {
    //     //     return { props: { data: "Test" } }
    //     // }

    // })

    return s3.getObject(getParams).promise().then((item) => {
        console.log(JSON.parse(item['Body']))
        return { props: { data: JSON.parse(item['Body']) } }
    })
}


