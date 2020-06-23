import React from "react";
import {
  Container,
  PlayPauseButton,
  PlayIcon,
  PauseIcon,
  ScrubberContainer,
  ScrubberProgress,
  ScrubberLoaded,
  TimeContainer,
  TimeContainerPlayed,
  // TimeContainerDuration
} from "./styles/AudioPlayer";
import Select from "./Select";

class AudioPlayerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      progress: 0,
      audioDuration: 0,
      audio: new Audio(props.audioLink)
    };
  }

  updatePlayState = () => {
    this.setState({ play: false });
  };

  togglePlay = () => {
    const method = this.state.play ? "pause" : "play";
    this.setState({ play: !this.state.play });
    try {
      this.state.audio[method]()
    } catch (error) {
      if (error) {
        this.props.fetchPreviews()
      }
    }
  };

  updateProgress = () => {
    const percent =
      (this.state.audio.currentTime / this.state.audio.duration) * 100;
    this.setState({ progress: percent });
  };

  onScrub = event => {
    const scrubTime =
      (event.nativeEvent.offsetX / event.currentTarget.offsetWidth) *
      this.state.audio.duration;
    // eslint-disable-next-line
    this.state.audio.currentTime = scrubTime;
  };

  pad = (str, max) => {
    str = str.toString();
    return str.length < max ? this.pad("0" + str, max) : str;
  };

  getPlaybackTime = time => {
    time = Math.ceil(time);
    let hours = this.pad(Math.floor(time / 3600), 2);
    let minutes = this.pad(Math.floor((time - hours * 3600) / 60), 2);
    let seconds = this.pad(time - hours * 3600 - minutes * 60, 2);
    if (hours > 0) {
      return `${hours}:${minutes}:${seconds}`;
    } else {
      return `${minutes}:${this.pad(seconds, 2)}`;
    }
  };

  handleRangeUpdate = playbackRate => {
    // eslint-disable-next-line
    this.state.audio.playbackRate = playbackRate;
    this.setState({ playbackRate });
  };

  componentDidMount () {
    this.state.audio.addEventListener("pause", this.updatePlayState);
    this.state.audio.addEventListener("timeupdate", this.updateProgress);
    this.state.audio.addEventListener("loadeddata", () => {
      this.setState({ audioDuration: this.state.audio.duration });
    });
    // eslint-disable-next-line
    this.state.audio.preload = "auto";
  }


  render () {
    return (
      <div
        className="Track-Previews__track-title"
        style={{ color: 'white', fontSize: '14px' }}>
        {/* <div style={{ width: 'max-content' }}> */}
        {this.props.track.split('-')[0]}
        {/* </div>  */}
        <Container>
          <PlayPauseButton onClick={() => this.togglePlay()}>
            {this.state.play ? <PauseIcon /> : <PlayIcon />}
          </PlayPauseButton>

          <ScrubberContainer>
            <ScrubberProgress onClick={e => this.onScrub(e)}>
              <ScrubberLoaded progress={this.state.progress} />
            </ScrubberProgress>
          </ScrubberContainer>

          <TimeContainer>
            <TimeContainerPlayed>
              {this.getPlaybackTime(this.state.audio.currentTime)}
            </TimeContainerPlayed>
            {/* <span>{"/"}</span>
          <TimeContainerDuration> */}
            {/* {this.getPlaybackTime(this.state.audioDuration)} */}
            {/* </TimeContainerDuration> */}
          </TimeContainer>
          {
            true && (
              <Select
                value={this.state.playbackRate}
                options={this.state.playbackRates}
                onChange={playbackRate => this.handleRangeUpdate(playbackRate)}
              />
            )
          }
        </Container >
      </div>
    );
  }
}

export default AudioPlayerContainer;
