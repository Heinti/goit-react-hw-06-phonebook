import { useSelector, useDispatch } from "react-redux"
import {increment, decrement} from '../redux/store'

export const Test =()=>{
    const dispatch = useDispatch();
    const value = useSelector(state => state.myValue)


    return(
        <>
        {value}
        <button onClick={()=> dispatch()}>Increment</button>
        </>
    )
}