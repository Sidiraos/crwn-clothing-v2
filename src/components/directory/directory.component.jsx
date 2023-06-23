import './directory.styles.scss';
import ItemsContainer from '../item-components/items.component';
function Directory ({categories}) { 
        return (
            <div className="categories-container">
				{categories.map((category) => {
					return (
						<ItemsContainer key={category.id} category={category} />
					);
				})}
			</div>
        )
 }

 export default Directory;