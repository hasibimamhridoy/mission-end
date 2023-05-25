import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items,title,coverImg}) => {

    return (
        <div>
            
            {title && <Cover title={title} desc="" img={coverImg}></Cover>}
            
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <Link to={`/order/${title}`}><button className='btn btn-outline border-b04 mt-4'>Order now</button></Link>

        </div>
    );
};

export default MenuCategory;