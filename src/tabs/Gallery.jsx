import { ToDoForm } from "components/ToDoForm/ToDoForm";
import { Component } from "react";
import { getImages } from "service/image.Api";

export class Gallery extends Component {
    state = {
        page: 1,
        query :''
    }
    

    componentDidUpdate(prevProps, prevState) {
        const { page, query } = this.state;
        if (prevState.page !== page || prevState.query !== query) {
        getImages(query,page)
    }
}

    handelSubmit = (query) => {
        this.setState({query: query})  
}

    render() {
        return <ToDoForm onSubmit={this.handelSubmit} />
   }
}