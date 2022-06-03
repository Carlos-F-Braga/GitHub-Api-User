import React, { useContext } from 'react';

import Container from "../components/container";
import ReposContainer from "../components/reposContainer";

import { Context } from "../context";

const Repos = (props) => {
    const ctx = useContext(Context)

    return (
        <Container>
            <ReposContainer name={ctx.userData?.name} repos={ctx.repos}/>
        </Container>
)
};

export default Repos