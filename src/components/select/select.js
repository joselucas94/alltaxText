



export default function Select(props) {
    return(
        <select name="select" onChange={(event) =>{ console.log(event.target.value)}}>
            {
                props.tipo.map(element => {
                    return <option value={element}>{element.name? element.name : element}</option>
                })
            }
      </select>
        
    )
}





