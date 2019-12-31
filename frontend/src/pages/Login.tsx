import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {
    IonApp, 
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
import Submit from './Submit';
import authStatus from '../hooks/AuthStatus';
import LoggedIn from '../LoggedIn';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var isLoggedIn: boolean = authStatus();

    if(isLoggedIn){
        ReactDOM.render(<LoggedIn />, document.getElementById('root'));
        return (<></>);
    }


    const submit = async () => {

        // TODO: make call to backend

        var loggedIn: boolean = true;

        if(loggedIn){
            ReactDOM.render(<LoggedIn />, document.getElementById('root'));
        }
    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Login
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <form onSubmit={ e => { e.preventDefault(); submit()}}>
                    <IonList>
                        <IonItem>
                            <IonLabel>Email</IonLabel>
                            <IonInput type="email" name="email" onChange={ e => setEmail("")  }/>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Password</IonLabel>
                            <IonInput type="password" name="password" onChange={ e => setPassword("")  }/>
                        </IonItem>
                        <IonButton type="submit">Submit</IonButton>
                    </IonList>
                </form>
                <a href="/register">Register</a>
            </IonContent>
        </>
    )
};

export default Login;