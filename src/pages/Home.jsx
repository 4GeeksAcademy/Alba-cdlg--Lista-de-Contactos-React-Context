import { FaEdit, FaTrash, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import useGlobalReducer from "../context/useGlobalReducer.jsx";

export const Home = () => {
	const contacts = [
		{
			id: 1,
			name: "Mike Anamendolla",
			address: "5842 Hillcrest Rd",
			phone: "(870) 288-4149",
			email: "mike.ana@example.com",
			image: "https://randomuser.me/api/portraits/men/1.jpg"
		},
	];

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className="card">
				{contacts.map((contact) => (
					<div key={contact.id} className="card-body border-bottom d-flex align-items-center">
						<img 
							src={contact.image}
							alt={contact.name}
							className="rounded-circle"
							style={{width: "100px", height: "100px", objectFit: "cover", marginRight: "20px"}}
						/>
						<div className="flex-grow-1 text-start">
							<h5>{contact.name}</h5>
							<p className="mb-1"><FaMapMarkerAlt className="me-2" />{contact.address}</p>
							<p className="mb-1"><FaPhone className="me-2" />{contact.phone}</p>
							<p className="mb-0"><FaEnvelope className="me-2" />{contact.email}</p>
						</div>
						<div className="ms-3">
							<FaEdit className="me-3" style={{cursor: "pointer"}}/>
							<FaTrash style={{ cursor: "pointer" }} />
						</div>				
					</div>
				))}			
			</div>
		</div>
	);
}; 