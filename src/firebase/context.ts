import * as React from 'react';
import { Firebase } from '.';

const FirebaseContext: React.Context<Firebase | null> = React.createContext<Firebase | null>(null);

export default FirebaseContext;
