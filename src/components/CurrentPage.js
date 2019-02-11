import React from 'react';

export class CurrentPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            page: props.pagination.page || 1,
            totalPage: Math.ceil(props.pagination.total / props.pagination.limit),
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pagination !== this.props.pagination) {
            this.setState({
                page:this.props.pagination.page,
                totalPage: Math.ceil(this.props.pagination.total / this.props.pagination.limit)
            });
        }
    }

    onClick(curr, type) {
        if (isNaN(curr)) return;
        const {page, totalPage} = this.state;
        if (type === "previous" && page > 1) {
            this.setState({
                page: curr - 1,
            });
            this.props.handelChange('page', curr - 1)
        } else if (type === "next" && curr < totalPage) {
            this.setState({
                page: curr + 1,
            });
            this.props.handelChange('page', curr + 1)
        }
    }

    render() {
        return(
            <ul className="uk-pagination uk-flex-center uk-margin-auto-right" data-uk-margin>
                {
                    this.state.page > 1 ? (
                        <li onClick={(e) => this.onClick(this.state.page, 'previous')}>
                            <span>
                                <span data-uk-pagination-previous>
                                    <svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"
                                         ratio={1}>
                                        <polyline fill="none" stroke="#000" strokeWidth="1.2" points="6 1 1 6 6 11"/>
                                    </svg>
                                </span>
                            </span>
                        </li>
                    ) : (
                        null
                    )
                }
                {
                    <li key={this.state.page} className='uk-active'>
                        <span>
                            {this.state.page}
                        </span>
                    </li>
                }
                {
                    this.state.page < this.state.totalPage ? (
                        <li onClick={(e) => this.onClick(this.state.page, 'next')}>
                            <span>
                                <span data-uk-pagination-next>
                                    <svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"
                                         ratio={1}>
                                        <polyline fill="none" stroke="#000" strokeWidth="1.2" points="1 1 6 6 1 11"/>
                                    </svg>
                                </span>
                            </span>
                        </li>
                    ) : (
                        null
                    )
                }
            </ul>
        )
    }
}