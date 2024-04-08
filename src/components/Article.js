import './article.css'

export default function Article( props ) {
    return(
        <article className='card'>
            <div className='cardImageContainer'>
                <img alt='test' src={props.image}></img>
            </div>
            <div className='cardTextContainer'>
                {props.children}
            </div>
        </article>
    )
}