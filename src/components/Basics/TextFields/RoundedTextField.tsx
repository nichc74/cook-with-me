import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
const RoundedTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        overflow: 'hidden',
        borderRadius: 50,
        width: "100%",
        color: '#ACACAC',
        '& fieldset': {
            borderColor: '#ACACAC',
        },
        '&:hover fieldset': {
            borderColor: '#ACACAC',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ACACAC',
        }
    },
    '& .MuiInputLabel-root' : {
        color: '#ACACAC',
        borderWidth: 2,
        '&.Mui-focused': {
            color: '#1976d2',
        },
    },

    height: "100%",
    width: "300px",
});
  
export default RoundedTextField;