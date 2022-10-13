import React from 'react';
import youtube from "./api/youtube";
import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

import PhotoList from "./components/PhotoList";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./components/VideoItem.css";


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: [],
    term: "",
    videosID:[],
    selectedID:[],
    photos:[],
    
  }
   exportData = () => {

    const fileName = "my-file";
    var query = this.state.term;
    
var dict = {};
dict[query] = this.state.selectedID;
  const json = JSON.stringify(dict);
  const blob = new Blob([json], { type: "application/json" });
  const href = URL.createObjectURL(blob);


  const link = document.createElement("a");
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  
};

  onSearchSubmit = async term => {
  this.state.selectedID=[];
     this.state.videosID=[];
      this.state.videos=[];
       this.state.photos=[];
       this.state.selectedVideo =[];
var lp = await unsplash.get("/search/photos", { params: {query: term} });


lp = lp.data.results;
lp = lp.slice(0,7);
this.state.photos = lp;

   const { data: { items: videos }} = await youtube.get("/search", { params: { q: term } });

    var pk =[];
    for (let i = 0; i < videos.length; i++) {
pk.push(videos[i].id.videoId);

}
for (let i = 0; i < lp.length; i++) {
pk.push(lp[i].id);

}



    this.setState({ videos, term:term,videosID: pk,photos:lp })

    
  }

  onSelectVideo = (selectedVideo) => {
  var newStateArray = this.state.selectedVideo.slice();

newStateArray.push(selectedVideo);
var ps = this.state.videosID;
var pk = this.state.selectedID.slice();


    for (let i = 0; i < ps.length; i++) {
    
    if ((selectedVideo.id.videoId === ps[i]) ||(selectedVideo.id === ps[i])) {
    if (i<2){
    var s = "https://www.youtube.com/embed/"+ selectedVideo.id.videoId;
    pk.push(s);
    }
    else {
    
    var image = selectedVideo.urls.small;
        pk.push(image);
    }
    
    
    }


}


    this.setState({ selectedVideo: newStateArray, selectedID:pk });

  }

  render() {
    const { videos,photos} = this.state;
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
<div class = "container">
<div class = "text-center">
          <div className="row gy-5 text-center">

            <div className="col-md-4 h-50 w-40" >

                      <section>
              <VideoList videos={videos} onVideoSelect={this.onSelectVideo} />
              <PhotoList videos={photos.slice(0,1)} onVideoSelect={this.onSelectVideo} />
                          </section>

            </div>


            <div className="col-md-4 h-50 w-40" >

                                  <section>
              <PhotoList videos={photos.slice(1,4)} onVideoSelect={this.onSelectVideo} />
                                      </section>

            </div>
            
             <div className="col-md-4 h-50 w-40" >

                                  <section>
              <PhotoList videos={photos.slice(4,7)} onVideoSelect={this.onSelectVideo} />
                                      </section>

            </div>


          </div>
<br />
<br />





             <button type="button" class="btn btn-success btn-lg mb-5" style={videos.length>1 ? {}: { display: 'none' }}  onClick={this.exportData}>
        Export Json
      </button>
      <br />

</div>
</div>
      </div>
    )
  }
};

export default App;

