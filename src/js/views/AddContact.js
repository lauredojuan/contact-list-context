import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const [contact, setContact] = useState({
		name: null,
		address: null,
		phone: null,
		email: null
	});
	return (
		<Context.Consumer>
			{(store, actions) => {
				return (
					<div className="container">
						<div>
							<h1 className="text-center mt-5">Add a new contact</h1>
							<form>
								<div className="form-group">
									<label>Full Name</label>
									<input
										type="text"
										className="form-control"
										placeholder="Full Name"
										onChange={e => setContact({ ...contact, name: e.target.value })}
									/>
								</div>
								<div className="form-group">
									<label>Email</label>
									<input
										type="email"
										className="form-control"
										placeholder="Enter email"
										onChange={e => setContact({ ...contact, email: e.target.value })}
									/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input
										type="phone"
										className="form-control"
										placeholder="Enter phone"
										onChange={e => setContact({ ...contact, phone: e.target.value })}
									/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter address"
										onChange={e => setContact({ ...contact, address: e.target.value })}
									/>
								</div>
								<button
									onClick={actions.AddContacts(
										contact.name,
										state.address,
										state.number,
										state.email
									)}
									type="button"
									className="btn btn-primary form-control">
									SAVE
								</button>
								<Link className="mt-3 w-100 text-center" to="/">
									or get back to contacts
								</Link>
							</form>
						</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
};
