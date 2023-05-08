import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../redux/categorySlice";

const Category = ({setCategory}) => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories()
        )
    }, [dispatch])
    return (<div className='w-3/12 bg-gray-300 p-4 max-h-screen'>
        <div className="border-b pb-1 px-2 font- font-bold text-3xl">Category</div>
        {categories?.map((category, i) => (
            <div onClick={() => setCategory(category)} style={{textTransform: 'capitalize'}} className='text-lg cursor-pointer hover:bg-gray-200 p-2'
                 key={i}>{category}</div>))}
    </div>)
}
export default Category
