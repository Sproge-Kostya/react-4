import React from "react";
import UIkit from 'uikit'
import {getData} from "../../../api/api";

export class Album extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            photos:[]
        }
    }

    onClickPhotos(e,id){
        e.preventDefault();
        getData('/photos', {
            params: {
                albumId:id
            }
        })
        .then(data => {

            const photos = data.json;

            UIkit.lightboxPanel({
                items: photos.map((photos)=>{
                    return {
                        source: `${photos.url}.jpg`,
                        caption: photos.title
                    }
                })
            }).show();

        });
    }

    render() {
        return (
            <tr>
                <td>
                    <span data-uk-icon="icon: album; ratio: 2"></span>
                </td>
                <td>{this.props.data.title}</td>
                <td>
                    <span onClick={(e)=>this.onClickPhotos(e,this.props.data.id)} className="uk-button uk-button-primary js-lightbox">Open album</span>
                </td>
            </tr>
        )
    }
}