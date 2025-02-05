import React, {useEffect, useState} from 'react';
import {BoxControlUnit, Box, BoxScreen} from '../Сounter/Counter';

type CounterBlockPropsType = {
    startValue: number
    maxValue: number
}

export const CounterBlock = (props: CounterBlockPropsType) => {

    const [value, setValue] = React.useState<number>(props.startValue);


    // useEffect(() => {
    //     setValue(props.startValue)
    // }, [props.startValue])

    //
    const onClickAddValue = () => {
        if(value< props.maxValue) {
            setValue(value + 1);
        }

            setValue(value + 1);

    }
    //
    // const onClickRemoveValue = () => {
    //     setValue(props.startValue);
    // }

    return (
        <Box>
            <BoxScreen>
                {value}
            </BoxScreen>

            <BoxControlUnit>
                <button onClick={onClickAddValue}>inc</button>
                {/*<button onClick={onClickRemoveValue}>reset</button>*/}
            </BoxControlUnit>
        </Box>
    );
};


//{
//    body {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//             background-color: #000;
//             margin: 0;
//         }
//         .container {
//             display: flex;
//             gap: 20px;
//         }
//         .box {
//             border: 2px solid #00ffff;
//             padding: 20px;
//             border-radius: 10px;
//         }
//         .box input {
//             width: 100%;
//             padding: 10px;
//             margin: 5px 0;
//             border: 1px solid #00ffff;
//             border-radius: 5px;
//             background-color: #000;
//             color: #fff;
//             text-align: center;
//         }
//         .box button {
//             width: 100%;
//             padding: 10px;
//             margin: 5px 0;
//             border: 1px solid #00ffff;
//             border-radius: 5px;
//             background-color: #000;
//             color: #fff;
//             cursor: pointer;
//         }
//         .box button:hover {
//             background-color: #00ffff;
//             color: #000;
//         }
//         .box .value {
//             font-size: 24px;
//             color: #ff0000;
//             text-align: center;
//             margin-top: 20px;
//         }
// }