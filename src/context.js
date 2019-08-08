import React, {useState, useEffect} from "react";
import axios from "axios";

export const Context = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SEARCH_TRACKS':
//       return {
//         ...state,
//         movies: action.payload,
//         heading: 'Search Results'
//       };
//     default:
//       return state;
//   }
// };

export function ContextController({children}) {
    let intialState = {
        movies: [],
        heading: ""
        // dispatch: action => this.setState(state => reducer(state, action))
    };

    const [state, setState] = useState(intialState);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_POPULAR_KEY}`
            )
            .then(res => {
                setState({
                    movies: res.data.results,
                    heading: "Popular Movies"
                });
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
}
