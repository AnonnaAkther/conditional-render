import React from 'react';

const Users = (props) => {
    const {familiar} = props;

    // 1. Element Variable
    let greeting;
    if(familiar){
        greeting = <h5>Hello Bondhu How are you?</h5>
    }
    else{
        greeting = <h5>Who the Hell you? DGM.</h5>
    }

    // 2. ternary operator
    // condition ? (display this part if condition true) : (if condition false)

    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greeting}
            </div>
            <div>
                <h2>Food</h2>
                {familiar ? <h4>Kacchi Biryani</h4>: <h4>Khuchra Poisa nai</h4>}
            </div>
            <div>
                <h2>a lot of things</h2>
                {
                    familiar ? <div>
                        <h3>My title, Friend</h3>
                        <p>This is paragraph</p>
                    </div>
                    : <div>
                        <h3>Door closed</h3>
                        <p>Chabi harai felsi</p>
                    </div>
                }
            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar && <div>Dosto tomar phone number dao</div>
                }
            </div>
            <div>
                <h2>Share Drink</h2>
                {
                    familiar || <h4>Khamu dabb er pani</h4>
                }
            </div>
        </div>
    );
};

export default Users;