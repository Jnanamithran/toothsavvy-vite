// RescheduleContext.jsx
import React, { createContext, useContext, useState } from 'react';

const RescheduleContext = createContext();

export const useReschedule = () => useContext(RescheduleContext);

export const RescheduleProvider = ({ children }) => {
  const [isRescheduling, setIsRescheduling] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <RescheduleContext.Provider value={{ isRescheduling, setIsRescheduling, selectedAppointment, setSelectedAppointment }}>
      {children}
    </RescheduleContext.Provider>
  );
};
