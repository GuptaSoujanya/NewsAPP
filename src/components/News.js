import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps ={
        country:"in",
        pageSize:7,
        category:""
    }
    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number
    }
    constructor(props){
        super(props);
        this.state={
            articles:this.articles,
            loading:false,
            page:1
            
        }
        document.title = this.props.category?"NewsBuddys - " +this.capitalize(this.props.category):"NewsBuddys - Home"
    }
    capitalize = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    

    async componentDidMount(){
        let newsUrl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=634fa4dd16024a30b402a42dd7ff950f&page=1&pagesize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(newsUrl);
        let parseData = await data.json();
        this.setState({loading:false});
        this.setState({articles: parseData.articles , totalpage: parseData.totalResults , loading:false})
    }

    nextClick = async() =>{
        let newsUrl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=634fa4dd16024a30b402a42dd7ff950f&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
       this.setState({loading:true});
        let data = await fetch(newsUrl);
        let parseData = await data.json();
        this.setState({loading:false});
        this.setState({
            page:this.state.page+1,
            articles: parseData.articles
        })
        
    }
    prevClick = async() =>{
        let newsUrl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=634fa4dd16024a30b402a42dd7ff950f&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(newsUrl);
        let parseData = await data.json();
        this.setState({loading:false});
        this.setState({
            page:this.state.page-1,
            articles: parseData.articles
        })
       
    }
  render() {
    return (
      <div className="container my-2">
        <h1 className="text-center my-4">NewsBuddys-Top {this.capitalize(this.props.category)} Headline</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row my-2">
        {!this.state.loading &&this.state.articles?.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,75):""} imageUrl={element.urlToImage} url={element.url} publish={element.publishedAt} author={element.author} source={element.source.name}/>
            </div>
        })} 
        </div>
       <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-dark" type="button" onClick={this.prevClick}> &larr; Previous</button>
        <button className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalpage/6)} type="button" onClick={this.nextClick}>Next &rarr;</button>
       </div>
      </div>
    )
  }
}
