import React from 'react';
import { Button } from 'reactstrap';

// class Window extends Component {
//     constructor(props) {
//         super(props);
//         console.log(props, 'props')
//         // this.handleClick = this.handleClick.bind(this); // Bind the method
//         // this.toggleFrames = this.toggleFrames.bind(this);
//     }

//     // handleClick() {
//     //     console.log("button clicked");
//     // }
//     // toggleFrames(){
//     //     console.log("attempting to toggle frames");
//     // }

//     render() {
//         const { toggleFrame, isFrameOne = this.props} = this.props
//         return (
//             <div>
//                 Window
//                 <h2>{isFrameOne ? 'Frame One' : 'Frame Two'}</h2>
//                 <Button color="primary" onClick={this.toggleFrame}>
//                     Click me
//                 </Button>
//             </div>
//         );
//     }
// }

const Window = ({ toggleFrame, isFrameOne }) => {
    return (
        <div>
            <h2>{isFrameOne ? 'Frame One' : 'Frame Two'}</h2>
            <Button color="primary" onClick={toggleFrame}>
                Toggle Frame
            </Button>
        </div>
    );
};

export default Window;