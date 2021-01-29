import { Page, Text, Button, Row, useToasts } from "@geist-ui/react";
import React, { useState } from "react";
import Router from "next/router";
import firebase from "firebase/app";
require("firebase/auth")
 
import initFirebase from "../services/firebase";

initFirebase();

const provider = new firebase.auth.GoogleAuthProvider();
const { user, credentials } = "";

export default function Join(){

    const [authorizing, setAuthorizing] = useState(false);

    const handleAuthentication = async () => {
        setAuthorizing(true);

        try {
            const result = await firebase.auth().signInWithPopup(provider);

            const { user, credentials } = result;

            console.log({ user, credentials });

            if(!user){
                throw new Error("There was an issue authorizing");
            }

            Router.push("/");

        } catch (error) {
            setAuthorizing(false);
        }
    }

    return (
        <Page>
            <Row justify="center">
                <Text h1>Inscreve-te já</Text>
            </Row>
            <Row justify="center">
                <Text h3>Carrega em baixo para te inscreveres ou iniciares sessão</Text>
            </Row>
            <Row justify="center">
                <Button onClick={handleAuthentication} loading={authorizing}>Vamos lá</Button>
            </Row>
        </Page>
    )
}