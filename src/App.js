import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './styles/App.css';

import Home from './pages/Home';
import LoginPatient from './pages/LoginPatient';
import LoginDoctor from './pages/LoginDoctor';
import Header from './components/Header';
import PrescriptionHistory from './pages/PrescriptionHistory';
import NewPrescription from './pages/NewPrescription';
import PatientAccount from './pages/PatientAccount';
import DoctorAccount from './pages/DoctorAccount';
import Agenda from './pages/Agenda';
import SeePrescription from './pages/SeePrescription';
import Connection from './pages/Connection';
import SinglePrescription from './pages/SinglePrescription';
import SingleDoctorPrescription from './pages/SingleDoctorPrescription';
import './fonts/gilroy.css';

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/connection' component={Connection} />
          <Route exact path='/user/patient' component={LoginPatient} />
          <Route exact path='/user/doctor' component={LoginDoctor} />
          <Route exact path='/user/doctor/:id/prescription/new' component={NewPrescription} />
          <Route exact path='/user/doctor/:id/prescription/history' component={PrescriptionHistory} />
          <Route exact path='/user/patient/:id' component={PatientAccount} />
          <Route exact path='/user/doctor/:id' component={DoctorAccount} />
          <Route exact path='/user/patient/:id/agenda' component={Agenda} />
          <Route exact path='/user/patient/:id/prescriptions' component={SeePrescription} />
          <Route exact path='/single-prescription' component={SinglePrescription} />
          <Route exact path='/single-doctor-prescription' component={SingleDoctorPrescription} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
