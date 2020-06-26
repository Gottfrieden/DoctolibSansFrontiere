import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import fb from '../services/firebase';
import moment from 'moment';
import produce from 'immer';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../styles/Agenda.css';

const Agenda = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [events, setEvents] = useState([]);
  const userMail = 'vb@gmail.com';

  useEffect(() => {
    const getAllPrescriptions = fb.firestore().collection('prescriptions').onSnapshot(s => {
      setPrescriptions(s.docs.filter(d => d.data().patient.email === userMail).map(prescription => {
        return {
          date: moment.unix(prescription.data().created_at.seconds).format('yyyy-MM-DD'),
          drugs: prescription.data().drugs
        };
      }));
    });

    return () => getAllPrescriptions();
  }, []);

  useEffect(() => {
    setEvents([]);
    const nextState = produce(events, draftEvents => {
      prescriptions.map(p => p.drugs.map(d => {
        for (let i = 0; i < d.traitment_duration; i++) {
          const date = moment(p.date).add(i, 'days').format('yyyy-MM-DD');
          if (d.breakfast) {
            draftEvents.push({
              title: `Take ${d.quantity} ${d.name}`,
              start: `${date}T08:00:00`,
              allDay: false
            });
          }
          if (d.lunch) {
            draftEvents.push({
              title: `Take ${d.quantity} ${d.name}`,
              start: `${date}T12:00:00`,
              allDay: false
            });
          }
          if (d.diner) {
            draftEvents.push({
              title: `Take ${d.quantity} ${d.name}`,
              start: `${date}T19:00:00`,
              allDay: false
            });
          }
        }
      }));
    });
    setEvents(nextState);
  }, [prescriptions]);

  return (
    <main id='agenda-main-container' className='main-container'>
      <FullCalendar
        plugins={[timeGridPlugin, listPlugin, dayGridPlugin]}
        initialView='timeGridDay'
        events={events}
        height='65vh'
        contentHeight='100%'
        slotMinTime='08:00'
        slotMaxTime='20:00'
        expandRows
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay,listWeek'
        }}
      />
    </main>
  );
};

export default Agenda;
