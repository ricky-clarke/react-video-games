import { useEffect, useState } from "react";
import './filters.css';

const Filters = () => {

const [getPlatforms, getPlatformsHandler] = useState([null]);
const [parentPlatform, getParentPlatform] = useState('all');

const platformHandleChange = (e) => {
   getParentPlatform(e.target.value)
}

useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch('https://api.rawg.io/api/platforms/lists/parents?key=c8ad2afd2f094010ba6a101b133fb6b2');
            const json = await response.json();
            getPlatformsHandler(json);
        } catch (e) {
            console.error(e);
        }
    };
    fetchData();
}, []);


    return ( 
        <>
            <div className="filters my-8">
                <label>Filter</label>

                {/* <p>{parentPlatform}</p> */}
                {/* 
                    {getPlatforms && getPlatforms.results?.map((platform, i) => {
                        return(
                            <div key={i}>
                                {platform.name}
                                { platform.platforms?.map((child, count) => {
                                    return (
                                        <p key={count}>{child.name}</p>
                                    )
                                })}
                            </div>
                        )
                    }) } */}

                <select name="" onChange={platformHandleChange}>
                    <option default>Platform</option>
                        {getPlatforms && getPlatforms.results?.map((platform, i) => {
                            return(
                                <option key={i} value={i}>
                                    {platform.name}
                                </option>
                            )
                        }) }
                </select>

                <select>
                    <option default>All (child)</option>

                        {getPlatforms && getPlatforms.results?.map((platform, i) => {

                        const test = i;

                            return(
                                // <option>{platform.platforms[0].name}</option>
                                platform.platforms?.map((child, count) => {

                                    return (
                                         <option key={count}>{child.name} - {test}</option>
                                        // <option key={count}>{getPlatforms.results[1].platforms[1].name}</option>
                                    )
                                })
                            )
                    }) }
                </select>

            </div>
           
        </>
     );
}
 
export default Filters;
