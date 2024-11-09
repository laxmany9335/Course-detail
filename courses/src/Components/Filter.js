import React from 'react'
import { filterData } from '../data'

function Filter(props) {
    let filterData = props.filterData;

  return (
    <div>
         {
            filterData.map((data)=> (
             <button key={data.id}>{data.title}</button>
            ))
         }
    </div>
  )
}

export default Filter