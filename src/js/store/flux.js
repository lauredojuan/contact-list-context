const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			// addContact: (...args) => {
			addContact: (name, address, phone, email) => {
				const store = getStore();
				const newContact = [{ name, address, phone, email }];
				const updatedContact = store.contacts.concat(newContact);
				setStore({ contacts: updatedContact });
			},
			deleteContact: i => {
				const store = getStore();
				const updatedContact = store.contacts.filter((v, index) => index !== i);
				setStore({ contacts: updatedContact });
			},

			editContact: (name, address, phone, email, id) => {
				const store = getStore();
				const modContact = { name, address, phone, email };
				const updatedContact = store.contacts.map((value, index) => (index === id ? modContact : value));
				setStore({ contacts: updatedContact });
			}
		}
	};
};

export default getState;
