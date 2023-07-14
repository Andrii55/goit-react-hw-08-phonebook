import { createSelector } from '@reduxjs/toolkit';
export const selectLoading = state => state.contacts.loading;

export const selectFilter = state => state.filter.value;

export const selectAllContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
