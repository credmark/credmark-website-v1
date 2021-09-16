
const FilteringMenu = ({ onChange, filter }) => {

    return (
        <div className="filtering-menu">
            <div onClick={() =>
                onChange('view', { list: +!filter.view.list })}>
                <svg className="block m-auto my-5" viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg> 
            </div>

        </div>
    )
}

export default FilteringMenu;