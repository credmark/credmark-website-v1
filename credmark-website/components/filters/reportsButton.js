import React from "react";

function ReportsButton({button, filter}){
    return (
        <div className="px-5 max-w-5xl md:m-auto">
            <div className="pt-10 border-b-1 border-gray-700 block m-auto md:m-auto space-x-5 md:space-x-20">
                <button className="border-b-2 border-transparent hover:border-purple pb-5" type="button" onClick={()=> filter('New')}>New Reports</button>
                <button className="border-b-2 border-transparent hover:border-purple pb-5" type="button" onClick={()=> filter('Historical')}>Historical Reports</button>
          </div>
          </div>
    )
}

export default ReportsButton;