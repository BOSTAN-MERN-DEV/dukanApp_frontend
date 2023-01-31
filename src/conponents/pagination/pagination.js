import React from 'react'
import './pagination.css'

export  const Pagination=()=>{

  return (
    <section>
        <div className='pagination-wrapper'>
            <div className='pagination-box'>
                <ul className="pagination-list">
                <li className='page-item'>
                        <a href='' label=""><i className='fas fa-chevron-left'/></a>
                    </li>
                    <li className='page-item'>
                        <a className='active' href='' label="">1</a>
                    </li>
                    <li className='page-item'>
                        <a href='http://localhost:3000/category' label="">2</a>
                    </li>
                    <li className='page-item'>
                        <a href='' label=""><i className='fas fa-chevron-right'/></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    
  )
}
