import arrowIcon from "../assets/arrow.png"
import avatar from "../assets/avatar.svg"
// import Dropdown from './Dropdown'

const Card = ({ search }) => {
  // const [active, setActive] = useState(false)

  return (
    <>
    { search.length !==0 && ( search.map((user) => (
      <div key={user.id} className='card-container'>
      <div>
          <img className="card-image" src={avatar} alt="User profile" />
      </div>

      <div className="card-contact__info">
          <span className='card-contact__info--name'>{user.name}</span>
          <ul className='card-contact__info--details'>
              <li>{user.phone}</li>
              <li>{user.email}</li>
          </ul>
      </div> 
      <div className="dropdown-arrow">
        <div>
              <img src={arrowIcon} alt="icon" />
        </div>
      </div>
      {/* <Dropdown data={data} /> */}
  </div>
  )))}
  </>
  )
}


export default Card