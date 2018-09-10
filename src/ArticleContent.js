import React from 'react';
export default (props) =>{
    return (
        <div>
            <div className="title">
                {props.title}
            </div>
            <div className="content">
                {props.text}
            </div>
        </div>
    )
}
// export default class extends React.Component  {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div>
//                 <div className="title">
//                     {this.props.title}
//                 </div>
//                 <div className="content">
//                     {this.props.text}
//                 </div>
//             </div>
//         )
//     }
// }