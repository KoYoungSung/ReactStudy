import React from 'react'

export default class Hello extends React.Component {

    static defaultProps = {
        name: 'k'
    };

    render() {
        
        const { color, name, isSpecial } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }

}

// Hello.defaultProps = {
//     name: '이름없음'
//   };