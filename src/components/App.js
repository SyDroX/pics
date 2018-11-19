import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Loader from './Loader';

class App extends React.Component {
    state = {images: [], submitted: false};

    onSearchSubmit = async term => {
        this.setState({submitted : true});

        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            },
        })/*.then(response => {
            console.log(response.data.results);
        })*/;

        this.setState({images: response.data.results, submitted : false});
    };

    renderContent(){
        if (this.state.images && !this.state.submitted){
            return <ImageList images={this.state.images}/>
        }

        return <Loader />;
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {this.renderContent()}
            </div>
        );
    }
}

export default App;