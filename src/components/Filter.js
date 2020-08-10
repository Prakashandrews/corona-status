import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CountryList from './CountryList'

export default function Filter(props) {
    const [tags, selectedTags] = useState([]);
    function onTagsChange(event, values) {
        selectedTags(values)
    }
    
    return (
        <>
        <div style={{ width: 500, paddingBottom: 20 }}>
            <Autocomplete
                multiple
                options={props.details}
                getOptionLabel={option => option.country}
                //defaultValue={[props.details[0]]}
                onChange={onTagsChange}
                renderInput={params => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Select Country"
                        placeholder="Favorites"
                        margin="normal"
                        fullWidth
                    />
                )}
            />           
        </div>
         <CountryList countries={tags} list={props.details}/>
         </>
    )
}