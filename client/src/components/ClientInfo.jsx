import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa'

export default function ClientInfo({ client }) {
  return (
    <>
        <h5 className="mt-5">Client Information</h5>
        <ul className="list-group">
            <li className="list-geoup-item">
                <FaIdBadge className='icon' /> {client.name}
            </li>
            <li className="list-geoup-item">
                <FaEnvelope className='icon' /> {client.email}
            </li>
            <li className="list-geoup-item">
                <FaPhone className='icon' /> {client.phone}
            </li>
        </ul>
    </>
  )
}
