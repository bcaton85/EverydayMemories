import React from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonTextarea,
    IonButton
  } from '@ionic/react';

const Submit: React.FC = () => {

    const submit = async () => {

    };

    return (
    <>
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    Submit a memory
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <form onSubmit={ e => { e.preventDefault(); submit()}}>
                <IonList>
                    <IonItem>
                        <IonTextarea rows={6} cols={20} placeholder="Enter any notes here..."></IonTextarea>
                    </IonItem>
                    <IonItem>
                        <input type="file"></input>
                    </IonItem>
                    <IonButton type="submit">Submit</IonButton>
                </IonList>
            </form>
        </IonContent>
    </>
    )
};

export default Submit;