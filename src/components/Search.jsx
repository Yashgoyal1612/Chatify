import React from 'react'

const Search = () => {
  return (
    <div className='serach'>
      <div className='searchForm'>
        <input type="text" placeholder='Fina a user'/>
      </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="U" />
        <div className='userChatInfo'>
          <span>Yash</span>
        </div>
      </div>
    </div>
  )
}

export default Search
