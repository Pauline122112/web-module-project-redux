import React from 'react';
import { connect } from 'react-redux'
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    const {movies}  = props

    return (
        <div className="col">
         
               
                <tbody>
                    {
                        props.movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            
            
            <MovieFooter totalMovies={props.movies.length}/>
        </div>
    );
}

const mapStateToProps = state => {
    
    return ({
        movies: state.movies
    })
}

export default connect(mapStateToProps)(MovieList);