import React from 'react';
import { Navigation } from './navigation';

class Page extends React.Component {
  render() {
    return (
      <div>
        <div className='pt24 pt48-ml viewport-full-mm scroll-auto pl24 pr18 w180-mm fixed-mm top left'>
          <Navigation navData={this.props.navData} />
        </div>
        <div className='mb24 ml180-mm flex-parent flex-parent--center-main'>
          <div className='pl24 pr24 wmax1200 mb48'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: React.PropTypes.node.isRequired,
  navData: React.PropTypes.object.isRequired
};


export { Page };
