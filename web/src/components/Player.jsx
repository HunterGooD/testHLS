import React, { useRef, useState } from "react"
import ReactPlayer from "react-player"

const HLSPlayer = () => {
  const player = useRef(null)
  const [levels, setLevels] = useState([])

  const handleReady = (player) => {
    const hls = player.getInternalPlayer("hls")
    setLevels(hls.levels)
  }

  const handleLevelClick = (level) => () => {
    player.current.getInternalPlayer("hls").currentLevel = level
  }

  return (
    <>
      <div>
        <ReactPlayer
          ref={player}
          onReady={handleReady}
          className="react-player"
          url="/m3u8/out.m3u8"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      <div>
        {levels.map((l, index) => <div onClick={handleLevelClick(index)} key={l.name}>{l.height}</div>)}
      </div>
    </>
  )
}

export default HLSPlayer