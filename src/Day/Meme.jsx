import React from 'react'
import dataMeme from './dataMeme'

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    randomName: ""
  })
  // const [memeImage, setMemeImage] = React.useState("")
  // const [memeName, setMemeName] = React.useState("")

  function getMeme() {
    const memesArray = dataMeme.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    console.log(randomNumber);

    const url = memesArray[randomNumber].url
    const name = memesArray[randomNumber].name
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
      randomName: name
    }))
    // setMemeImage(url);  
    // setMemeName(memesArray[randomNumber].name);  
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
      <h2>Meme Generator</h2>
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
        {/* <p>{memeName}</p> */}
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

export default Meme