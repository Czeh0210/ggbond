'use client';

import { createContext } from 'react';

export const LocationContext = createContext({
  currentLocation: 'johor',
  setCurrentLocation: (location: string) => {},
  hasFlightTicket: false,
  setHasFlightTicket: (has: boolean) => {},
  notification: '',
  setNotification: (message: string) => {},
}); 