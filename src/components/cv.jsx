import '../styles/cv.css'

function CV ({text}) {
    return <div className='cv'>
        <h2>General Information</h2>
        <div>{text["General Information"][0]}</div>
        <div>{text["General Information"][1]}</div>
        <div>{text["General Information"][2]}</div>
    </div>
}

export default CV