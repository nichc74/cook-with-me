import React from "react";
import IconTag from "../../IconTag/IconTag.js";
import "../../RecipeDetailPage/RecipeDetailPage.css";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const RecipeMetadata = ({metadata}) => {

    return (
        <div className="RecipeDetailPage-main">
            <div className="RecipeDetailPage-header">
                <div className="RecipeDetailPage-header-top">
                    <div className="RecipeDetailPage-image-container">
                        <img
                            className="RecipeDetailPage-image"
                            alt="No Image Found"
                            src={metadata.image}
                        />
                    </div>
                    <div className="RecipeDetailPage-recipeTitle">
                        {metadata.title}
                    </div>
                </div>
                <div className="RecipeDetailPage-header-divider"/>

                <div className="RecipeDetailPage-header-bottom">
                    <IconTag 
                        icon={<LocationOnIcon className="IconTag-icon"/>}
                        value={metadata.cuisine} label="Cuisine"
                    />
                    <IconTag 
                        icon={<DinnerDiningIcon className="IconTag-icon"/>}
                        value={metadata.category} label="Category"
                    />
                    <IconTag 
                        icon={<LocalDiningIcon className="IconTag-icon"/>}
                        value={metadata.serves} label="Serving"
                    />
                    <IconTag 
                        icon={<PunchClockIcon className="IconTag-icon"/>}
                        value={metadata.prep_time} label="Prep Time"
                    />
                    <IconTag 
                        icon={<OutdoorGrillIcon className="IconTag-icon"/>}
                        value={metadata.cook_time} label="Cook Time"
                    />
                    <IconTag 
                        icon={<QueryBuilderIcon className="IconTag-icon"/>}
                        value={metadata.total_time} label="Total Time"
                    /> 
                </div>
                <a href={metadata.source_link}>Source</a>
            </div>
        </div>
    )
}

export default RecipeMetadata;