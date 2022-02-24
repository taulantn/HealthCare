import React, {  useEffect } from 'react';
import {  Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponents';
import { useStore } from './stores/store';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import { Route } from 'react-router-dom';


function App() {
  const {activityStore} = useStore();
  

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

 

  if(activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <Route path='/' component={HomePage} />
        <Route path='/activities' component={HomePage} /> 
      </Container>

    </>
  );
}

export default observer(App);
