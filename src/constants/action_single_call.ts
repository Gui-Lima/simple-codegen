const singleAction = 
`export const $fetchNameStart = () => {
  return {
    type: A.$FETCH_NAME_START
  }
}

export const $fetchNameSuccess = ($object) => {
  return {
    type: A.$FETCH_NAME_SUCCESS,
    object: object
  }
}

export const $fetchNameFail = () => {
  return {
    type: A.$FETCH_NAME_FAIL
  }
}


export const $fetchName = () => {
  return (dispatch)=>{
    dispatch($fetchNameStart())
    return $API.$method("$url", $optional_proto, $returnedProto)
    .then((response)=>{
      dispatch($fetchNameSuccess(response.toObject()))
    })
    .catch((err)=>{
      dispatch($fetchNameFail())
      console.log(err)
    })
  }
}
`

export default singleAction