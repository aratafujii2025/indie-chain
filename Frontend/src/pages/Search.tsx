import Header from '../components/Header';
import * as React from 'react';

function SortBy(){
// sort dropdown menu
    const[sort, setSort] = React.useState('popular');
    // how to change position of dropdown arrow? needs to be moved left, padding?
    return (
        <select 
            value={sort} 
            onChange={e => setSort(e.target.value)}
            className="h-8 w-48 text-center rounded-full mx-20 bg-white bg-opacity-50 border-2 border-white"
        > 
            <option value="popular" className=""> Most Popular </option>
            <option value="time"> Newest </option>
            <option value="alphabetical"> Alphabetical </option>
            <option value="trending"> Trending Now </option>
        </select>
    )
}

function Search() {
    // branch called searchPage
    return (
        <div className="bg-cream w-full h-full">
            <Header />
            <h1 className="text-b3 left font-bold italic mx-10 my-5"> Discover </h1>
            <SortBy />
        </div>
    )
}

export default Search