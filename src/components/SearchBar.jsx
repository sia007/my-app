import React from "react"

class SearchBar extends React.Component {
  state = {
    term: ''
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({term: ''})
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" id = "form2" onSubmit={this.onFormSubmit} >
          <div className="field">
            <label>Search</label>
            <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
