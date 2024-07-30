import {useNavigate} from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <button className='' onClick={goBack}>
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                 viewBox="0 0 16 16">
                <path fill="#868181" fillOpacity="1"
                      d="M10.862 1.529c.26.26.26.682 0 .942L5.333 8l5.529 5.529a.667.667 0 1 1-.943.942L4.391 8.943a1.333 1.333 0 0 1 0-1.886L9.919 1.53c.26-.26.683-.26.943 0Z"></path>
            </svg>
        </button>
    )
}

export default BackButton;
