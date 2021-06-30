import React from 'react'
import ContactInfo from './ContacInfo';
import ContactDetails from './ContactDetails';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [
                {
                    name: "AAA",
                    phone: '010-1111-1111'
                },
                {
                    name: "BBB",
                    phone: '010-2222-2222'
                },
                {
                    name: "CCC",
                    phone: '010-3333-3333'
                },
                {
                    name: "DDD",
                    phone: '010-4444-4444'
                },
            ]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        console.log("aaaasdf")
        console.log(this.state.contactData[this.state.selectedKey])
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) {
        this.setState({
            selectedKey: key
        });

        console.log(key, 'is selcetd')
    }

    
    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
                }
            )
            return data.map((contact, i) => {
                return (<ContactInfo
                    contact={contact}
                    key={i}
                    onClick={() => { this.handleClick(i) }} />);
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                < ContactDetails
                    isSelected={this.state.selectedKey !== -1}
                    contact={this.state.contactData[this.state.selectedKey]}
                />
            </div>
        );
    }
}