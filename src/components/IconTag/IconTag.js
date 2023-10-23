import './IconTag.css'

export default function IconTag({label, icon, value}) {
    return (
        <div className="IconTag-main">
            <div className="IconTag-icon-container">
                {icon}
            </div>
            <div className="IconTag-info">
                {label}
                <div className="IconTag-value"> {value} </div>
            </div>
        </div>
    )
}