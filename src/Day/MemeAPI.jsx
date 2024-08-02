import React from 'react'

const MemeAPI = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    randomName: ""
  })

  const [allMemes, setAllMemes] = React.useState([])
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    const name = allMemes[randomNumber].name

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
      randomName: name
    }))
  }
  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }

  return (
    <section className='meme-layout'>
      <h2>Meme Generator from API</h2>
      <button onClick={getMeme}>Get a new meme image</button>
      <div className="form-input">
        <input type="text" placeholder='Top text' name='topText'
          value={meme.topText} onChange={handleChange}
        />
        <input type="text" placeholder='Bottom text' name='bottomText'
          value={meme.bottomText} onChange={handleChange}
        />
      </div>

      <div className='meme-container'>
        <p>{meme.randomName}</p>
        <div>
          <img src={meme.randomImage} alt="" />
          <h3 className='meme-text top'>{meme.topText}</h3>
          <h3 className="meme-text bottom">{meme.bottomText}</h3>
        </div>
      </div>
    </section>
  )
}

export default MemeAPI