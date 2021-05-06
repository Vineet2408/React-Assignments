

export function addUser(user)
{
    return {
        type: 'ADD_USER',
        user:user
    }
}

export function deleteUser(index)
{
    return {
        type: 'DELETE_USER',
        index:index
    } 
}

export function updateUser(index,user)
{
    return {
        type : 'UPDATE_USER',
        index:index,
        user:user
    }
}