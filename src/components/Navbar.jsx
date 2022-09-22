import React from 'react'
import style from "../Styles/Navbar.module.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Navbar = () => {
  return (
    <div className={style.box}>
      <div>
        
     <img className={style.imge} src="https://english.sakshi.com/sites/default/files/article_images/2022/08/31/job-1661914197.jpg" alt="Apple" />
        </div>  
     <div>
        
     <TextField id="outlined-basic" label="Search Role"  variant="outlined" /> 
     <Button variant="contained">Search</Button>
     
        </div>  
     <div>
        
        </div>  
    </div>
  )
}

export default Navbar
