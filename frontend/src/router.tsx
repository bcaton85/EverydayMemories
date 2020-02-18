import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { flash } from 'ionicons/icons';
import submit from './pages/Submit';
import authStatus from './hooks/AuthStatus';
import login from './pages/Login';
import register from './pages/Register';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const Router: React.FC = () => {


  var isLoggedIn: boolean = authStatus();

  return (
    <IonApp>
      <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/submit" component={ submit } exact={true} />
                <Route path="/login" component={  login }  exact={true} />
                <Route path="/register" component={ register  } exact={true} />
                <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
              </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default Router;
