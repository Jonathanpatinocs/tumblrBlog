/* eslint-disable react/prop-types */
const PostBlock = ({summary, images}) => {
    return (
        <div>
            {images.map(img => {
                <img src={img}/>
            })}
            <p>{summary}</p>
        </div>
    )
}

export default PostBlock