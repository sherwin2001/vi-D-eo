import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid text-monospace">
      <br></br>
      &nbsp;
      <br></br>
        <div className="row">
          <div className="col-md-10">
            <div className="embed-responsive embed-responsive-16by9" style={{ maxHeight: '700px'}}>
              <video
                src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`}
                controls
              >
              </video>
            </div>
            <div className='text-center'>
              <p></p>
              <h2><b>{this.props.currentTitle}</b></h2>
            </div>
          </div>
          <div className="col md-2 overflow-auto text-center" style={{ maxHeight: '700px', minWidth: '175px' }}>
            <h5><b>Welcome to the Decentralized Video Viewing and Storing Platform</b></h5>
            <form onSubmit={(event) => {
              event.preventDefault()
              const title = this.videoTitle.value
              this.props.uploadVideo(title)
            }}>
              &nbsp;
              <input type="file" accept='.mp4' onChange={this.props.captureFile} style={{width: '240px'}} />
              <p></p>
              <div className="form-group mr-sm-2">
                <input 
                  id="videoTitle"
                  type="text"
                  className="form-control-sm"
                  placeholder="Enter a Title"
                  ref={(input) => {this.videoTitle = input}}
                  required/>
              </div>
              <button type="submit" className='btn btn-warning btn-block btn-sm'>Upload and Store</button>
              &nbsp;
              <p></p>
            </form>
            {this.props.videos.map((video,key) => {
              return(
                <div className='card mb-4 text-center bg-secondary mx-auto' style={{width: '175px'}}>
                <div className='card-title bg-dark'>
                  <small className='text-white'><b>{video.title}</b></small>
                </div>
                <div>
                  <p onClick={() => this.props.changeVideo(video.hash, video.title)}>
                    <video
                      src={`https://ipfs.infura.io/ipfs/${video.hash}`}
                      style={{width:'150px'}}
                    />
                  </p>
                </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;