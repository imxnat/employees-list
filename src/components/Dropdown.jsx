import React from 'react'

const Dropdown = ({data}) => {
  return (
    <>
    {data.map((user) => (
    <div className="dropdown-container">
        <div className="dropdown-box">
                <div className="dropdown-tasks">
                  <ul className='dropdown-items'>
                    <li>{`Address: ${user.address.street}`}</li>
                    <li>{`Company: ${user.company.name} `}</li>
                    <li>{user.website}</li>
                  </ul>
            </div>
        </div>
    </div>
    ))}
    </>
  )
}

export default Dropdown