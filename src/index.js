import React from 'react'
import ReactDOM  from 'react-dom'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBook, faCoffee } from '@fortawesome/free-solid-svg-icons'

function App(){
    let [text,setText] = React.useState("")
    const handleMessageChange = event => {
        // 👇️ access textarea value
        setText(event.target.value);
      };
      let pronouns = ["i","you","he","she","we","they","it"]
      let textArray = text.split("")
      let textWords = text === ""? [] :text.split(" ")
      let paragraphArray = text === ""? [] :text.split('\n\n')
      let pronounText = text.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(" ")
      let ending = /([.?!])/gi
      let pronounCount = 0
      let lgth = 0
      let longest;
      let reading = textWords.length/225
      let readingTime = `${Math.round(reading)} minute${Math.round(reading)>1? 's' : ''}`
      for(let i = 0; i<textWords.length; i++){
        if(textWords[i].length > lgth){
            lgth = textWords[i].length
            longest = textWords[i]
        }
      } 
    for(let i = 0; i<pronounText.length; i++){
        for(let j = 0; j<pronouns.length; j++){
    pronounText[i] == pronouns[j]? pronounCount++ : pronounCount += 0
        }
    }
        
      
      const matches = textWords.filter(value => ending.test(value))
      let sentenceCount = matches.length

    const book = <FontAwesomeIcon icon={faBook} />
    const twitter = <FontAwesomeIcon icon={faBell} />
    const categories = [{name :'Words', number : textWords.length},{name :'Characters', number : textArray.length},{name :'Sentences', number : sentenceCount
},{name :'Paragrahs', number : paragraphArray.length},{name :'Pronouns', number : pronounCount}]

    let mapped = categories.map(item =>{
return <div className='category'><p className='category-title'>{item.name}</p>
        <span className='counter-number' id={item.name}>{item.number}</span>
        </div>


    })

    
    return(
        <div className='container'>
            <nav>
                <a href=''>Text Analyser</a>
                <ul>
                    <li>{book}</li><li>{twitter}</li>
                </ul>
            </nav>
            <main>
                <div className='counter'>
                    {mapped}
                </div>
                <div className='input-text'>
            <form>
            <textarea onChange = {handleMessageChange} placeholder='Paste your text here...' className='text'></textarea>
            </form>
            <div className='calculations'>
        <p>Average Reading Time  <span className='bold'>{ reading == 0? "-" : reading > 0 && reading< 1? "~1 minute" : readingTime}</span></p><p>Longest word: <span className='bold'>{longest? longest. replace(/[^a-zA-Z ]/g, ''): "-"}</span></p>
            </div>
                </div>
            </main>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))