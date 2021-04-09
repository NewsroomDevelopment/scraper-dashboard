import React from 'react';
import styled from 'styled-components';
import { connectToDatabase } from "../../util/mongodb";

export default function Handshake({ postings }) {
    return (
        <div>
            <div>Handshake</div>
            <div>hi</div>
            {postings.map((posting) => {
                return (<div>{posting.apply_start}</div>)
            })}
        </div>
    );
};

export async function getStaticProps() {
    const { MONGODB_HANDSHAKE } = process.env;
    const { db } = await connectToDatabase(MONGODB_HANDSHAKE, "aggregate");
    const postings = await db
        .collection("postings")
        .find({})
        .limit(20)
        .toArray();
    return {
        props: {
            postings: JSON.parse(JSON.stringify(postings)),
        },
    };
}

