import React from 'react';
import styled from 'styled-components';
import { connectToDatabase } from "../../util/mongodb";

export default function Goco({ roster }) {
    return (
        <div>
            <div>Go Columbia Lions</div>
            {roster.map((item, index) => {
                return (<div>{item.name}</div>)
            })}
        </div>
    );
};



export async function getStaticProps() {
    const { MONGODB_GOCO } = process.env;
    const { db } = await connectToDatabase(MONGODB_GOCO, "mens-golf");
    const roster = await db
        .collection("roster")
        .find({})
        .sort()
        .limit(20)
        .toArray();

    return {
        props: {
            roster: JSON.parse(JSON.stringify(roster))
        },
    };
}

