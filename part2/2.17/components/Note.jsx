const Note = ({ person, deleteContact }) => {
  return (
    <li>{person.name} {person.number} <button type="submit" onClick={deleteContact}>delete contact</button></li>
  )
}

export default Note