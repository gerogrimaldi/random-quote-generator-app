import React from 'react';
import '../assets/css/components.css';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            quote: "",
            twitter: 'http://twitter.com/intent/tweet?text='
        }
        this.fetchQuote = this.fetchQuote.bind(this);
        this.generateTweet = this.generateTweet.bind(this);
    }
    fetchQuote() {
        fetch('https://type.fit/api/quotes')
            .then(response => response.json())
            .then(data => {
                let index = Math.floor(Math.random() * data.length);
                let author = data[index].author
                //prevent null author
                if(author===null){ 
                    author= "Anonymous"
                }
                //set state
                this.setState({
                    author: author,
                    quote: data[index].text,
                })
            })
    }
    generateTweet() {
        if (this.state.author === null) {
            this.setState({
                author: "Anonymous"
            })
        }
        //quote text
        let quote_text = this.state.quote.split(" ");
        let quote_author = this.state.author.split(" ");
        let quote_text_str = '"%20'
        // add quote text
        quote_text.forEach((word) => {
            quote_text_str += word + "%20";
        })
        quote_text_str += '"%20-' //add end inverted commas and slash
        //add author
        quote_author.forEach((word) => {
            quote_text_str += word + "%20";
        })
        console.log(quote_text_str)
        // return text
        return [this.state.twitter, quote_text_str].join("")
    }
    componentDidMount() {
        this.fetchQuote();
        console.log("Component mounted");
    }
    render() {
        const tweet = this.generateTweet();
        console.log(tweet);
        return (
            <div id="quote-box" className="quote-box">
                <div id="text" className="quote-text">
                    <p>" {this.state.quote} "</p>
                </div>
                <div id="author" className="quote-author">
                    <p>- {this.state.author}</p>
                </div>
                <div id="buttons">
                    <button id="new-quote" onClick={this.fetchQuote} className="new-quote-btn" title="Show me a new quote!">New Quote</button>
                    <a id="tweet-quote" href={tweet} target="_blank" rel="noreferrer">
                        <button className="tweet-btn" title="Tweet this quote!">Tweet</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default QuoteBox;