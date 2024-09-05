import React, { useState } from "react";

const EventManagement = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Annual Meetup",
      status: "Ongoing",
      coordinator: "John Doe",
      appointedMembers: ["Alice", "Bob"],
      time: "10:00 AM - 3:00 PM",
      totalBudget: "$5000",
    },
    {
      id: 2,
      name: "Charity Fundraiser",
      status: "Upcoming",
      coordinator: "Jane Smith",
      appointedMembers: ["Tom", "Jerry"],
      time: "5:00 PM - 9:00 PM",
      totalBudget: "$3000",
    },
  ]);

  const removeEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const updateEvent = (id) => {
    // Dummy update logic, replace this with actual logic when integrating with backend
    const updatedEvents = events.map((event) =>
      event.id === id ? { ...event, status: "Updated" } : event
    );
    setEvents(updatedEvents);
  };

  const addEvent = () => {
    const newEvent = {
      id: events.length + 1,
      name: "New Event",
      status: "New",
      coordinator: "New Coordinator",
      appointedMembers: ["New Member"],
      time: "TBA",
      totalBudget: "$1000",
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Event Management</h2>

      {events.map((event) => (
        <div key={event.id} className="card bg-gray-100 shadow-lg p-4 mb-4">
          <h3 className="text-xl font-semibold">{event.name}</h3>
          <p>
            <strong>Status:</strong> {event.status}
          </p>
          <p>
            <strong>Coordinator:</strong> {event.coordinator}
          </p>
          <p>
            <strong>Appointed Members:</strong>{" "}
            {event.appointedMembers.join(", ")}
          </p>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Total Budget:</strong> {event.totalBudget}
          </p>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => updateEvent(event.id)}
              className="btn btn-warning"
            >
              Update
            </button>
            <button
              onClick={() => removeEvent(event.id)}
              className="btn btn-error"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <button onClick={addEvent} className="btn btn-primary mt-4">
        Add Event
      </button>
    </div>
  );
};

export default EventManagement;
