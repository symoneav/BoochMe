import axios from 'axios'

const FIND_DISTRIBUTORS ='FIND_DISTRIBUTORS'

export const findDistibutors =(itemsWithDistributors)=>({
    type:FIND_DISTRIBUTORS,
    itemsWithDistributors
})


export const findInStock=(item)=>{
    return async dispatch =>{
        try{
        const {data}= await axios.put('/api/map',item)
        dispatch(findDistibutors(data))
        }catch(err){
            console.log('having trouble finding where Kombucha is sold')
        }
    }
}


function kombuchas(state = [],action){
    switch(action.type){
        case FIND_DISTRIBUTORS:
            return action.itemsWithDistributors
        default:return state
    }

}

export default kombuchas