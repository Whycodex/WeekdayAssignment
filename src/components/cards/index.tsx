import React from 'react'
import JobCard from './JobCard'
import { Grid } from '@mui/material'

const arr = [1,2,3,4,5,6,7,8,9,10]
const Card = () => {
  return (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>{
      arr.map((_,index)=>{
        return <JobCard key={index} />
      })
    }
    </Grid>
  )
}

export default Card