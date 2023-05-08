const Sorting = ({setSort}) => {
    return (<div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
        <select defaultValue="Select" onChange={e => setSort(e.target.value)} className='bg-white-200 py-3 px-5' name=""
                id="">
            <option disabled>Select</option>
            <option value="inc">Price : Low to High</option>
            <option value="dec">Price : High to Low</option>
        </select>
    </div>)
}
export default Sorting
