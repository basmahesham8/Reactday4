

// {
//     type:'MOVIES_LIST',
//     payload:[
//         {
//             id:1,
//             title:'God Father 1',
//             year:1972
//         },
//         {
//             id:2,
//             title:'God Father 2',
//             year:1974
//         },
//         {
//             id:3,
//             title:'God Father 3',
//             year:1990
//         }
//     ]
// }



//reducer or pure function
//set state with null to initalize the state at first
export function movieDetails (state = null,action)
//state of store to update it or action that hold the obj that contaion type and payload
{
    console.log("action "+action);
//1- check if the action is the type I want to handle in this reducer 
if (action.type ==="MOVIE_DETAILS"){
    console.log('4- get movies reducer called ')
     return action.payload;
}
//if not retuern the state without change 
//intially it return null then moviesList in state will be null
console.log('1- init action')
return state;

}