import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../state/actions';

const Filter = () => {
    const [status, setStatus] = useState(false)
    const dispatch = useDispatch();

    const switching = (item) => {
        dispatch(setFilter(item))
        handleMenu()
    }


    const category = [
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing",
        "all"
    ]
    const handleMenu = () => {
        if (status) {
            setStatus(false)
        } else {
            setStatus(true)
        }
    }

    return (
        <div className='text-center mt-4'>
            <button className=' px-6  py-2 rounded-xl text-lg shadow-lg bg-white  mb-2   ' onClick={handleMenu}>Filter <i class="fa-solid mx-1 fa-caret-down"></i>
            </button>
            {status ? <div className='absolute w-56 shadow-xl  left-0 my-0 mx-auto right-0'>
                <ul className='bg-white  rounded'>
                    {category.map((item) => { return <li key={Math.random()} onClick={() => { switching(item) }} className='p-2 cursor-pointer rounded hover:bg-slate-100'>{item}</li> })}
                </ul>
            </div> : ""}

        </div>
    )
}

export default Filter