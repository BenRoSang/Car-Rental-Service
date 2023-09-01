type PersonProps = {
    nameString: string
    nameNumber: number
    nameBoolean: boolean
    nameSpecific: 'isLoading' | 'isError' | 'isSuccess'
    nameObject: {
        firstName: string
        lastName: string
    }
    nameObjectArray: {
        firstName: string
        lastName: string
    }[]
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Person(props: PersonProps) {
  return (
    <div>
        {props.nameString} <br />
        {props.nameNumber} <br />
        {props.nameBoolean ? 'True' : 'False'} <br />
        {props.nameSpecific} <br />
        {props.nameObject.firstName} {props.nameObject.lastName} <br />
        {
            props.nameObjectArray.map((name, i) => (
                <h2 key={i}>{name.firstName} {name.lastName}</h2>
            ))
        }
        <button onClick={(e) => props.handleClick(e)}>Click</button>
    </div>
  )
}

export default Person