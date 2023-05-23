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

        </div>
    );
};

export default MenuCategory;