import React from "react";
import API from "../../utils/API";
// import ImageCard from "../../components/ImageCard";
import LikeBtn from "../../components/LikeBtn";
import DislikeBtn from "../../components/DislikeBtn";

class Test extends React.Component {

    state = {
        search:"",
        photo: "https://vignette.wikia.nocookie.net/uncyclopedia/images/0/01/DramaticQuestionMark.png/revision/latest?cb=20060419021703",
    };
    
    handleFormSubmit = event => {

        event.preventDefault();

        console.log("Searching...");

        API.getManyGif(this.state.search)
            .then(res => {
                console.log(res.data.data)
                const randomGiphy = (arr) => Math.floor(Math.random() * arr.length)
                this.setState( { photo: res.data.data[randomGiphy(res.data.data)].images.original.url }, () => console.log(this.state.photo))
            })
    };

    handleInputChange = event => {

        this.setState({search: event.target.value})
    };

    likeGif = () => {

        console.log("Liked");
    };

    dislikeGif = () => {

        console.log("DisLiked");
    };

    render() {
        return (
            <div>
                <form>
                    <label> Search:
                        <input 
                            type="text" 
                            name="search"
                            value={this.state.search}
                            onChange={this.handleInputChange}
                        />
                    </label>  
                </form>
                <button 
                    id="getGif"
                    disabled={!(this.state.search)}
                    onClick={this.handleFormSubmit}
                    >
                    Submit
                </button>
                <div>
                    <img
                        alt="404 Please Search Again"
                        src={this.state.photo}
                    />
                    {/* <ImageCard
                        src = {this.state.photo}
                    /> */}
                </div>
                <div>
                    <LikeBtn
                        onClick={this.likeGif}
                    />
                    <DislikeBtn 
                        onClick={this.dislikeGif}
                    />
                </div>
            </div>
        )
    }
};

export default Test;