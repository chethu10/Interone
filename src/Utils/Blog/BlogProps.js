import PropTypes from "prop-types";


function BlogProps(props){
    return(
        <div>
            <img src={props.image} alt=""/>
            {props.content}
            {props.main}
        </div>

    )
}
BlogProps.prototype={
image:PropTypes.string,
content:PropTypes.string,
main:PropTypes.string

}
export default BlogProps;