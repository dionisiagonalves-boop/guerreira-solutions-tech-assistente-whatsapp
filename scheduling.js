class SchedulingSystem {
    constructor() {
        this.appointments = this.loadAppointments();
    }

    loadAppointments() {
        const storedAppointments = localStorage.getItem('appointments');
        return storedAppointments ? JSON.parse(storedAppointments) : [];
    }

    saveAppointments() {
        localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }

    addAppointment(appointment) {
        this.appointments.push(appointment);
        this.saveAppointments();
    }

    getAppointments() {
        return this.appointments;
    }

    updateAppointment(id, updatedAppointment) {
        const index = this.appointments.findIndex(appointment => appointment.id === id);
        if (index !== -1) {
            this.appointments[index] = updatedAppointment;
            this.saveAppointments();
        } else {
            throw new Error('Appointment not found');
        }
    }

    deleteAppointment(id) {
        this.appointments = this.appointments.filter(appointment => appointment.id !== id);
        this.saveAppointments();
    }
}

// Example usage:
const scheduling = new SchedulingSystem();

// scheduling.addAppointment({ id: 1, title: 'Doctor Appointment', date: '2026-03-01', time: '10:00 AM' });
// console.log(scheduling.getAppointments());
// scheduling.updateAppointment(1, { id: 1, title: 'Doctor Appointment Updated', date: '2026-03-01', time: '11:00 AM' });
// scheduling.deleteAppointment(1);
