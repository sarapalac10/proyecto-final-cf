import EventoHeader from "./components/EventoHeader";

const EventoLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <EventoHeader />
            <main>{children}</main>
        </>
    )
}

export default EventoLayout;