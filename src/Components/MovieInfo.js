
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieInfo = () => {

    let paramsID = useParams().id;
    let paramsName = useParams().name;

    const [details, setdetails] = useState({})
    const [year,setyear] = useState()
    const [rating,setrating] = useState()
    const [genre,setgenre] = useState([])










    
    useEffect(() => {


        //TO GET THE DETAILS,YEAR,GENRE
  
  
       
        // eslint-disable-next-line
          fetch(`https://api.themoviedb.org/3/movie/${paramsID}?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US`).
          then(data=> {
            return data.json()}).then(info=> {setdetails(info);
  
              const date= new Date(info.release_date);
              setyear(date.getFullYear());
              const rate = info.vote_average;
              setrating(rate.toString().slice(0,3));
            
              
              let secondElements = info.genres.map(obj => obj.name).join(' , ');
              setgenre(secondElements);
              
             
              
  
  
              // TO GET THE BACKDROP IMAGE
               
                
                let a= 'https://image.tmdb.org/t/p/original'.concat(info.backdrop_path);
               
                document.getElementById('backiteminfo').style=`background: url(${a}); background-repeat: repeat ;background-size: 100vw 100% ; height: 100%;box-shadow: inset 0px -250px 900px  ; `
              }) 
             
  
          
          // eslint-disable-next-line 
        },[] )  




  return (
    <div  className='min-h-[100vh] text-white '  >

    <div id='iteminfomain' className={`min-h-[100vh] flex flex-col mx-auto `} >

    








   


    {/* Upper Part  */}

    <div id='drop' className='  ' >

    <div id= 'backiteminfo' className='  overflow-hidden  ' ></div>

   

    <div id='iteminfo' className='   text-white flex mx-auto md:mt-[30px] mt-[20px] w-fit  ' >

  

       <div className=' md:px-[20px] md:max-w-[820px]  md:pr-[60px] ' >







        {/* HEADING */}


      <h1 id='infotitle' className='  h-fit py-2  text-center md:text-left mx-auto text-2xl  md:text-4xl   ' >
          {paramsName +  " ( " +year+ " )"}
      </h1>


      {/* GENRE PART  */}

      <div  className='   md:my-3 my-1  text-center md:text-left  '>
      <div className=' border-t-2 md:pt-[15px] py-[5px]  '>
        <span className='border-2 text-xs md:text-base rounded-md mr-[10px] px-[4px] py-[2px] md:px-[5px] md:py-[2px]' >{details.adult===false?"PG - 13":"R - Rated"}</span>
        <span id='infogenre' className=' text-sm md:text-lg md:px-[4px] md:ml-[20px] md:pt-[3px]'>
        
          {genre}
          </span>
      </div>
      


      </div>




      {/* IMAGE PART FOR SMALLER SCREEN */}
    
      <div className='flex md:hidden flex-col items-center justify-center' >
      <img id='smallimg' className='  border-2 shadow-xl max-h-[430px] min-h-[430px]  max-w-[300px]  min-w-[300px] ' src={'https://www.themoviedb.org/t/p/w440_and_h660_face'   +details.poster_path} alt="" />
          
      </div>




      <div className=' text-center md:text-left mx-[10px] md:mx-0  mt-6 border-2 ' >
         <p className=' md:text-xl bg-slate-800 text-white font-serif font-bold border-b-2 px-[10px] py-[5px]' >Summary </p> 
          <p id='infosummary' className=' md:mt-[5px] px-[11px] py-[4px]  ' >{details.overview}</p>  
      </div >




        <div className='flex flex-col justify-center md:items-start items-center mt-[10px]' >     
      <div className=' flex  md:my-[6px] my-[5px] items-center    ' >  <p className='font-semibold  md:text-lg border-2 bg-slate-800 text-white px-2 w-[100px]     ' > {details.status}  </p>   <p className='border-r-2 border-y-2 py-[2px]  px-2 w-[140px] text-sm md:text-base '>{details.release_date}</p> </div>
      <div className=' flex  md:my-[6px] my-[5px] items-center        ' >  <p className='font-semibold  md:text-lg border-2 bg-slate-800 text-white px-2 w-[100px]   ' >Runtime   </p> <p className='border-r-2 border-y-2 py-[2px] px-2 w-[140px] text-sm md:text-base '> {details.runtime} minutes</p> </div>
      <div className=' flex  md:my-[6px] my-[5px] items-center         ' >  <p className='font-semibold  md:text-lg border-2 bg-slate-800 text-white px-2 w-[100px]  ' >Ratings   </p> <p className='border-r-2 border-y-2 py-[2px]   px-2 w-[140px] text-sm md:text-base '> {rating} ({details.vote_count})</p> </div>
      
        </div>
      



      
      </div>
















        {/* IMAGE PART FOR BIGGER */}

    
      <div className='hidden md:flex flex-col' >

        <div  className=' hidden md:flex items-center justify-start mx-[20px]  '>

        

     


        <div id='sliderposter' className='  lg:w-[370px] md:w-[300px]  flex  scroll-smooth whitespace-nowrap  overflow-hidden ' >

         
      <img id='bigimg' className='  border-2 shadow-xl lg:max-h-[490px] lg:min-h-[490px] lg:max-w-[370px]  lg:min-w-[370px] md:max-h-[420px] md:min-h-[420px] md:max-w-[300px]  md:min-w-[300px] ' src={'https://www.themoviedb.org/t/p/w440_and_h660_face'   +details.poster_path} alt="" />
          


        </div>
      


        </div>




      </div>



       </div>



       </div>

































      





</div>



  </div>
  )
}

export default MovieInfo
