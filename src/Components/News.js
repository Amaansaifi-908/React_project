import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  articles = [

  ]
  constructor() {
    super();
    console.log("hello i am from constructor")

    this.state = {
      articles: this.articles,
      loading: false, page: 1
    }

  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8be7bf4b69a04bc8b0ef3df1f0f94c68&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  handleNextClick = async () => {

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) { }

    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8be7bf4b69a04bc8b0ef3df1f0f94c68&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({ page: this.state.page + 1, articles: parsedData.articles })
      console.log("next")
    };

  };

  handlePrevClick = async () => {
    console.log("prev")
    let url = ` https://newsapi.org/v2/top-headlines?country=in&apiKey=8be7bf4b69a04bc8b0ef3df1f0f94c68&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ page: this.state.page - 1, articles: parsedData.articles })
  };

  render() {
    return (
      <div className="container my-3" style={{ color: this.props.mode === `dark` ? `white` : `black` }}>
        <h2 >NewsZilla-Top Headlines</h2>
        <div className="row" style={{ color: 'black' }}>
          {this.state.articles.map((element) => {
            return <div className="col md-4 my-3" key={element.url}>
              <NewsItem style={{ backgroundColor: this.props.mode === `dark` ? `grey` : `grey` }} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className='btn btn-warning'>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className='btn btn-warning'>Next &rarr;</button>
        </div>
      </div>

    )
  }
}

export default News


