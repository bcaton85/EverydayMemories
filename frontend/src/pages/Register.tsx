import React, { useState } from 'react';
import ReactDOM from 'react-dom';
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
import authStatus from '../hooks/AuthStatus';
import LoggedIn from '../LoggedIn';

const Register: React.FC = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var isLoggedIn: boolean = authStatus();

    if(isLoggedIn){
        ReactDOM.render(<LoggedIn />, document.getElementById('root'));
        return (<></>);
    }

    const submit = async () => {

    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Register
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
            </IonContent>
        </>
    )
};

export default Register;