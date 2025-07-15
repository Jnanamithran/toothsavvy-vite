import React, { createContext, useContext, useState } from 'react';

const RescheduleContext = createContext();

export const RescheduleProvider = ({ children }) => {
  const [rescheduleAppointment, setRescheduleAppointment] = useState(null);

  return (
    <RescheduleContext.Provider value={{ rescheduleAppointment, setRescheduleAppointment }}>
      {children}
    </RescheduleContext.Provider>
  );
};

export const useReschedule = () => useContext(RescheduleContext);
