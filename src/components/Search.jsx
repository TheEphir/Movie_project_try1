import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handeKey = (event) => {
    if (event.key === 'Enter') {
      this.props.SearchFunc(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => this.props.SearchFunc(this.state.search, this.state.type)
    );
  };

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='input-field'>
            <input
              placeholder='search'
              type='search'
              className='validate'
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handeKey}
            />
          </div>
        </div>
        <div>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='all'
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Only Movie</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Only Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
