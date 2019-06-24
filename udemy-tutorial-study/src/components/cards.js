import React from 'react'
import Commentary from "./Commentary"

export default function Cards(props) {
    return (
        <div>
            <div class="ui cards">
                <div class="card">
                    <div class="content">
                    {/* <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/> */}
                    <div class="header">
                        Do you want to approve this comment ?
                    </div>
                        <Commentary
                            name={props.name} 
                            time={props.time}
                            comment={props.comment}
                        />
                    {/* <div class="meta">
                        Friends of Veronika
                    </div>
                    <div class="description">
                        Elliot requested permission to view your contact details
                    </div> */}
                </div>
                    <div class="extra content">
                    <div class="ui two buttons">
                        <div class="ui basic green button">Approve</div>
                        <div class="ui basic red button">Decline</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
