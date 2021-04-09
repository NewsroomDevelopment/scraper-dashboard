import React from 'react';
import styled from 'styled-components';
import { connectToDatabase } from "../../util/mongodb";

export default function Confessions({ confessions }) {
    return (
        <div>
            <div>Confessions</div>
            {confessions.map((item, index) => {
                return (<div>{item.confession_num}</div>)
            })}
        </div>
    );
};

export async function getStaticProps() {
    const { MONGODB_CONFESSIONS } = process.env;
    const { db } = await connectToDatabase(MONGODB_CONFESSIONS, "confessions_database");
    const confessions = await db
        .collection("confessions")
        .find({})
        .sort({ post_id: -1 })
        .limit(20)
        .toArray();
    return {
        props: {
            confessions: JSON.parse(JSON.stringify(confessions)),
        },
    };
}
