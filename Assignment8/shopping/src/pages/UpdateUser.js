
import UserUpdateForm from '../components/user/UserUpdateForm';
import {useParams} from 'react-router-dom';

const UpdateUser =(props)=>{

    let params = useParams();
    console.log(' user update params = ',params.userId);
    return (
        <UserUpdateForm userId={params.userId}/>
    );
}

export default UpdateUser;
