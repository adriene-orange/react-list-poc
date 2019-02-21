import React from 'react';
// import WarningBanner from './banners/warning';
// import DiscountBanner from './banners/discount';
// import SelectBox from './selectBox';
// import ItemDescription from './itemDescription';
// import UnitOfMeasureContainer from './unitOfMeasureContainer';
// import FormattedPrice from './formattedPrice';
// import DeleteItemButton from './deleteItemButton';
// import ItemImage from './itemImage';

const ListItemContent = ({ item }) => {
    const {
        name,
        description,
        race,
        mainClass,
        subClass,
        abilities,
    } = item;

    // return (
    //     <React.Fragment>
    //         <WarningBanner warnings={warnings} />
    //         <div className="inner-container">
    //             <SelectBox isSelected={isSelected} />
    //             <ItemImage imageUrl={imageUrl} />
    //             <ItemDescription shortDescription={shortDescription} longDescription={longDescription} />
    //             <DeleteItemButton />
    //             <UnitOfMeasureContainer quantity={quantity} unitOfMeasure={unitOfMeasure} />
    //             <FormattedPrice price={retailPrice} />
    //             <DiscountBanner discountData={discountData} />
    //         </div>
    //     </React.Fragment>
    // );
    return <div>
        {name}
        {description}
        {race}
        {mainClass}
        {subClass}
    </div>

}

export default ListItemContent;