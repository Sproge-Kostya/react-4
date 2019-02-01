import React from "react";
import Uikit from "uikit";
import {getData} from "../../../api/api";

export class Album extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            photos:[]
        }
    }
    onClickPhotos(e){

        e.preventDefault();
        getData('/photos', {
            params: {
                albumId:1
            }
        })
        .then(photos => {
            this.setState({
                photos: photos.json,
            });
        });
        let items;
        for(let i = 0; i < this.state.photos.length; i++){
            items.push({'source':this.state.photos[i].url,"caption":this.state.photos[i].title});
        }
    }
    render() {
        return (
            <tr>
                <td><span uk-icon="icon: album; ratio: 2"></span></td>
                <td>{this.props.data.title}</td>
                <td>
                    <a href="#" onClick={(e)=>this.onClickPhotos(e)} className="uk-button uk-button-primary js-lightbox">Open album</a>
                </td>
            </tr>
        )
    }
}