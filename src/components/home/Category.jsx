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
    return (<div className='sm:w-3/12  w-3/12 bg-gray-300 p-4 @container'>        <div className="border-b pb-1 px-2 font- font-bold sm:text-3xl text-md">Category</div>
        {categories?.map((category, i) => (
            <div onClick={() => setCategory(category)} style={{textTransform: 'capitalize'}} className='sm:text-lg text-sm cursor-pointer hover:bg-gray-200 p-2'
                 key={i}>{category}</div>))}
    </div>)
}
export default Category
