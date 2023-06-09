import { createSelector } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { selectFilter } from '../filter/filterSlice';
const inititial = [];

export const selectContacts = createSelector(
  contactsApi.endpoints.getContacts.select(),
  Result => Result?.data ?? inititial
);

export const selectfiltredContact = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
