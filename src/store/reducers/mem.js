import { mems } from '../../assects/data/mems';

const initialState = {
    items: mems
};
export const memReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SET_UPVOTE': {
        const id = action.payload;
        return{
            ...state,
            items: state.items.map((content,i) => content.id === id  ? 
                {
                    ...content, 
                    upvotes: content.upvotes + 1
            
                }
                : content
            )
        }
    }
    case 'SET_DOWNVOTE': {
        const id = action.payload;
        return{
            ...state,
            items: state.items.map((content) => content.id === id  ? 
                {
                    ...content, 
                    downvotes: content.downvotes + 1
            
                }
                : content
            )
        }
    } 
    case 'CHANGE_FAVORITE': {
        const id = action.payload;
        return{
            ...state,
            items: state.items.map((content) => content.id === id  ? 
                {
                    ...content, 
                    favorite: !content.favorite
            
                }
                : content
            )
        }
    } 
    default: {
        return state;
    }
    }
};