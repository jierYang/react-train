import React, {Component} from 'react';
import './ArticleContainer.css';
import ArticleContent from './ArticleContent';

class ArticleContainer extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     overflow: 'auto'
        // }
        this.getInitialState();
    }

    getInitialState(){
        this.state = {
            overflow: 'auto'
        }
    }

    componentWillMount () {
        console.log("componentWillMount");
    }
    componentDidMount () {
        console.log("componentDidMount");
    }
    componentWillReceiveProps (nextProps) {
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate (nextProps,nextState) {
        console.log("shouldComponentUpdate");
    }
    componentWillUpdate (nextProps,nextState) {
        console.log("componentWillUpdate");
    }
    componentDidUpdate (prevProps,prevState) {
        console.log("componentDidUpdate");
    }


    render() {
        const style = {fontSize: 32, color: '#8ca5e3', overflow: this.state.overflow};
        return (
            <div className="App" style={style}>
                <div>
                    <div clss="hrefOverflow" onClick={() => {
                        this.setState({
                            overflow: 'auto'
                        })
                    }}>scroll
                    </div>

                    <div clss="hrefOverflow" onClick={() => {
                        this.setState({
                            overflow: 'visible'
                        })
                    }}>
                    </div>
                </div>
                {
                    this.props.articles.map(function (content) {
                        return (
                            <ArticleContent title={content.title} text={content.text}/>
                        )
                    })

                }
            </div>
        );
    }
}

export default ArticleContainer;
