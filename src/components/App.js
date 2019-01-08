import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID 26f1d9b70bf982834a7201fbe35c7ce31778d119cb22c7922e5d8098bf273c3f'
        }
      });
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App;
