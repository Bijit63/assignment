import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <Link  to={`/details/${props.id}/${props.title}`}>


    <div  id='hhh' className=' rounded-[3px] md:my-[20px] flex md:mx-[18px] mx-[5px] my-[6px] md:w-[190px] h-[170px] max-w-[120px] md:max-w-[190px] md:h-[270px]  flex-col  ' >



<p id='ss' className=' rounded-[3px] max-h-[170px]  md:max-h-[270px]' > <img className=' min-h-[170px] max-h-[170px] max-w-[120px] min-w-[120px] rounded-[3px] md:min-h-[270px] md:max-h-[270px] md:min-w-[190px]  ' src={props.image===null?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png':'https://image.tmdb.org/t/p/original'.concat(props.image)} alt="" /></p>
{/* <p className=' rounded-[3px]  max-h-[260px]' > <img className=' rounded-[3px]  max-h-[260px] min-w-[180px] ' src={'https://image.tmdb.org/t/p/original'.concat(movie.poster_path)} alt="" /></p> */}



<div className=' md:text-[12px] text-[11px] font-medium text-center  text-white flex flex-col items-center justify-center  -translate-y-[170px] md:-translate-y-[270px]   '>






</div>



</div>


        </Link> 
  )
}

export default Card
