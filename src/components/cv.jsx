import '../styles/cv.css'

function CV ({text}) {
    return <div className='cv'>
        <h2>General Information</h2>
        <div>{text[0]}</div>
        <div>{text[1]}</div>
        <div>{text[2]}</div>
    </div>
}

export default CV