import './IconTag.css'

export default function IconTag({label, icon, value}) {
    return (
        <div className="IconTag-main">
            <div className="IconTag-icon"></div>
            <div className="IconTag-info">
                <b>{label}</b>
                {value}
                {/* <div className="IconTag-value"></div> */}
            </div>
        </div>
    )
}