
const Input = ({placeholder,...reeminingProps}) => {
  return (
       <input type="text" {...reeminingProps} placeholder={placeholder} size={30} className="py-1 form-control" style={{width:'250px',height:'35px', }}/>
  )
}

export default Input
