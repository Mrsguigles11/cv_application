import '../styles/cv.css'

function CV ({text}) {
    return <div className='cv'>
        <h2>General Information</h2>
        <div>{text}</div>
    </div>
}

export default CV