 const intialState={

    Element:{

    }
 }

 export default function RootReducer(state=intialState,action){
    switch(action.type){
        
        case 'ADD_ELEMENT':
            
           state.Element[action.payload[0]]=action.payload[1]
           
           console.log('add',state.Element)
            return({Element:state.Element})
        
            case 'EDIT_ELEMENT':
                state.Element[action.payload[0]]=action.payload[1]
                console.log('edit',state.Element)
                return({Element:state.Element})


            case 'DELETE_ELEMENT':
                 delete state.Element[action.payload[0]]
                  return({Element:state.Element})
      

        default:
           return({Element:state.Element})    
    }
 }