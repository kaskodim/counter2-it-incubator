import React, {useEffect} from 'react';
import {BoxControlUnit, Box, BoxScreen, ValuesType} from '../Сounter/Counter';

type CounterBlockPropsType = {
    values: ValuesType
    isError: boolean
    isMassageFlag: boolean
}

export const CounterBlock = (props: CounterBlockPropsType) => {

    const [value, setValue] = React.useState<number>(props.values.start);
    const [isPressedInc, setIsPressedInc] = React.useState<boolean>(false);
    const [isPressedReset, setIsPressedReset] = React.useState<boolean>(false);

    useEffect(() => {
        if (value === props.values.max) {
            setIsPressedInc(true)
        }
    }, [value])

    const onClickAddValue = () => {
        setIsPressedReset(false)
        if (value < props.values.max) {
            setValue(value + 1);
        }
    }

    const onClickRemoveValue = () => {
        setValue(props.values.start);
        setIsPressedInc(false)
        setIsPressedReset(true)
    }

    useEffect(() => {
        setValue(props.values.start)

        if (props.isError || props.isMassageFlag) {
            setIsPressedInc(true)
            setIsPressedReset(true)
        } else setIsPressedInc(false)

        if (value === props.values.max) {
            setIsPressedInc(true)
        }

    }, [props.isError, props.isMassageFlag, props.values]);

    return (
        <Box>
            <BoxScreen>
                {
                    props.isError ? (
                        <span>ошибка</span>
                    ) : props.isMassageFlag ? (
                        <span>нажмите SET</span>
                    ) : (
                        value
                    )
                }
            </BoxScreen>

            <BoxControlUnit>
                <button disabled={isPressedInc}
                        onClick={onClickAddValue}>inc
                </button>
                <button disabled={isPressedReset}
                        onClick={onClickRemoveValue}>reset
                </button>
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