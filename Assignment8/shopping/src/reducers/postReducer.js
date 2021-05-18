

function postReducer(state , action)
{
    switch(action.type)
    {
        case 'ADD_POST':
            return state;
            
        default: return  state;
    }
    return state;
}

export default postReducer;