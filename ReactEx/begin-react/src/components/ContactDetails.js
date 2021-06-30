import React from 'react'

export default class ContactDetails extends React.Component {
    render() {
        console.log(this.props)

        const details = (
            <div>
                <p>{this.props.contact}</p>
            </div>
        );
        const blank = (<div>Not Selected </div>);

        return (
            <div>
                {this.props.isSelected ? details : blank}
            </div>
        );
    }
}