import React from 'react'
import {Card} from '../styles/SessionCard.styled'
import { Session } from '../api/server';

/*type Session = {
    id: number;
    theme: string;
    duration: number;
    price: number;
    minParticipants: number;
    availableSlots: string[];
};*/

const SessionCard = ({session}: {session: Session}) => {
    return (
        <Card>
        <h2>{session.theme}</h2>
        <p>Duration: {session.duration} minutes</p>
        <p>Price: ${session.price}</p>
        <p>Minimum Participants: {session.minParticipants}</p>
        <div className="slot-list">
            {session.availableSlots.map((slot, index) => (
            <span key={index} className="slot-item">
                {slot}
            </span>
            ))}
        </div>
    </Card>
    )
}
export default SessionCard;