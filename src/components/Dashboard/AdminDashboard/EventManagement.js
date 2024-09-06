import React, { useState } from "react";

const EventManagement = () => {
  const initialEvents = [
    {
      id: 1,
      name: "Annual Meetup",
      status: "Ongoing",
      coordinator: "John Doe",
      appointedMembers: ["Alice", "Bob"],
      time: "10:00 AM - 3:00 PM",
      totalBudget: "BDT5000",
    },
    {
      id: 2,
      name: "Charity Fundraiser",
      status: "Upcoming",
      coordinator: "Jane Smith",
      appointedMembers: ["Tom", "Jerry"],
      time: "5:00 PM - 9:00 PM",
      totalBudget: "BDT3000",
    },
    {
      id: 3,
      name: "Tech Conference",
      status: "Upcoming",
      coordinator: "David Lee",
      appointedMembers: ["Michael", "Sarah"],
      time: "9:00 AM - 6:00 PM",
      totalBudget: "BDT10000",
    },
  ];

  const [events, setEvents] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const openModal = (event) => {
    setCurrentEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentEvent(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent({ ...currentEvent, [name]: value });
  };

  const saveUpdatedEvent = () => {
    const updatedEvents = events.map((event) =>
      event.id === currentEvent.id ? currentEvent : event
    );
    setEvents(updatedEvents);
    closeModal();
  };

  const removeEvent = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to remove this project?"
    );
    if (confirmation) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  const addEvent = () => {
    const newEvent = {
      id: events.length + 1,
      name: "New Event",
      status: "New",
      coordinator: "New Coordinator",
      appointedMembers: ["New Member"],
      time: "TBA",
      totalBudget: "BDT0",
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div className="mt-10 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Event Management</h2>

      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4">Event Name</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Coordinator</th>
            <th className="py-2 px-4">Appointed Members</th>
            <th className="py-2 px-4">Time</th>
            <th className="py-2 px-4">Total Budget</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border-t">
              <td className="py-2 px-4">{event.name}</td>
              <td className="py-2 px-4">{event.status}</td>
              <td className="py-2 px-4">{event.coordinator}</td>
              <td className="py-2 px-4">{event.appointedMembers.join(", ")}</td>
              <td className="py-2 px-4">{event.time}</td>
              <td className="py-2 px-4">{event.totalBudget}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => openModal(event)}
                  className="btn btn-warning mr-2 w-20 h-12"
                >
                  Update
                </button>
                <button
                  onClick={() => removeEvent(event.id)}
                  className="btn btn-error w-20 h-12"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={addEvent}
        className="btn btn-primary mt-4 w-28 text-white h-12"
      >
        Add Event
      </button>

      {/* Modal */}
      {isModalOpen && currentEvent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 className="text-xl font-bold mb-4">Edit Event</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Event Name
              </label>
              <input
                type="text"
                name="name"
                value={currentEvent.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Status</label>
              <input
                type="text"
                name="status"
                value={currentEvent.status}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Coordinator
              </label>
              <input
                type="text"
                name="coordinator"
                value={currentEvent.coordinator}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Appointed Members
              </label>
              <input
                type="text"
                name="appointedMembers"
                value={currentEvent.appointedMembers.join(", ")}
                onChange={(e) =>
                  setCurrentEvent({
                    ...currentEvent,
                    appointedMembers: e.target.value.split(","),
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Time</label>
              <input
                type="text"
                name="time"
                value={currentEvent.time}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Total Budget
              </label>
              <input
                type="text"
                name="totalBudget"
                value={currentEvent.totalBudget}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={saveUpdatedEvent}
                className="btn btn-success mr-2 w-20 h-12 text-black"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="btn btn-primary w-20 h-12 text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventManagement;
