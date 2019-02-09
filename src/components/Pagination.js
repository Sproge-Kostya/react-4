import React from 'react';

export class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.pagination.page || 1,
            totalPage: Math.ceil(props.pagination.total / props.pagination.limit),
            pages: [],
            pageNav: []
        };
    }

    componentDidMount() {
        this.setState({
            pages: [...this.generateArray(this.state.totalPage)]
        });
        this.setState((state) => {
            return {
                pageNav: [...this.genPages(state.pages, this.state.page)]
            };
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pagination.total !== this.props.pagination.total) {
            this.setState({
                totalPage: Math.ceil(this.props.pagination.total / this.props.pagination.limit)
            });
        }
        if (prevState.totalPage !== this.state.totalPage) {
            this.setState({
                pages: [...this.generateArray(this.state.totalPage)]
            });
        }
        if (prevState.pages !== this.state.pages) {
            this.setState((state) => {
                return {
                    pageNav: [...this.genPages(state.pages, this.state.page)]
                };
            });
        }
    }


    generateArray(totalPage) {
        return (function (n) {
            for (var a = []; n--; a[n] = n + 1) ;
            return a;
        })(totalPage);
    }

    genPages(pages, current) {
        const totalPage = this.state.totalPage;
        const first = page => page === 1;
        const middle = (page, between) => page > between.bet && page <= between.ween;
        const last = page => page === totalPage;
        const between = {
            bet: 0,
            ween: 0
        };
        if (current <= 5) {
            between.bet = 1;
            between.ween = 8;
        } else if (current > totalPage - 5) {
            between.bet = totalPage - 8;
            between.ween = totalPage - 1;
        } else {
            between.bet = current - 4;
            between.ween = current + 3;
        }

        const allPages = pages.filter(
            page => first(page) || middle(page, between) || last(page)
        );
        const newPages = allPages.map(page => {
            if (first(page) || middle(page, between) || last(page)) {
                return {
                    id: page,
                    value: page
                };
            }
        });
        return this.addEtc(newPages);
    }

    addEtc(pages) {
        if (pages.length <= 1) {
            return pages;
        }
        let lastPage = pages[pages.length - 1]['id'];
        let secondLast = pages[pages.length - 2]['id'];
        pages[0]['id'] + 1 !== pages[1]['id'] && pages.splice(1, 0, {id: '...',value:'previous'});
        lastPage !== secondLast + 1 && pages.splice(pages.length - 1, 0, {id: '...',value:'next'});
        return pages;
    }

    onClick(curr, type, event) {
        if (isNaN(curr)) return;
        const {page, totalPage} = this.state;
        if (type === "previous" && page > 1) {
            this.setState({
                page: curr - 1,
                pageNav: [...this.genPages(this.state.pages, curr - 1)]
            });
            this.props.handelClick(curr - 1, event);
        } else if (type === "next" && curr < totalPage) {
            this.setState({
                page: curr + 1,
                pageNav: [...this.genPages(this.state.pages, curr + 1)]
            });
            this.props.handelClick(curr + 1, event);
        } else {
            this.setState({
                page: curr,
                pageNav: [...this.genPages(this.state.pages, curr)]
            });
            this.props.handelClick(curr, event);
        }
    }

    render() {
        return (
            <ul className="uk-pagination uk-flex-center" data-uk-margin>
                {
                    this.state.page > 1 ? (
                        <li onClick={(e) => this.onClick(this.state.page, 'previous', e)}>
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
                    this.state.pageNav.map(page => {
                        return (
                            <li key={page.value} onClick={(e) => this.onClick(Number(page.value), '', e)}
                                className={page.value === this.state.page ? 'uk-active' : ''}>
                                <span>
                                    {page.id}
                                </span>
                            </li>
                        );
                    })
                }
                {
                    this.state.page < this.state.totalPage ? (
                        <li onClick={(e) => this.onClick(this.state.page, 'next', e)}>
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
        );
    }
}