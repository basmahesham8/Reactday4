//we shall use an api and fetch here to get data but we will write it statically for now
const list = [
    {
        id: 1,
        title: 'God Father 1',
        year: 1972
    },
    {
        id: 2,
        title: 'God Father 2',
        year: 1974
    },
    {
        id: 3,
        title: 'God Father 3',
        year: 1990
    }
]

//a collection of actions that apply request to the apis and return the data as an object that hold type and payload
export function getMovies()
 {
    console.log('3- get movies action called')
      //fetch
    return {
        type: 'MOVIES_LIST',
        payload: list
    }
}
export function getMovieById(id){
    console.log("from get movie by id ");
    return{
       
        type:'MOVIE_DETAILS',
        payload:list.find((e)=> e.id===id)? list.find((e)=> e.id===id):null,
    }

    // list.find((i)=>{
    //    return (i===id);
    // })
}
