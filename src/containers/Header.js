import React from 'react';
import AppBar from 'material-ui/AppBar';
  
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Header = () => (
  <AppBar
    title={<span style={styles.title}>DOTA 2 Team Combination</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight={
        <div>
        < Link to="/"><FlatButton label="Home" /></Link>
        < Link to="/createteam"><FlatButton label="Create Team" /></Link>
        </div>
           
        }
    
  />
);

export default Header;