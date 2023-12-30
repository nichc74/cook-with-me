import React, { useState } from 'react';
import './SearchDrawer.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button, FormControl } from '@mui/material';
import RoundedTextField from '../TextFields/RoundedTextField';
import SearchContent from './SearchContent';

const SearchDrawer = ({ searching, closeSearch, searchTerm, searchResults, handleSubmit, setSearch}: any) => {

    return (
        <div className={searching ? "search-container" : "search-container-closed"}>
            <div className="search-navbar">
                <Button onClick={closeSearch}><CloseIcon/></Button>
                <form onSubmit={handleSubmit}> {/* Use form element for handling submission */}
                    <FormControl>
                        <RoundedTextField
                            type="search"
                            value={searchTerm}
                            onChange={setSearch}
                            placeholder='Search Recipes'
                        />
                    </FormControl>
                </form>
            </div>

            <div className="search-content-container">
                <div className="search-content">
                    {
                        searchResults && 
                        <SearchContent
                            closeSearch={closeSearch}
                            searchResults={searchResults}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchDrawer;
