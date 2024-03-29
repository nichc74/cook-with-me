import React, { useEffect, useState } from "react";
import InstructionalComponent from "./InstructionalComponent";
import RecipeComponent from "../../../Basics/RecipeComponent/RecipeComponent";
import {updateRecipeInstructionalComponent} from  '../../../../store/actions/recipeActions.js';
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {newId, createNewItems} from '../../../../helpers/generateNewItems.js';

interface InstructionalComponentProps {
    id: string,
    componentName: string
    instructions: Array<Object>
}

interface RecipeFormProps {
    instructionalElements: Array<InstructionalComponentProps>
}

const InstructionForm = ({instructionalElements}: RecipeFormProps) => {
    const dispatch = useDispatch();
    const [instructionalComponent, setInstructionalComponent] = useState(instructionalElements || [ {id: newId(),  componentName: "", instructions: createNewItems(6, { id: "", description: "", image: ""}) }]);
   
    useEffect(() => {
        dispatch(updateRecipeInstructionalComponent(instructionalComponent));
    }, [instructionalComponent]);

    const addNewComponent = () => {
        setInstructionalComponent([...instructionalComponent, { id: newId(), componentName: "", instructions: createNewItems(6, { id: "", description: "", image: ""}) }]);
    }

    const removeComponent = (index: Number) => {
        const updatedComponents = instructionalComponent.filter((_, idx) => idx !== index);
        setInstructionalComponent(updatedComponents);
    }

    const updateComponent = (updatedComponent: InstructionalComponentProps, index: number) => {
        let updatedInstructions = instructionalComponent.map((component, idx) => {
            if (index === idx) {
                return {
                    ...component,
                    componentName: updatedComponent.componentName,
                    instructions: updatedComponent.instructions,
                };
            }
            return component;
        })
        setInstructionalComponent(updatedInstructions);
    }

    return(
        <div>
            <h1> Instructions </h1>
            {
                instructionalComponent.map((component: InstructionalComponentProps, index) => (
                    <InstructionalComponent
                        key={index}
                        index={index}
                        instructionalComponent={component}
                        removeComponent={removeComponent}
                        updateComponent={updateComponent}
                    />
                ))
            }
            <Button fullWidth variant="contained" onClick={() => addNewComponent()}>Add Instructional Component</Button>
        </div>
    )
}

export default InstructionForm;