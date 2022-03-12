import React from 'react'

const CardRepo = ({ item }) => (
  <div key={item.id}
    className='shadow rounded-md w-30 m-10 p-10'
  >
    <div className='flex'>
      <img src={item.owner.avatar_url} alt={item.name} width={50} height={50} className='rounded-sm mr-10' />
      <div className='p-5 w-20'>
        <a href={item.html_url} className='color-primary text-12 text-wrap' target="_blank" rel="noreferrer">
          {item.name}
        </a>
        {
          item.fork && <div className='text-10'>forked from other repo</div>
        }
      </div>
    </div>

    <div className='text-10 w-20 text-wrap mt-10'>
      {item.description}
    </div>
    {
      item.language &&
      <div className='flex align-center mt-10'>
        <div className='dot mr-10' /> {item.language}
      </div>
    }
    <div>
      <p className='text-10'>
        Updated on : {new Date(item.updated_at).toDateString()}
      </p>
      <p className='text-10'>
        Created on : {new Date(item.created_at).toDateString()}
      </p>
    </div>
  </div>

)

const ListRepo = ({ data }) => {
  return (
    <div className='flex justify-center wrap mt-10'>
      {
        data.status === 'Found' && data.data.map((item) => (
          <CardRepo item={item} />
        ))
      }
    </div>
  )
}

export default ListRepo