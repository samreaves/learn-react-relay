import React, { Component } from 'react';
import CreateLinkMutation from '../../mutations/CreateLinkMutation';
import '../../styles/CreateLink.css';

class CreateLink extends Component {
  /* Initial state */
  state = {
    description: '',
    url: '',
    loading: false
  }

  render() {

    if (this.state.loading) {
      return (
        <div>Submitting link...</div>
      );
    }
    else {
      return (
        <div className='create-link-container'>
          <div className='flex flex-column mt3'>
            <input
              className='mb2'
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
              type='text'
              placeholder='A description for the link'
            />

            <input
              className='mb2'
              value={this.state.url}
              onChange={(e) => this.setState({ url: e.target.value })}
              type='text'
              placeholder='the URL for the link'
            />
          </div>
          <div
            className='button'
            style={{ marginTop: '10px' }}
            onClick={() => this._createLink()}>
              Submit
            </div>
        </div>
      );
    }
  }

  _createLink = () => {
    const { description, url } = this.state;
    this.setState({ loading: true });
    CreateLinkMutation(description, url, () => {
      console.log('Mutation completed');
      this.setState({ loading: false, description: '', url: '' });
    }, (error) => {
       console.error(error)
       this.setState({ loading: false });
    });
  }
}

export default CreateLink;
