import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonInput,
    IonList,
    IonItem,
    IonLabel,
    IonButton
  } from '@ionic/react';
import authStatus from '../hooks/AuthStatus';
import LoggedIn from '../router';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';

const Content = styled(animated.div)`

`



const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var isLoggedIn: boolean = authStatus();

    if(isLoggedIn){
        ReactDOM.render(<LoggedIn />, document.getElementById('root'));
        return (<></>);
    }


    const submit = async () => {
        console.log("submitted");
        const body = {
            email: email,
            password: password
        };

        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };

        console.log(params);

        fetch('http://localhost:3000/auth/userExists', params).then( res => {
            res.json().then( data => {
                if(data.status === "success"){
                    // TOOO: route back to main page
                }
                else {
                    // TODO: implement error handling
                }
            })
        });
    }

    return (
        <>
            <Content>
                <form onSubmit={ e => { e.preventDefault(); submit()}}>
                    <IonList>
                        <IonItem>
                            <IonLabel>Email</IonLabel>
                            <IonInput type="email" name="email" onIonChange={ (e: any) => setEmail(e.target.value) }/>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Password</IonLabel>
                            <IonInput type="password" name="password" onIonChange={ (e: any) => setPassword(e.target.value) }/>
                        </IonItem>
                        <IonButton type="submit">Submit</IonButton>
                    </IonList>
                </form>
                <a href="/register">Register</a>
            </Content>
        </>
    )
};

export default Login;