import './article.css'

export default function Article( props ) {
    return(
        <article className='card'>
            {props.children}
        </article>
    )
}