import { Autocomplete, TextField } from "@mui/material";

function Searchbar() {
    return <>
        <Autocomplete
            disablePortal
            options={[]}
            sx={{ width: 300, color: 'white' }}
            renderInput={(params) => <TextField {...params} label="Search..." />}
        />
    </>
}

export default Searchbar;