import React, { Component } from 'react';
import axios from 'axios';

class AlbumList extends Component {
    state = {
        albums: [],
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${this.props.userId}`)
            .then((response) => {
                this.setState({ albums: response.data });
            })
            .catch((error) => {
                console.error('Error fetching albums:', error);
            });
    }

    render() {
        return (
            <div>
                <h2>Альбоми</h2>
                <ul>
                    {this.state.albums.map((album) => (
                        <li key={album.id}>
                            {album.title}
                            <button onClick={() => this.showPhotos(album.id)}>Photos</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    showPhotos(albumId) {

    }
}

export default AlbumList;