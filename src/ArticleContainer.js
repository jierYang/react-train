import React, {Component} from 'react';
import './ArticleContainer.css';
import ArticleContent from './ArticleContent';
import ReadMore from './ReadMore';

class ArticleContainer extends Component {
    constructor(props) {
        super(props);

        this.getInitialState();
    }

    getInitialState(){
        this.state = {
            overflow: 'auto',
            displayReadMore: false
        }
    }

    componentWillMount () {
    }
    componentDidMount () {
        if(this.componentRef && this.componentRef.clientHeight < this.componentRef.scrollHeight){
            this.setState({
                displayReadMore: true
            })
        }
    }
    componentWillReceiveProps (nextProps) {
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate (nextProps,nextState) {
        console.log("shouldComponentUpdate");
        return true;
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
            <div className="App" style={style} ref={(ref) => this.componentRef = ref}>
                <div claassName = "chooseFlow">
                    <div className="autoOverflow" onClick={() => {
                        this.setState({
                            overflow: 'auto'
                        })
                    }}>scroll
                    </div>

                    <div className="visibleOverflow" onClick={() => {
                        this.setState({
                            overflow: 'visible'
                        })
                    }}>full
                    </div>
                </div>
                {
                    this.props.articles.map(function (content) {
                        return (
                            <ArticleContent title={content.title} text={content.text}/>
                        )
                    })

                }

                { this.state.displayReadMore && <ReadMore /> }
            </div>
        );
    }
}

export default ArticleContainer;
