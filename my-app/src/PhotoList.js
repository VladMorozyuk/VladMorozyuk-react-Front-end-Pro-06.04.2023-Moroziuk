import React, { Component } from 'react';
import axios from 'axios';

class PhotoList extends Component {
    state = {
        photos: [],
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.albumId}`)
            .then((response) => {
                this.setState({ photos: response.data });
            })
            .catch((error) => {
                console.error('Error fetching photos:', error);
            });
    }

    render() {
        return (
            <div>
                <h3>Фотографії</h3>
                <ul>
                    {this.state.photos.map((photo) => (
                        <li key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PhotoList;