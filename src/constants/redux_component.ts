const redux = 
`import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Grid} from "@materialui/core"
import * as actions from $storeindex
import useStyles from "./$namestyles"

function $name (props){
  const dispatch = useDispatch()

  const data = useSelector((state)=>state.$store.$storeVariable)

  useEffect(()=>{
    if($condition){
      dispatch(actions.$fetch)
    }
  }, [dispatch])

  return (<Grid></Grid>)

}

export default $name`

export default redux