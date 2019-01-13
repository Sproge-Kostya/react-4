import React from 'react';

export class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: props.data.current || 1,
            totalPage: Math.ceil(props.data.total / props.data.perPage),
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
                pageNav: [...this.genPages(state.pages, state.current)]
            };
        });
    }

    generateArray(totalPage) {
        return (function (n) {
            for (var a = []; n--; a[n] = n + 1) ;
            return a;
        })(totalPage);
    }

    genPages(pages, current) {
        const {totalPage} = this.state;
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
        return this.addEtc(allPages);
    }

    addEtc(pages) {
        if (pages.length <= 1) {
            return pages;
        }
        let lastPage = pages[pages.length - 1];
        let secondLast = pages[pages.length - 2];
        pages[0] + 1 !== pages[1] && pages.splice(1, 0, "...");
        lastPage !== secondLast + 1 && pages.splice(pages.length - 1, 0, "...");
        return pages;
    }

    onClick(curr, type, event) {
        if (isNaN(curr)) return;
        const {current, totalPage} = this.state;
        if (type === "previous" && current > 1) {
            this.setState({
                current: curr - 1,
                pageNav: [...this.genPages(this.state.pages, curr - 1)]
            });
        } else if (type === "next" && curr < totalPage) {
            this.setState({
                current: curr + 1,
                pageNav: [...this.genPages(this.state.pages, curr + 1)]
            });
        } else {
            this.setState({
                current: curr,
                pageNav: [...this.genPages(this.state.pages, curr)]
            });
        }
        this.props.handelClick(curr, event);
    }

    render() {
        return (
            <ul className="uk-pagination uk-flex-center" data-uk-margin>
                <li onClick={(e) => this.onClick(this.state.current, 'previous', e)}>
                    <a href="">
                        <span data-uk-pagination-previous>
                            <svg
                                width={7}
                                height={12}
                                viewBox="0 0 7 12"
                                xmlns="http://www.w3.org/2000/svg"
                                ratio={1}
                            >
                            <polyline
                                fill="none"
                                stroke="#000"
                                strokeWidth="1.2"
                                points="6 1 1 6 6 11"
                            />
                            </svg>
                        </span>
                    </a>
                </li>
                {this.state.pageNav.map(page => {
                    return (
                        <li key={page} onClick={(e) => this.onClick(Number(page), '', e)}
                            className={page === this.state.current ? 'uk-active' : ''}>
                            <a href="">
                                {page}
                            </a>
                        </li>
                    );
                })}
                <li onClick={(e) => this.onClick(this.state.current, 'next', e)}>
                    <a href="">
                <span data-uk-pagination-next>
                    <svg
                        width={7}
                        height={12}
                        viewBox="0 0 7 12"
                        xmlns="http://www.w3.org/2000/svg"
                        ratio={1}
                    >
                    <polyline
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.2"
                        points="1 1 6 6 1 11"
                    />
                    </svg>
                </span>
                    </a>
                </li>
            </ul>
        );
    }
}